import { NextRequest, NextResponse } from 'next/server';
// import { auth } from './auth';
// import { authRoutes, publicRoutes } from './routes';

export default function middleware(req: NextRequest) {
  const {
    nextUrl: { pathname },
  } = req;
  // const isLoggedIn = !!req.h;

  // const isPublic = publicRoutes.includes(nextUrl.pathname);
  // const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  // const isProfileComplete = req.auth?.auth.profileComplete;
  // const isAdmin = req.auth?.auth.role === "ADMIN";
  const isAdminRoute = pathname.startsWith('/admin');

  // if (isPublic || isAdmin) {
  //   return NextResponse.next();
  // }

  // if (isAdminRoute && !isAdmin) {
  //   return NextResponse.redirect(new URL("/", nextUrl));
  // }

  // if (isAuthRoute) {
  //   if (isLoggedIn) {
  //     return NextResponse.redirect(new URL("/members", nextUrl));
  //   }
  //   return NextResponse.next();
  // }
  //
  // if (!isPublic && !isLoggedIn) {
  //   return NextResponse.redirect(new URL("/login", nextUrl));
  // }

  // if (
  //   isLoggedIn &&
  //   !isProfileComplete &&
  //   nextUrl.pathname !== "/complete-profile"
  // ) {
  //   return NextResponse.redirect(new URL("/complete-profile", nextUrl));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
