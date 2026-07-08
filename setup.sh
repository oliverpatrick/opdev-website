#!/usr/bin/env bash
# Homelab setup script — Docker or Kubernetes edition
# Covers Phases 2-13 (Phase 1 / Ubuntu install is done before this runs)
# Run as your regular user (sudo is called internally where needed)

# ─────────────────────────────────────────────────────────────────────────────
# Output helpers
# ─────────────────────────────────────────────────────────────────────────────
RED='\033[0;31m'; GRN='\033[0;32m'; YLW='\033[1;33m'
BLU='\033[0;34m'; CYN='\033[0;36m'; BLD='\033[1m'; NC='\033[0m'

ph()    { echo -e "\n${BLU}${BLD}━━━  $1  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"; }
stp()   { echo -e "\n${CYN}▶  $1${NC}"; }
ok()    { echo -e "${GRN}✓  $1${NC}"; }
warn()  { echo -e "${YLW}⚠  $1${NC}"; }
die()   { echo -e "${RED}✗  $1${NC}" >&2; exit 1; }
ask()   { read -rp "$(echo -e "${CYN}$1:${NC} ")" "$2"; }
pause() { echo -e "\n${YLW}${BLD}  Press Enter when ready to continue...${NC}"; read -r; }
confirm() {
  local _a
  read -rp "$(echo -e "${YLW}$1 [y/N]: ${NC}")" _a
  [[ "${_a:-N}" =~ ^[Yy]$ ]]
}

