import {NextRequest, NextResponse} from 'next/server'
import {AUTH_ROUTES} from "@/routes";
import {cookies} from 'next/headers'

export async function middleware(request: NextRequest) {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(process.env.COOKIE_KEY!);
    const authRoute = AUTH_ROUTES.find(route => new RegExp(route).test(request.nextUrl.pathname));

    console.log('authRoute', authRoute)
    if (!cookie && !authRoute) {
        return NextResponse.redirect(new URL("/login",request.url));
    }
    if (cookie && authRoute) {
        return NextResponse.redirect(new URL("/",request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
}