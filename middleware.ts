import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useRouter } from 'next/router';

export function middleware(request: NextRequest) {
  
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const url = request.nextUrl.clone()
    var current_path = url.pathname.replace("/admin/","").replaceAll("/","_")
    console.log("current_path",current_path)
    if(request.headers['jwt']){
      return true;
    }
  return NextResponse.redirect(new URL('/login', request.url));

    // This logic is only applied to /about
  }
}