# ─────────────────────────────────────────────────────────────────────────────
# Reset / wipe
# ─────────────────────────────────────────────────────────────────────────────
do_reset() {
  echo ""
  warn "This will remove all services, containers, configs, and data from a previous run."
  warn "Docker engine, Tailscale, and base packages will NOT be removed."
  echo ""
  local _confirm
  read -rp "$(echo -e "${RED}${BLD}Type RESET to confirm, anything else to cancel: ${NC}")" _confirm
  [[ "$_confirm" == "RESET" ]] || { echo "Cancelled."; exit 0; }

  stp "Stopping and removing compose stacks..."
  if [ -d "$HOME/services" ]; then
    for dir in "$HOME"/services/*/; do
      if [ -f "$dir/docker-compose.yml" ]; then
        (cd "$dir" && sudo docker compose down 2>/dev/null || true)
      fi
    done
  fi

  if confirm "Also delete Docker volumes? (removes all service data — Gitea repos, Grafana dashboards, Mealie recipes)"; then
    sudo docker volume prune -f 2>/dev/null || true
    ok "Volumes removed"
  else
    warn "Volumes kept — data is safe"
  fi

  sudo docker network rm web 2>/dev/null || true
  ok "Docker network removed"

  stp "Removing ~/services directory..."
  rm -rf "$HOME/services"
  ok "~/services removed"

  stp "Removing cloudflared..."
  sudo systemctl stop cloudflared    2>/dev/null || true
  sudo systemctl disable cloudflared 2>/dev/null || true
  sudo dpkg -r cloudflared           2>/dev/null || true
  sudo rm -rf /etc/cloudflared/ "$HOME/.cloudflared/"
  ok "cloudflared removed"

  stp "Removing k3s (if installed)..."
  if [ -f /usr/local/bin/k3s-uninstall.sh ]; then
    sudo /usr/local/bin/k3s-uninstall.sh
    ok "k3s removed"
  else
    ok "k3s not found — skipped"
  fi

  stp "Removing Helm (if installed)..."
  sudo rm -f /usr/local/bin/helm
  ok "Helm removed"

  stp "Removing k9s (if installed)..."
  rm -f "$HOME/.local/bin/k9s" 2>/dev/null || true
  ok "k9s removed"

  stp "Clearing KUBECONFIG from /etc/environment..."
  sudo sed -i '/^KUBECONFIG=/d' /etc/environment
  ok "/etc/environment cleaned"

  stp "Removing fail2ban jail config..."
  sudo rm -f /etc/fail2ban/jail.local
  sudo systemctl restart fail2ban 2>/dev/null || true
  ok "fail2ban reset to defaults"

  stp "Resetting UFW rules..."
  sudo ufw --force reset 2>/dev/null || true
  sudo ufw allow 22/tcp >/dev/null  # keep SSH open after reset
  ok "UFW reset (SSH port kept open)"

  stp "Removing hostname from /etc/hosts..."
  sudo sed -i '/greenlane/d' /etc/hosts
  ok "/etc/hosts cleaned"

  echo ""
  ok "Reset complete. Run setup.sh again for a fresh install."
  exit 0
}

# ─────────────────────────────────────────────────────────────────────────────
# Shared phases (both modes)
# ─────────────────────────────────────────────────────────────────────────────
phase_system() {
  ph "Phase 2 — System Setup"

  echo ""
  echo -e "${BLD}A few questions before we start:${NC}"
  echo ""
  ask "Your server username (e.g. oli)" SERVER_USER
  ask "Server hostname set during install (e.g. greenlane)" SERVER_HOSTNAME
  ask "Server LAN IP (e.g. 192.168.0.100)" SERVER_IP

  stp "Updating packages..."
  sudo apt update -qq && sudo apt upgrade -y -qq
  ok "System updated"

  stp "Installing essential tools..."
  sudo apt install -y -qq curl wget git vim htop ufw fail2ban net-tools unzip
  ok "Tools installed"

  stp "Adding $SERVER_HOSTNAME to /etc/hosts on this machine..."
  if ! grep -q "$SERVER_HOSTNAME" /etc/hosts; then
    echo "127.0.1.1 $SERVER_HOSTNAME" | sudo tee -a /etc/hosts >/dev/null
  fi
  echo ""
  warn "Add this line to /etc/hosts on your LAPTOP too (not this server):"
  echo -e "    ${BLD}$SERVER_IP $SERVER_HOSTNAME${NC}"

  stp "Configuring UFW firewall..."
  sudo ufw allow 22/tcp  >/dev/null
  sudo ufw allow 80/tcp  >/dev/null
  sudo ufw allow 443/tcp >/dev/null
  sudo ufw --force enable >/dev/null
  ok "UFW enabled (22, 80, 443 open)"
}

phase_ssh() {
  ph "Phase 3 — SSH Hardening"

  stp "Disabling password auth and root login..."
  sudo sed -i 's/^#*PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
  sudo sed -i 's/^#*PermitRootLogin.*/PermitRootLogin no/'               /etc/ssh/sshd_config
  sudo sed -i 's/^#*PubkeyAuthentication.*/PubkeyAuthentication yes/'    /etc/ssh/sshd_config
  sudo systemctl restart ssh
  ok "sshd_config hardened"

  stp "Configuring fail2ban..."
  sudo tee /etc/fail2ban/jail.local >/dev/null <<'EOF'
[DEFAULT]
bantime  = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true
port    = ssh
logpath = %(sshd_log)s
backend = %(sshd_backend)s
EOF
  sudo systemctl enable fail2ban --quiet
  sudo systemctl restart fail2ban
  ok "fail2ban configured"

  echo ""
  warn "SSH keys — run this from your LAPTOP (not this server) before proceeding:"
  echo -e "    ${BLD}ssh-keygen -t ed25519 -C 'homelab'${NC}"
  echo -e "    ${BLD}ssh-copy-id $SERVER_USER@$SERVER_IP${NC}"
  echo ""
  warn "Then verify key login works in a NEW terminal window before continuing."
  echo -e "    ${BLD}ssh $SERVER_USER@$SERVER_IP${NC}  ← should NOT ask for password"
  pause
}

phase_tailscale() {
  ph "Phase 4 — Tailscale"

  if command -v tailscale &>/dev/null; then
    ok "Tailscale already installed — skipping install"
  else
    stp "Installing Tailscale..."
    curl -fsSL https://tailscale.com/install.sh | sh
    ok "Tailscale installed"
  fi

  stp "Connecting to your tailnet..."
  warn "A browser URL will appear — open it to authenticate greenlane with your Tailscale account."
  echo ""
  sudo tailscale up --ssh
  ok "Tailscale connected"
}

