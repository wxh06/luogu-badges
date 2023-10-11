import { type NextRequest, NextResponse } from "next/server";
import { validateStyle } from "@/utils/style";

export function middleware(request: NextRequest) {
  if (validateStyle(request.nextUrl.searchParams.get("style")))
    return new Response(null, { status: 400 });
  return NextResponse.next();
}

export const config = { matcher: "/badge/:path*" };
