
import { NextResponse } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN

    if (!token) {
        //Had to add this new URL because of a security patch in Next JS
      return NextResponse.redirect(new URL('/signin', req.nextUrl))
    }
  }
}