phase_docker() {
  ph "Phase 5 — Docker"

  if command -v docker &>/dev/null; then
    ok "Docker already installed — skipping"
    return
  fi

  stp "Installing Docker Engine..."
  curl -fsSL https://get.docker.com | sh
  ok "Docker installed"

  stp "Adding $SERVER_USER to docker group..."
  sudo usermod -aG docker "$SERVER_USER"
  ok "User added to docker group"

  stp "Installing Docker Compose plugin..."
  sudo apt install -y -qq docker-compose-plugin
  ok "Docker Compose installed"

  warn "Docker group changes take effect on next login. This script uses 'sudo docker' for now."
}

# ─────────────────────────────────────────────────────────────────────────────
# Docker mode
# ─────────────────────────────────────────────────────────────────────────────
docker_phase_network() {
  ph "Phase 6 — Shared Docker Network"

  sudo docker network inspect web &>/dev/null || sudo docker network create web
  ok "Docker network 'web' ready"

  mkdir -p "$HOME/services"
  ok "~/services directory ready"
}

docker_phase_caddy() {
  ph "Phase 7 — Caddy Reverse Proxy"

  echo ""
  ask "Your domain (e.g. opdev.co.uk)" CF_DOMAIN

  mkdir -p "$HOME/services/caddy"

  stp "Writing Caddyfile..."
  cat > "$HOME/services/caddy/Caddyfile" <<EOF
{
    admin off
}

http://gitea.$CF_DOMAIN {
    reverse_proxy gitea:3000
}

http://grafana.$CF_DOMAIN {
    reverse_proxy grafana:3000
}

http://home.$CF_DOMAIN {
    reverse_proxy homepage:3000
}

http://mealie.$CF_DOMAIN {
    reverse_proxy mealie:9000
}
EOF

  stp "Writing caddy compose file..."
  cat > "$HOME/services/caddy/docker-compose.yml" <<'EOF'
services:
  caddy:
    image: caddy:latest
    restart: unless-stopped
    ports:
      - "80:80"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data
      - caddy_config:/config
    networks:
      - web

volumes:
  caddy_data:
  caddy_config:

networks:
  web:
    external: true
EOF

  stp "Starting Caddy..."
  (cd "$HOME/services/caddy" && sudo docker compose up -d)
  ok "Caddy running"
}

docker_phase_git() {
  ph "Phase 8 — Git Server"

  echo ""
  echo "  1) Gitea — self-hosted Git on this server"
  echo "  2) GitHub — managed, nothing to install"
  ask "Choose [1/2]" GIT_CHOICE

  if [[ "$GIT_CHOICE" == "2" ]]; then
    warn "Using GitHub — nothing to deploy on the server."
    echo "  Create your repo at github.com and use a Personal Access Token for auth."
    return
  fi

  mkdir -p "$HOME/services/gitea"

  stp "Writing Gitea compose file..."
  cat > "$HOME/services/gitea/docker-compose.yml" <<EOF
services:
  gitea:
    image: gitea/gitea:latest
    restart: unless-stopped
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - GITEA__server__DOMAIN=gitea.$CF_DOMAIN
      - GITEA__server__ROOT_URL=https://gitea.$CF_DOMAIN
      - GITEA__service__DISABLE_REGISTRATION=true
    volumes:
      - gitea_data:/data
    networks:
      - web

volumes:
  gitea_data:

networks:
  web:
    external: true
EOF

  stp "Starting Gitea..."
  (cd "$HOME/services/gitea" && sudo docker compose up -d)
  ok "Gitea running — complete setup wizard at https://gitea.$CF_DOMAIN after tunnel is up"
}

