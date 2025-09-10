import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(req: NextRequest): Promise<NextResponse> {
  // const allowedOrigin = process.env.NEXTLOCAL_URL;
  console.log('Origin', req.headers.get('sec-fetch-site'));

  if (req.method === 'OPTIONS') {
    return NextResponse.json(null, { status: 204 });
  }

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  // if (req.nextUrl.origin !== allowedOrigin) {
  //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  // }

  // if (req.headers.get('sec-fetch-site') !== 'same-origin') {
  //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  // }

  return NextResponse.next();
}

// Apply to all routes (frontend and backend)
export const config = {
  matcher: '/:path*',
};