import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === '/') {
    const redirectUrl = new URL('/catalog', request.url);
    const response = NextResponse.redirect(redirectUrl);
    return response;
  }
}