docker_phase_monitoring() {
  ph "Phase 9 — Prometheus + Grafana"

  echo ""
  ask "Grafana admin password" GRAFANA_PASSWORD

  mkdir -p "$HOME/services/monitoring"

  stp "Writing prometheus.yml..."
  cat > "$HOME/services/monitoring/prometheus.yml" <<'EOF'
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']

  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']

  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
EOF

  stp "Writing monitoring compose file..."
  cat > "$HOME/services/monitoring/docker-compose.yml" <<EOF
services:
  prometheus:
    image: prom/prometheus:latest
    restart: unless-stopped
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--storage.tsdb.retention.time=30d'
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    networks:
      - web

  grafana:
    image: grafana/grafana:latest
    restart: unless-stopped
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=$GRAFANA_PASSWORD
      - GF_SERVER_DOMAIN=grafana.$CF_DOMAIN
      - GF_SERVER_ROOT_URL=https://grafana.$CF_DOMAIN
    volumes:
      - grafana_data:/var/lib/grafana
    networks:
      - web

  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    restart: unless-stopped
    privileged: true
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
    networks:
      - web

  node-exporter:
    image: prom/node-exporter:latest
    restart: unless-stopped
    command:
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.ignored-mount-points=^/(sys|proc|dev|host|etc)($$|/)'
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    networks:
      - web

volumes:
  prometheus_data:
  grafana_data:

networks:
  web:
    external: true
EOF

  stp "Starting monitoring stack..."
  (cd "$HOME/services/monitoring" && sudo docker compose up -d)
  ok "Prometheus + Grafana + cAdvisor + Node Exporter running"
  warn "Configure Grafana: Connections → Data Sources → Prometheus → URL: http://prometheus:9090"
  warn "Import dashboard ID 193 (containers) and 1860 (node metrics)"
}

docker_phase_tunnel() {
  ph "Phase 10 — Cloudflare Tunnel"

  stp "Installing cloudflared..."
  if ! command -v cloudflared &>/dev/null; then
    curl -fsSL -o /tmp/cloudflared.deb \
      https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
    sudo dpkg -i /tmp/cloudflared.deb
    rm /tmp/cloudflared.deb
  fi
  ok "cloudflared $(cloudflared --version | head -1)"

  stp "Logging in to Cloudflare..."
  warn "A browser window will open — authorise opdev.co.uk then return here."
  cloudflared tunnel login

  stp "Creating tunnel 'greenlane'..."
  cloudflared tunnel create greenlane
  echo ""
  warn "The tunnel ID was printed above."
  ask "Paste the tunnel ID here" TUNNEL_ID

  stp "Writing tunnel config..."
  cat > "$HOME/.cloudflared/config.yaml" <<EOF
tunnel: $TUNNEL_ID
credentials-file: /home/$SERVER_USER/.cloudflared/$TUNNEL_ID.json

ingress:
  - hostname: gitea.$CF_DOMAIN
    service: http://127.0.0.1:80
  - hostname: grafana.$CF_DOMAIN
    service: http://127.0.0.1:80
  - hostname: home.$CF_DOMAIN
    service: http://127.0.0.1:80
  - hostname: mealie.$CF_DOMAIN
    service: http://127.0.0.1:80
  - service: http_status:404
EOF

  stp "Registering DNS records..."
  cloudflared tunnel route dns greenlane "gitea.$CF_DOMAIN"
  cloudflared tunnel route dns greenlane "grafana.$CF_DOMAIN"
  cloudflared tunnel route dns greenlane "home.$CF_DOMAIN"
  cloudflared tunnel route dns greenlane "mealie.$CF_DOMAIN"
  ok "DNS CNAMEs created"

  stp "Installing cloudflared as system service..."
  sudo cloudflared service install
  sudo systemctl start cloudflared
  sudo systemctl enable cloudflared
  ok "cloudflared service running"
  warn "Config is now at /etc/cloudflared/config.yaml — edit there, not ~/.cloudflared/"
}

