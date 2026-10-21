"use client";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/src/lib/supabase/client";
import { authGoogle } from "@/src/actions/auth.action";

declare global {
  interface Window {
    userSignIn?: (response: { credential: string }) => void;
  }
}

interface Props {
  onLoadingChange: (loading: boolean) => void;
}

export function GoogleSignInButton({ onLoadingChange }: Props) {
  const router = useRouter();

  useEffect(() => {
    window.userSignIn = async (response) => {
      onLoadingChange(true);
      const res = await authGoogle(response.credential);

      if (!res.success) {
        onLoadingChange(false);
        return;
      }
      router.push("/dashboard");
      router.refresh();
    };
    return () => {
      delete window.userSignIn;
    };
  }, [router, onLoadingChange]);

  return (
    <div>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      />
      <div
        id="g_id_onload"
        data-client_id="149952135447-a3i8ucmhe26cv28g96k4il0l7euj4qp6.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="userSignIn"
        data-auto_prompt="false"
      />
      <div
        className="g_id_signin bg-transparent"
        data-type="icon"
        data-shape="circle"
        data-theme="filled_black"
        data-size="large"
      />
    </div>
  );
}
