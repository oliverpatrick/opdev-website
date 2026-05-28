## pnpm CLI Commands

# Dependency Management

Command Alias Description
pnpm add <pkg> - Install a package as a production dependency
pnpm install i Install all dependencies for a project
pnpm update up, upgrade Update packages to latest versions based on version range
pnpm remove <pkg> rm Remove a dependency from your project
pnpm link <dir> - Link a local package for development
pnpm unlink - Remove local package linking
pnpm add – Add packages
bash

# Add as regular dependency

pnpm add sax

# Add as dev dependency

pnpm add -D jest

# Add as optional dependency

pnpm add -O lodash

# Install globally

pnpm add -g typescript

# Install specific version

pnpm add react@18.2.0

# Install from tag

pnpm add next@canary

Flags

    -D, --save-dev – Add to devDependencies

    -O, --save-optional – Add to optionalDependencies

    -g, --global – Install globally

    -E, --save-exact – Save exact version (no semver range)

    -w, --ignore-workspace-root-check – Allow adding to workspace root

    --workspace – Only add if package exists in workspace

    --allow-build – Specify packages allowed to run postinstall scripts (e.g., --allow-build=esbuild)

    --cpu, --os, --libc – Override architecture, OS, or libc for native modules

pnpm install – Install dependencies
bash

# Install all dependencies

pnpm install

# Production only (skip devDependencies)

pnpm install --prod

# Offline mode (use only cached packages)

pnpm install --offline

# Prefer offline (bypass staleness checks, fetch missing from registry)

pnpm install --prefer-offline

# Force reinstall (refetch modified packages, recreate lockfile)

pnpm install --force

# Skip runtime installation (useful in CI)

pnpm install --no-runtime

Flags

    -P, --prod – Skip devDependencies

    -D, --dev – Install only devDependencies

    --no-optional – Skip optionalDependencies

    --offline – Use only store; fail if missing

    --prefer-offline – Bypass staleness, but fetch missing from registry

    --frozen-lockfile – Fail if lockfile out of sync (default in CI)

    --lockfile-only – Update only lockfile, not node_modules

    --fix-lockfile – Auto-fix broken lockfile entries

    --force – Force reinstall and recreate lockfile

pnpm update – Update dependencies
bash

# Update all dependencies (within package.json ranges)

pnpm update

# Update all to latest stable (ignore version ranges)

pnpm update --latest

# Update specific package to latest within its range

pnpm update lodash

# Update specific package to latest stable (ignore range)

pnpm update --latest lodash

# Update all packages in @babel scope

pnpm update "@babel/\*"

# Interactive mode (select which outdated packages to update)

pnpm update --interactive

Flags

    -L, --latest – Update to latest stable (may break semver)

    -g, --global – Update global packages

    -P, --prod – Update only dependencies & optionalDependencies

    -D, --dev – Update only devDependencies

    --no-optional – Exclude optionalDependencies

    -i, --interactive – Choose outdated packages interactively

    --workspace – Update workspace packages; fails if dependency missing

pnpm remove – Remove packages
bash

# Remove a dependency

pnpm remove lodash

# Remove multiple packages

pnpm remove lodash react

# Remove globally installed package

pnpm remove -g typescript

Flags

    -g, --global – Remove global package

    -r, --recursive – Remove from all workspace packages

pnpm link – Local package linking
bash

# Link package from current directory to another project

pnpm link /path/to/package

# Link package (symlinked, changes reflected instantly)

pnpm link ./local-package

Notes

    Uses symlinks; source code edits immediately reflected

    pnpm link --global removed in v10 – use pnpm add -g . instead

## Workspace & Monorepo Commands

Command Description
pnpm -r, --recursive Run command in every package in workspace
pnpm --filter <pattern> Run command only on packages matching pattern
pnpm --workspace-root Execute command from workspace root
pnpm -C <path>, --dir <path> Run as if started in <path> directory
Filtering Examples
bash

# Run build in all packages containing "admin"

pnpm --filter "_admin_" run build

# Run test only in package named "api"

pnpm --filter "api" run test

# Include packages changed since main branch