docker_phase_dashboard() {
  ph "Phase 11 — Dashboard"

  echo ""
  echo "  1) Homepage — YAML config, live service widgets"
  echo "  2) Homarr  — drag-and-drop web UI"
  ask "Choose [1/2]" DASH_CHOICE

  if [[ "$DASH_CHOICE" == "1" ]]; then
    mkdir -p "$HOME/services/homepage/config"

    cat > "$HOME/services/homepage/docker-compose.yml" <<'EOF'
services:
  homepage:
    image: ghcr.io/gethomepage/homepage:latest
    restart: unless-stopped
    volumes:
      - ./config:/app/config
    networks:
      - web

networks:
  web:
    external: true
EOF

    cat > "$HOME/services/homepage/config/settings.yaml" <<EOF
title: $SERVER_HOSTNAME
headerStyle: clean
EOF

    cat > "$HOME/services/homepage/config/services.yaml" <<EOF
- Infrastructure:
    - Grafana:
        href: https://grafana.$CF_DOMAIN
        description: Metrics and dashboards
        icon: grafana.png
    - Gitea:
        href: https://gitea.$CF_DOMAIN
        description: Self-hosted Git
        icon: gitea.png
- Services:
    - Mealie:
        href: https://mealie.$CF_DOMAIN
        description: Recipe manager
        icon: mealie.png
EOF

    (cd "$HOME/services/homepage" && sudo docker compose up -d)
    ok "Homepage running at https://home.$CF_DOMAIN"

  else
    mkdir -p "$HOME/services/homarr"

    cat > "$HOME/services/homarr/docker-compose.yml" <<'EOF'
services:
  homarr:
    image: ghcr.io/ajnart/homarr:latest
    restart: unless-stopped
    volumes:
      - homarr_data:/app/data/configs
    networks:
      - web

volumes:
  homarr_data:

networks:
  web:
    external: true
EOF

    (cd "$HOME/services/homarr" && sudo docker compose up -d)
    ok "Homarr running at https://home.$CF_DOMAIN — configure in browser"
  fi
}

docker_phase_mealie() {
  ph "Phase 12 — Mealie"

  mkdir -p "$HOME/services/mealie"

  cat > "$HOME/services/mealie/docker-compose.yml" <<'EOF'
services:
  mealie:
    image: ghcr.io/mealie-recipes/mealie:latest
    restart: unless-stopped
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/London
    volumes:
      - mealie_data:/app/data
    networks:
      - web

volumes:
  mealie_data:

networks:
  web:
    external: true
EOF

  (cd "$HOME/services/mealie" && sudo docker compose up -d)
  ok "Mealie running"
  warn "Default login: changeme@example.com / MyPassword — change on first login"
}

docker_summary() {
  ph "Setup Complete"
  echo ""
  echo -e "${BLD}Your Docker homelab is live:${NC}"
  echo ""
  echo -e "  Gitea      →  https://gitea.$CF_DOMAIN"
  echo -e "  Grafana    →  https://grafana.$CF_DOMAIN  (admin / $GRAFANA_PASSWORD)"
  echo -e "  Dashboard  →  https://home.$CF_DOMAIN"
  echo -e "  Mealie     →  https://mealie.$CF_DOMAIN"
  echo ""
  echo -e "${BLD}Next steps:${NC}"
  echo "  1. Log out and back in so 'docker' works without sudo"
  echo "  2. Complete Gitea setup wizard in the browser"
  echo "  3. In Grafana: add Prometheus data source (http://prometheus:9090), import dashboards 193 + 1860"
  echo "  4. Change Mealie default password"
  echo ""
  echo -e "  Add new services: docker-compose.yml → Caddyfile entry → cloudflared DNS route"
  echo ""
}

# ─────────────────────────────────────────────────────────────────────────────
# Kubernetes mode
# ─────────────────────────────────────────────────────────────────────────────
k8s_phase_k3s() {
  ph "Phase 6 — k3s (Kubernetes)"

  if command -v k3s &>/dev/null; then
    ok "k3s already installed — skipping"
  else
    stp "Installing k3s with system-wide kubeconfig..."
    curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode=644
    ok "k3s installed"

    stp "Setting KUBECONFIG system-wide..."
    grep -q '^KUBECONFIG=' /etc/environment || \
      echo 'KUBECONFIG=/etc/rancher/k3s/k3s.yaml' | sudo tee -a /etc/environment >/dev/null
  fi

  export KUBECONFIG=/etc/rancher/k3s/k3s.yaml

  stp "Waiting for cluster to be ready..."
  local attempts=0
  until kubectl get nodes 2>/dev/null | grep -q "Ready"; do
    sleep 5
    attempts=$((attempts + 1))
    [[ $attempts -gt 24 ]] && die "Cluster did not become ready after 2 minutes"
  done
  ok "Cluster ready"
  kubectl get nodes

  stp "Installing k9s..."
  if ! command -v k9s &>/dev/null; then
    curl -sS https://webinstall.dev/k9s | bash >/dev/null 2>&1 || true
    ok "k9s installed (run: k9s)"
  else
    ok "k9s already installed"
  fi
}

