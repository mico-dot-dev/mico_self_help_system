"use client";

import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface ModalProps {
  onClose: (open: boolean) => void;
}

function CaptchaModal({ onClose }: ModalProps) {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captcha = useRef<HCaptcha>(null);
  return (
    <DialogContent showCloseButton={false} className="sm:max-w-sm">
      <DialogHeader className="items-center text-center">
        <DialogTitle>Complete the captcha to continue</DialogTitle>
        <DialogDescription>
          Completing the captcha redirects you to the app
        </DialogDescription>
      </DialogHeader>

      <div className="flex justify-center mb-3">
        <HCaptcha
          ref={captcha}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
          onVerify={(token) => {
            setCaptchaToken(token);
          }}
          onExpire={() => setCaptchaToken(null)}
          theme={"dark"}
          size="normal"
        />
      </div>
      <DialogClose render={<Button variant="outline">Cancel</Button>} />
    </DialogContent>
  );
}

export default CaptchaModal;
