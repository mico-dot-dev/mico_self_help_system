"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../../../components/ui/button";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { createGuestUser } from "@/src/actions/auth.action";
import Swal from "sweetalert2";

interface ModalProps {
  onClose: (open: boolean) => void;
  onRedirect: (callback: () => void) => void;
}

function CaptchaModal({ onClose, onRedirect }: ModalProps) {
  const router = useRouter();
  const captcha = useRef<HCaptcha>(null);
  const [isPending, setIsPending] = useState(false);

  const handleCaptcha = async (token: string) => {
    if (isPending) return; // guard against double submi
    setIsPending(true);
    try {
      const res = await createGuestUser(token);

      if (!res.success) {
        captcha.current?.resetCaptcha(); // token is single-use
        await Swal.fire({
          icon: "error",
          title: "Guest login failed",
          text: res.error,
        });
        return;
      }

      onClose(false);
      onRedirect(() => {
        router.push("/dashboard");
        router.refresh();
      });
    } catch {
      captcha.current?.resetCaptcha();
      await Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <DialogContent showCloseButton={false} className="sm:max-w-sm">
      <DialogHeader className="items-center text-center">
        <DialogTitle>Complete the captcha to continue</DialogTitle>
        <DialogDescription>
          {isPending
            ? "Creating your guest session..."
            : "Completing the captcha redirects you to the app"}
        </DialogDescription>
      </DialogHeader>

      <div className="flex justify-center mb-3">
        <HCaptcha
          ref={captcha}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
          onVerify={handleCaptcha}
          onExpire={() => captcha.current?.resetCaptcha()}
          onError={() => captcha.current?.resetCaptcha()}
          theme={"dark"}
          size="normal"
        />
      </div>
      <DialogClose
        render={
          <Button variant="outline" disabled={isPending}>
            Cancel
          </Button>
        }
      />
    </DialogContent>
  );
}

export default CaptchaModal;