k8s_phase_helm() {
  ph "Phase 7 — Helm"

  if command -v helm &>/dev/null; then
    ok "Helm already installed — skipping"
  else
    stp "Installing Helm..."
    curl -fsSL https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
    ok "Helm $(helm version --short)"
  fi

  stp "Adding Helm repositories..."
  helm repo add gitea-charts        https://dl.gitea.com/charts/
  helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
  helm repo add argo                 https://argoproj.github.io/argo-helm
  helm repo update
  ok "Helm repos ready"
}

k8s_phase_git() {
  ph "Phase 8 — Git Server"

  echo ""
  ask "Your domain (e.g. opdev.co.uk)" CF_DOMAIN

  echo ""
  echo "  1) Gitea — self-hosted Git via Helm"
  echo "  2) GitHub — managed, nothing to install"
  ask "Choose [1/2]" GIT_CHOICE

  if [[ "$GIT_CHOICE" == "2" ]]; then
    warn "Using GitHub — create your repo at github.com and generate a PAT for auth."
    return
  fi

  local GITEA_PASS
  ask "Gitea admin password" GITEA_PASS

  stp "Deploying Gitea via Helm..."
  helm install gitea gitea-charts/gitea \
    --namespace gitea --create-namespace \
    --set gitea.admin.username="$SERVER_USER" \
    --set gitea.admin.password="$GITEA_PASS" \
    --set gitea.admin.email="admin@$CF_DOMAIN" \
    --set persistence.enabled=true \
    --set ingress.enabled=true \
    --set ingress.ingressClassName=traefik \
    --set "ingress.hosts[0].host=gitea.$CF_DOMAIN" \
    --set "ingress.hosts[0].paths[0].path=/" \
    --set "ingress.hosts[0].paths[0].pathType=Prefix" \
    --wait --timeout 5m
  ok "Gitea deployed at https://gitea.$CF_DOMAIN"
  warn "Login: $SERVER_USER / $GITEA_PASS — disable registration in Site Administration after login"
}

k8s_phase_monitoring() {
  ph "Phase 9 — Prometheus + Grafana"

  ask "Grafana admin password" GRAFANA_PASSWORD

  stp "Deploying kube-prometheus-stack via Helm..."
  helm install kube-prometheus-stack prometheus-community/kube-prometheus-stack \
    --namespace monitoring --create-namespace \
    --set grafana.adminPassword="$GRAFANA_PASSWORD" \
    --set grafana.ingress.enabled=true \
    --set grafana.ingress.ingressClassName=traefik \
    --set "grafana.ingress.hosts[0]=grafana.$CF_DOMAIN" \
    --wait --timeout 10m
  ok "Prometheus + Grafana deployed at https://grafana.$CF_DOMAIN"
}

k8s_phase_argocd() {
  ph "Phase 10 — ArgoCD"

  stp "Deploying ArgoCD via Helm..."
  helm install argocd argo/argo-cd \
    --namespace argocd --create-namespace \
    --set server.insecure=true \
    --set server.ingress.enabled=true \
    --set server.ingress.ingressClassName=traefik \
    --set "server.ingress.hosts[0]=argocd.$CF_DOMAIN" \
    --wait --timeout 5m
  ok "ArgoCD deployed at https://argocd.$CF_DOMAIN"

  local ARGOCD_PASS
  ARGOCD_PASS=$(kubectl -n argocd get secret argocd-initial-admin-secret \
    -o jsonpath="{.data.password}" 2>/dev/null | base64 -d || echo "not yet available")
  warn "ArgoCD initial password: $ARGOCD_PASS"
  warn "Login as admin and change this password immediately"
}

