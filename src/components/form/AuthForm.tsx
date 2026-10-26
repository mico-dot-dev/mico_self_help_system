"use client";
import { useState, useTransition, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthSchema, AuthModel } from "@/src/schema/auth.schema";
import { SignUpUser, LoginUser } from "@/src/actions/auth.action";
import { useRouter } from "next/navigation";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, Mail, LockKeyhole, UserRound } from "lucide-react";
import { GoogleSignInButton } from "../../features/auth/components/GoogleSignInButton";
import CaptchaModal from "../../features/auth/components/CaptchaModal";
import { FormField } from "../shared/FormField";
import { Input } from "../ui/input";
import { FieldLabel, Field } from "../ui/field";

function AccountForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [isRedirecting, startTransition] = useTransition();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [captchaModal, setCaptchaModal] = useState(false);

  const busy = loading || isRedirecting || googleLoading;

  const content = {
    login: {
      title: "Welcome back!",
      subtitle: "Log in to continue",
      mode: "Log in",
      invertText: "Don't have an account?",
      invertTitle: "Sign Up",
    },
    signup: {
      title: "Create your account.",
      subtitle: "Join us today",
      mode: "Sign Up",
      invertText: "Already have an account?",
      invertTitle: "Log in",
    },
  }[mode];

  const authService = {
    login: LoginUser,
    signup: SignUpUser,
  }[mode];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthModel>({
    resolver: zodResolver(AuthSchema),
    mode: "onSubmit",
  });

  function toggleMode() {
    setMode((prev) => (prev === "login" ? "signup" : "login"));
  }

  async function AuthSubmit(data: AuthModel) {
    setLoading(true);
    try {
      const res = await authService(data);

      if (!res.success || !res) {
        setLoading(false);
        await Swal.fire({
          icon: "error",
          title: mode === "login" ? "Login Failed" : "Sign Up Failed",
          text: res.error || "An unexpected error occurred.",
        });
        return;
      }

      //Login
      if (mode === "login") {
        startTransition(() => {
          router.push("/dashboard");
          router.refresh();
        });
        setLoading(false);
        return;
      }
      // Sign up
      setLoading(false);
      await Swal.fire({
        icon: "success",
        title: "Email Sent",
        text: "Validation email sent. Please check your inbox to complete the registration.",
      }).then(() => {
        setMode("login");
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      await Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again in a moment.",
      });
    }
  }

  return (
    <>
      <div className="flex text-text-primary h-screen w-full items-center justify-center">
        <div className="flex flex-col h-3/4 lg:w-1/4 items-center md:w-full w-[80%] gap-5">
          <span className="flex flex-col self-start">
            <p className="text-xs font-bold text-primary ">{content.title}</p>
            <p className="text-lg font-semibold">{content.subtitle}</p>
          </span>
          <form
            className="flex flex-col w-full  gap-5"
            onSubmit={handleSubmit(AuthSubmit)}
            noValidate
            autoComplete="off"
          >
            <div className="flex flex-col gap-5 ">
              <FormField
                label="Email Adress"
                placeholder="you@example.com"
                {...register("email")}
                error={errors.email?.message}
                Icon={Mail}
                onFocus={(e) => e.target.removeAttribute("readonly")}
              />
              <FormField
                label="Password"
                placeholder="Enter Your Password"
                type="password"
                autoComplete="off"
                {...register("password")}
                error={errors.password?.message}
                Icon={LockKeyhole}
                onFocus={(e) => e.target.removeAttribute("readonly")}
              />
            </div>

            <div className="flex flex-row text-xs justify-between mb-2">
              <Field className="flex flex-row w-fit items-center">
                <Input type="checkbox" className="h-3 w-3" />
                <FieldLabel className="whitespace-nowrap ">
                  Remember me
                </FieldLabel>
              </Field>
              <span className="text-primary active:text-primary/80 hover:text-primary/80 cursor-pointer">
                Forget Password?
              </span>
            </div>

            <Button
              type="submit"
              variant={"default"}
              disabled={busy}
              size={"lg"}
              className="w-full p-5 text-md rounded-xl"
            >
              {busy ? "Loading" : content.mode}
            </Button>
          </form>

          <div className="flex flex-col w-full text-sm gap-2">
            <div className="text-center px-2 mb-3 relative w-full self-center">
              <div className="absolute inset-0 flex items-center w-full">
                <div className="w-full border-t border-text-primary" />
              </div>
              <span className="relative bg-background px-2 text-text-secondary">
                or {content.mode} with
              </span>
            </div>

            <div className="grid grid-cols-3 w-full text-3xl justify-items-center items-center mb-2">
              <GoogleSignInButton
                onLoadingChange={setGoogleLoading}
                size="medium"
              />
              <FaFacebook className="" />
              <FaDiscord className="" />
            </div>

            <div className="">
              <Button
                className="flex flex-row w-full items-center justify-center py-5"
                variant={"secondary"}
                onClick={() => setCaptchaModal(true)}
              >
                <UserRound size={15} />
                <span className="text-xs  hover:text-primary">
                  Continue as a Guest
                </span>
              </Button>
              <Dialog open={captchaModal} onOpenChange={setCaptchaModal}>
                <CaptchaModal
                  onClose={setCaptchaModal}
                  onRedirect={startTransition}
                />
              </Dialog>
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <div className="text-sm">
              <button
                className="flex justify-self-center text-center cursor-pointer text-text self-end"
                type="button"
                onClick={toggleMode}
              >
                <p className="text-text-secondary">
                  {content.invertText} &thinsp;
                </p>{" "}
                <p className="text-primary hover:underline">
                  {content.invertTitle}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Loading */}

      <Dialog open={busy}>
        <DialogContent showCloseButton={false} className="sm:max-w-sm">
          <DialogHeader className="items-center text-center">
            <Loader2 className="size-8 animate-spin" />
            <DialogTitle>
              {mode === "login" ? "Logging in…" : "Creating account…"}
            </DialogTitle>
            <DialogDescription>Please wait a moment.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AccountForm;
