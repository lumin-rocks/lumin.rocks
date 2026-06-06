import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();

  const accept = request.headers.get("accept") || "";
  const isBrowser = accept.includes("text/html");

  if (!isBrowser) {
    return new Response(
      `loadstring(game:HttpGet("https://api.luarmor.net/files/v4/loaders/1e8ed553780d0658105a816d5a17b100.lua"))()`,
      { headers: { "Content-Type": "text/plain" } },
    );
  }

  return NextResponse.next();
}
