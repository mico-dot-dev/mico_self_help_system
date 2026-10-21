import { NextResponse, type NextRequest } from "next/server";
import { supabaseServer } from "@/src/lib/db/supabase/server";

export async function proxy(request: NextRequest) {
  const supabaseResponse = NextResponse.next({
    request,
  });
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;
  const isAuthOrRoot =
    path === "/" || path.includes("/login") || path.includes("/signup");
  if (user && isAuthOrRoot) {
    await supabase.auth.signOut();
    return supabaseResponse;
  }
  const isProtectedPath = path.startsWith("/dashboard");
  if (!user && isProtectedPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
export const config = {
  matcher: ["/", "/dashboard:path*"],
};