k8s_phase_tunnel() {
  ph "Phase 11 — Cloudflare Tunnel"

  stp "Installing cloudflared..."
  if ! command -v cloudflared &>/dev/null; then
    curl -fsSL -o /tmp/cloudflared.deb \
      https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
    sudo dpkg -i /tmp/cloudflared.deb
    rm /tmp/cloudflared.deb
  fi
  ok "cloudflared $(cloudflared --version | head -1)"

  stp "Logging in to Cloudflare..."
  warn "A browser window will open — authorise $CF_DOMAIN then return here."
  cloudflared tunnel login

  stp "Creating tunnel..."
  cloudflared tunnel create greenlane
  echo ""
  warn "The tunnel ID was printed above."
  ask "Paste the tunnel ID here" TUNNEL_ID

  stp "Writing tunnel config..."
  mkdir -p "$HOME/.cloudflared"
  cat > "$HOME/.cloudflared/config.yaml" <<EOF
tunnel: $TUNNEL_ID
credentials-file: /home/$SERVER_USER/.cloudflared/$TUNNEL_ID.json

ingress:
  - hostname: gitea.$CF_DOMAIN
    service: http://127.0.0.1:80
  - hostname: grafana.$CF_DOMAIN
    service: http://127.0.0.1:80
  - hostname: argocd.$CF_DOMAIN
    service: http://127.0.0.1:80
  - hostname: home.$CF_DOMAIN
    service: http://127.0.0.1:80
  - hostname: mealie.$CF_DOMAIN
    service: http://127.0.0.1:80
  - service: http_status:404
EOF

  stp "Registering DNS records..."
  cloudflared tunnel route dns greenlane "gitea.$CF_DOMAIN"   2>/dev/null || true
  cloudflared tunnel route dns greenlane "grafana.$CF_DOMAIN"
  cloudflared tunnel route dns greenlane "argocd.$CF_DOMAIN"
  cloudflared tunnel route dns greenlane "home.$CF_DOMAIN"
  cloudflared tunnel route dns greenlane "mealie.$CF_DOMAIN"
  ok "DNS CNAMEs created"

  stp "Installing cloudflared as system service..."
  sudo cloudflared service install
  sudo systemctl start cloudflared
  sudo systemctl enable cloudflared
  ok "cloudflared service running"
}

k8s_phase_dashboard() {
  ph "Phase 12 — Dashboard"

  echo ""
  echo "  1) Homepage — YAML config, live widgets"
  echo "  2) Homarr  — drag-and-drop web UI"
  ask "Choose [1/2]" DASH_CHOICE

  mkdir -p "$HOME/manifests/dashboard"

  if [[ "$DASH_CHOICE" == "1" ]]; then
    stp "Deploying Homepage..."
    kubectl apply -f - <<EOF
apiVersion: v1
kind: Namespace
metadata:
  name: homepage
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: homepage-config
  namespace: homepage
data:
  settings.yaml: |
    title: $SERVER_HOSTNAME
    headerStyle: clean
  services.yaml: |
    - Infrastructure:
        - Grafana:
            href: https://grafana.$CF_DOMAIN
            description: Metrics and dashboards
            icon: grafana.png
        - Gitea:
            href: https://gitea.$CF_DOMAIN
            description: Self-hosted Git
            icon: gitea.png
    - Services:
        - Mealie:
            href: https://mealie.$CF_DOMAIN
            description: Recipe manager
            icon: mealie.png
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: homepage
  namespace: homepage
spec:
  replicas: 1
  selector:
    matchLabels:
      app: homepage
  template:
    metadata:
      labels:
        app: homepage
    spec:
      containers:
        - name: homepage
          image: ghcr.io/gethomepage/homepage:latest
          ports:
            - containerPort: 3000
          volumeMounts:
            - name: config
              mountPath: /app/config
      volumes:
        - name: config
          configMap:
            name: homepage-config
---
apiVersion: v1
kind: Service
metadata:
  name: homepage
  namespace: homepage
spec:
  selector:
    app: homepage
  ports:
    - port: 3000
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: homepage
  namespace: homepage
  annotations:
    traefik.ingress.kubernetes.io/router.entrypoints: web
spec:
  ingressClassName: traefik
  rules:
    - host: home.$CF_DOMAIN
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: homepage
                port:
                  number: 3000
EOF
    ok "Homepage deployed at https://home.$CF_DOMAIN"

  else
    stp "Deploying Homarr..."
    kubectl apply -f - <<EOF
apiVersion: v1
kind: Namespace
metadata:
  name: homarr
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: homarr-data
  namespace: homarr
spec:
  accessModes: [ReadWriteOnce]
  resources:
    requests:
      storage: 1Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: homarr
  namespace: homarr
spec:
  replicas: 1
  selector:
    matchLabels:
      app: homarr
  template:
    metadata:
      labels:
        app: homarr
    spec:
      containers:
        - name: homarr
          image: ghcr.io/ajnart/homarr:latest
          ports:
            - containerPort: 7575
          volumeMounts:
            - name: data
              mountPath: /app/data/configs
      volumes:
        - name: data
          persistentVolumeClaim:
            claimName: homarr-data
---
apiVersion: v1
kind: Service
metadata:
  name: homarr
  namespace: homarr
spec:
  selector:
    app: homarr
  ports:
    - port: 7575
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: homarr
  namespace: homarr
  annotations:
    traefik.ingress.kubernetes.io/router.entrypoints: web
spec:
  ingressClassName: traefik
  rules:
    - host: home.$CF_DOMAIN
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: homarr
                port:
                  number: 7575
EOF
    ok "Homarr deployed at https://home.$CF_DOMAIN"
  fi
}

