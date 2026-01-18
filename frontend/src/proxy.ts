import { type NextRequest } from 'next/server'
import { updateSession } from './utils/supabase/proxy'

export async function proxy(request: NextRequest) {
    // This will refresh the session if it's expired
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api routes (if you want them handled separately)
     */
    '/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}