pnpm --filter "...[main]" run build

# Exclude certain packages

pnpm --filter "!admin" run build

Common Workspace Flags

    -r, --recursive – Apply recursively to all workspace packages

    --filter <pattern> – Select packages by name glob or selector

    --parallel – Run in parallel, ignoring topological order

    --no-bail – Continue after failures (still exits non-zero)

## Scripts & Execution

Command Alias Description
pnpm run <script> run-script Execute script from package.json
pnpm exec <cmd> - Execute shell command within project scope
pnpm dlx <pkg> pnpx, pnx Temporarily install and run a package
pnpm create <starter> - Create project from starter kit (e.g., pnpm create vite)
pnpm run – Run scripts
bash

# Run script defined in package.json

pnpm run build

# Shortcut (if no conflict with builtin command)

pnpm build

# Run with arguments (passed to script)

pnpm run test -- --coverage

# Run all scripts matching pattern

pnpm run "/^build:.\*/"

# Run in workspace recursively

pnpm -r run lint

# Skip if script doesn't exist (no error)

pnpm run lint --if-present

Flags

    -r, --recursive – Run script in all workspace packages

    --if-present – Don't error if script missing

    --parallel – Run in parallel, disregarding dependencies

    --stream – Stream output immediately, prefixed with package name

    --aggregate-output – Aggregate parallel output until process finishes

    --resume-from – Resume execution from a specific project

pnpm exec – Execute commands
bash

# Run jest (local dependency)

pnpm exec jest

# Shortcut (jest not conflicting with builtin)

pnpm jest

# Execute in every workspace package

pnpm -r exec rm -rf node_modules

# Use shell mode for environment variables

pnpm -rc exec "echo $PNPM_PACKAGE_NAME"

Flags

    -r, --recursive – Run in all workspace packages

    -c, --shell-mode – Run inside shell (/bin/sh on Unix, cmd.exe on Windows)

    --parallel – Run immediately in all matching packages

    --resume-from – Resume from specific project in build order

    --no-reporter-hide-prefix – Keep prefixes when running in parallel

Note: Options for exec must be placed before exec keyword; options after are passed to executed command.
pnpm dlx / pnx – Temporary package execution
bash

# Run create-vue starter without installing globally

pnpm dlx create-vue my-app

# Short alias

pnx create-react-app my-app

# Use specific package version

pnx --package=@pnpm/meta-updater meta-updater --help

Flags

    --package – Specify package to install before running command

## Environment & Runtime Management

Command Description
pnpm env (deprecated) Manage Node.js versions – use pnpm runtime instead
pnpm runtime New runtime manager (Node.js, Deno, Bun)
pnpm self-update Update pnpm itself
pnpm runtime – Runtime management
bash

# Set global Node.js LTS version

pnpm runtime set node lts -g

# Install multiple Node.js versions without activation

pnpm runtime add node 18 20

# List installed Node.js versions

pnpm runtime list node

# List available Node.js versions from remote

pnpm runtime list node --remote 16

Flags

    -g, --global – Apply changes system-wide

    --remote – List remotely available versions

📤 Package Publishing
Command Description
pnpm pack Create tarball from package
pnpm publish Publish package to registry
pnpm pack – Create tarball
bash

# Pack current package

pnpm pack

# Pack all workspace packages

pnpm pack --recursive

# Custom output path (use %s for name, %v for version)

pnpm pack --out "some-dir/%s-%v.tgz"

# Dry run (preview contents without packing)

pnpm pack --dry-run

Flags

    -r, --recursive – Pack all workspace packages

    --out <path> – Custom output path for tarball

    --pack-destination <dir> – Directory to save tarballs

    --pack-gzip-level – Compression level

    --dry-run – Preview but don't pack

    --json – Log output in JSON format

pnpm publish – Publish to registry
bash

# Publish current package

pnpm publish

# Publish with custom tag

pnpm publish --tag next

# Publish all workspace packages with unpublished versions

pnpm -r publish

# Dry run (preview without publishing)

pnpm publish --dry-run

# Skip git checks (branch, clean status)

pnpm publish --no-git-checks