k8s_summary() {
  ph "Setup Complete"
  echo ""
  echo -e "${BLD}Your Kubernetes homelab is live:${NC}"
  echo ""
  echo -e "  Gitea      →  https://gitea.$CF_DOMAIN"
  echo -e "  Grafana    →  https://grafana.$CF_DOMAIN  (admin / $GRAFANA_PASSWORD)"
  echo -e "  ArgoCD     →  https://argocd.$CF_DOMAIN   (admin / see above)"
  echo -e "  Dashboard  →  https://home.$CF_DOMAIN"
  echo ""
  echo -e "${BLD}Useful commands:${NC}"
  echo "  kubectl get nodes              — cluster health"
  echo "  kubectl get pods -A            — all running pods"
  echo "  k9s                            — interactive cluster browser"
  echo "  helm list -A                   — all Helm releases"
  echo ""
  echo -e "${BLD}Next step — deploy Mealie via ArgoCD:${NC}"
  echo "  1. Create a Git repo with a mealie Deployment + Service + Ingress YAML"
  echo "  2. In ArgoCD, create an Application pointing at that repo"
  echo "  3. Sync — ArgoCD deploys and keeps it reconciled"
  echo ""
  warn "KUBECONFIG is set in /etc/environment — log out and back in for it to take effect in new shells"
  echo ""
}

# ─────────────────────────────────────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────────────────────────────────────
main() {
  clear
  echo -e "${BLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLD}  Homelab Setup — greenlane / opdev.co.uk${NC}"
  echo -e "${BLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo ""

  echo "Select setup mode:"
  echo "  1) Docker only  — simpler, recommended for starting out"
  echo "  2) Kubernetes   — k3s + Helm + ArgoCD"
  ask "Mode [1/2]" MODE

  [[ "$MODE" == "1" || "$MODE" == "2" ]] || die "Invalid choice"

  echo ""
  if confirm "Run a clean reset first? (removes all previous install artifacts)"; then
    do_reset
  fi

  # Shared phases
  phase_system
  phase_ssh
  phase_tailscale
  phase_docker

  if [[ "$MODE" == "1" ]]; then
    docker_phase_network
    docker_phase_caddy
    docker_phase_git
    docker_phase_monitoring
    docker_phase_tunnel
    docker_phase_dashboard
    docker_phase_mealie
    docker_summary
  else
    k8s_phase_k3s
    k8s_phase_helm
    k8s_phase_git          # also prompts for CF_DOMAIN in k8s path
    k8s_phase_monitoring
    k8s_phase_argocd
    k8s_phase_tunnel
    k8s_phase_dashboard
    k8s_summary
  fi
}

main "$@"
