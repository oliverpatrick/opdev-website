import { NextRequest } from "next/server";

const HOST_HEADER_NAME = "X-Host";

export function getHostname(request: NextRequest) {
  return request.headers.get(HOST_HEADER_NAME) || new URL(request.url).hostname;
}

export function getSitename(request: NextRequest) {
  return getHostname(request).split(".")[0];
}

export function getCurrentPageUrl(request: NextRequest) {
  const url = new URL(request.url);
  const hostname = getHostname(request);

  return `${url.protocol}//${hostname}${url.pathname}`;
}