Flags

    -r, --recursive – Publish all workspace packages

    --tag <tag> – Publish with tag (default "latest")

    --access <public|restricted> – Set registry access level

    --no-git-checks – Skip branch/clean validation

    --force – Publish even if version already exists

    --dry-run – Preview without publishing

    --otp <code> – One-time password for 2FA

    --provenance – Link build to source in CI

## Store & Cache Management

Command Description
pnpm store Manage package store
pnpm cache Manage metadata cache
pnpm store – Package store management
bash

# Check for modified packages in store

pnpm store status

# Remove unreferenced packages

pnpm store prune

# Add package directly to store (without project)

pnpm store add express

# Show store directory path

pnpm store path

Subcommands

    status – Check for modified packages

    add – Add package to store without modifying projects

    prune – Remove unused packages (safe, no side effects)

    path – Show store directory path

pnpm cache – Metadata cache
bash

# List cached packages

pnpm cache list

# List registry packages

pnpm cache list-registries

# Delete specific cache

pnpm cache delete

# View cache details

pnpm cache view

Subcommands

    list – List cached packages

    list-registries – List registry packages

    delete – Delete specific cache

    view – View cache details

## Configuration

Command Alias Description
pnpm config c Manage configuration files
pnpm init - Create package.json
pnpm config – Manage settings
bash

# Set configuration value

pnpm config set nodeVersion 22.0.0

# Set with JSON value

pnpm config set --json nodeVersion '"22.0.0"'

# Get configuration value

pnpm config get nodeVersion

# Get nested property (JavaScript syntax)

pnpm config get 'packageExtensions["@babel/parser"].peerDependencies'

# Delete configuration key

pnpm config delete keyName

# List all settings (JSON output)

pnpm config list

Flags

    -g, --global – Use global config file

    --location <global|project> – Where to write setting

    --json – Parse/set values as JSON

Config locations:

    Registry/auth: .npmrc files

    Other settings: pnpm-workspace.yaml or config.yaml

pnpm init – Create package.json
bash

# Create minimal package.json

pnpm init

# Create bare package.json (only required fields)

pnpm init --bare

# Set module system (commonjs or module)

pnpm init --init-type module

# Pin to current pnpm version

pnpm init --init-package-manager

Flags

    --bare – Only required fields

    --init-type <commonjs|module> – Set module system

    --init-package-manager – Pin pnpm version

## Information & Diagnostics

Command Alias Description
pnpm list ls Display installed packages tree
pnpm outdated - Check for outdated packages
pnpm why - Show why a package is installed
pnpm doctor - Check configuration for issues
pnpm audit - Check for known vulnerabilities
pnpm list – Show installed packages
bash

# List direct dependencies (depth 0)

pnpm list

# List all dependencies (unlimited depth)

pnpm list --depth Infinity

# List packages in workspace recursively

pnpm list --recursive

# Output as JSON

pnpm list --json

# Read from lockfile (no node_modules required)

pnpm list --lockfile-only

# Show only projects in workspace

pnpm list --only-projects

Flags

    -r, --recursive – List packages in subdirectories/workspace

    --json – JSON output

    --long – Show extended information

    --lockfile-only – Read from lockfile instead of node_modules

    --parseable – Parseable output (directories)

    -g, --global – List global packages

    --depth <n> – Max display depth (0=direct, -1=projects only)

    -P, --prod – Show only dependencies/optionalDependencies

    -D, --dev – Show only devDependencies

pnpm outdated – Check for outdated packages
bash

# Check all packages

pnpm outdated

# Check only @babel scoped packages

pnpm outdated "@babel/\*"

# Output as JSON

pnpm outdated --format json

# Sort output by name

pnpm outdated --sort-by name

# Check only dependencies (not dev)

pnpm outdated --prod

Flags

    -r, --recursive – Check in all workspace packages

    -g, --global – Check global packages

    --long – Print details

    --format <table|list|json> – Output format

    --compatible – Only versions satisfying package.json ranges

    -D, --dev – Check only devDependencies

    -P, --prod – Check only dependencies/optionalDependencies

