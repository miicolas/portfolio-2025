import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from './lib/get-session'

const protectedRoutes = [
  '/api/uploadthing',
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route))

  if (isProtected) {
    const session = await getSession();
    if (!session) {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Authentication required' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }

    if (!session) {
      const loginUrl = new URL('/login', process.env.NEXT_PUBLIC_BASE_URL).toString()
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

// Configuration pour les routes protégées
export const config = {
  matcher: [
    '/api/uploadthing/',
  ],
}