pnpm doctor – Diagnose configuration
bash

# Check for common issues

pnpm doctor

Checks pnpm configuration for known problems.

## Global Commands

Command Description
pnpm add -g <pkg> Install package globally
pnpm remove -g <pkg> Remove global package
pnpm update -g Update global packages
pnpm list -g List global packages
pnpm root -g Show global installation directory
pnpm bin -g Show global binary directory
bash

# Install globally

pnpm add -g typescript

# List global packages

pnpm list -g

# Update all global packages

pnpm update -g

# Remove global package

pnpm remove -g typescript

🛠 Other Utility Commands
Command Description
pnpm rebuild Rebuild packages（run postinstall scripts again）
pnpm prune Remove unnecessary devDependencies
pnpm fetch Fetch packages from lockfile into virtual store
pnpm install-test Run install then test
pnpm help <command> Show help for specific command
pnpm --version, -v Show pnpm version
pnpm rebuild – Rebuild packages
bash

# Rebuild current package

pnpm rebuild

# Rebuild all workspace packages

pnpm rebuild --recursive

Flags

    -r, --recursive – Rebuild in all workspace packages

pnpm prune – Remove unnecessary packages
bash

# Remove devDependencies

pnpm prune --prod

# Remove optionalDependencies

pnpm prune --no-optional

Flags

    --prod – Remove devDependencies

    --no-optional – Remove optionalDependencies

pnpm fetch – Pre-fetch for Docker builds
bash

# Fetch production dependencies only

pnpm fetch --prod

# Fetch dev dependencies

pnpm fetch --dev

Flags

    -D, --dev – Fetch only development packages

    -P, --prod – Skip development packages

Optimized for Docker layering – uses lockfile only, ideal for monorepos.
pnpm install-test / it – Install and test
bash

# Install then run tests

pnpm install-test

# With flags (same as pnpm install)

pnpm install-test --prod

Flags – Accepts same arguments as pnpm install.
pnpm help – CLI help
bash

# Show help for specific command

pnpm help install

# List all available commands

pnpm help --all

Flags

    --all, -a – Print all available commands

## Global Options & Shortcuts

Option Description
-C, --dir <path> Run as if started in <path>
-w, --workspace-root Run from workspace root
--filter <pattern> Select packages by name/pattern
--silent Suppress log output
--reporter Change output format (e.g., append-only, json)
--no-color Disable colored output
Shortcuts

    pn – Short alias for pnpm (v11.0.0+)

    pnx – Short alias for pnpm dlx (v11.0.0+)

    pnpm <cmd> – Run script from package.json if name doesn't conflict

## Quick Reference Tables

npm to pnpm Equivalents
npm Command pnpm Equivalent
npm install pnpm install
npm i <pkg> pnpm add <pkg>
npm run <cmd> pnpm <cmd>
npx <pkg> pnpx <pkg> or pnx <pkg>
Common Flags Across Commands
Flag Description Works With
-r, --recursive Run in all workspace packages install, update, run, exec, list, outdated, rebuild, publish, pack
--filter Select specific packages install, add, update, run, exec, list, outdated, rebuild, publish, pack
--prod, -P Production-only operations install, update, list, prune, fetch
--dev, -D Development-only operations install, update, list, fetch
--no-optional Exclude optional dependencies install, update, list, outdated, prune
--json JSON output list, outdated, pack, publish, config

## Pro Tips

    Workspace filtering is powerful:
    pnpm --filter "./packages/**" run build

    Use pnpm why to understand why a package is installed:
    pnpm why lodash

    Save disk space with store pruning:
    pnpm store prune (run occasionally)

    Faster CI with --frozen-lockfile and --offline:
    pnpm install --frozen-lockfile --offline

    Interactive updates to control upgrades:
    pnpm update --interactive -L

    Shortcuts save keystrokes:
    pn i instead of pnpm install; pnx instead of pnpm dlx

    Run multiple scripts with regex:
    pnpm run "/^build:.*/"

For the most up-to-date documentation, refer to pnpm.io. This guide is based on pnpm v10.x features. Some flags may differ in older versions.
