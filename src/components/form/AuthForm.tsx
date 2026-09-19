"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthSchema, AuthModel } from "@/src/schema/auth.schema";
import { SignUpUser, LoginUser } from "@/src/actions/auth.action";
import { useRouter } from "next/navigation";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { twJoin } from "tailwind-merge";

function AccountForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");

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
    await Swal.showLoading();
    try {
      const res = await authService(data);

      if (!res.success || !res) {
        await Swal.fire({
          icon: "error",
          title: mode === "login" ? "Login Failed" : "Sign Up Failed",
          text: res.error || "An unexpected error occurred.",
        });
        return;
      }

      //Login
      if (mode === "login") {
        router.push("/dashboard");
        router.refresh();
        Swal.close();
        // Sign up
      } else {
        await Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Validation email sent. Please check your inbox to complete the registration.",
        }).then(() => {
          setMode("login");
        });
      }
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
        <div className="flex flex-col h-3/4 lg:w-1/4 items-center sm:w-full">
          <p className="lg:text-3xl sm:text-2xl text-center font-bold lg:mb-20 mb-10">
            {content.title}
          </p>
          <form
            className="flex flex-col w-full mb-15"
            onSubmit={handleSubmit(AuthSubmit)}
            noValidate
          >
            <div className="flex flex-col gap-8 mb-10">
              <fieldset className="flex flex-col">
                {errors.email && (
                  <label htmlFor="email" className="text-text-error text-sm">
                    {errors.email.message}
                  </label>
                )}
                <input
                  type="text"
                  placeholder="Email Adress"
                  className="input-base indent-2.5 lg:py-1.5 h-12"
                  {...register("email")}
                />
              </fieldset>
              <fieldset className="flex flex-col">
                {errors.password && (
                  <label htmlFor="password" className="text-text-error text-sm">
                    {errors.password.message}
                  </label>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  className="input-base indent-2.5 py-1.5 h-12"
                  autoComplete="off"
                  {...register("password")}
                />
              </fieldset>
            </div>

            <div className="aura text-text-info duration-3000 rounded-4xl">
              <div
                className={twJoin(
                  "cursor-pointer button-base rounded-4xl h-12 text-lg flex items-center justify-center",
                  isSubmitting && "opacity-70 cursor-not-allowed",
                )}
              >
                <button
                  className="cursor-pointer"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading" : content.mode}
                </button>
              </div>
            </div>
          </form>

          <fieldset className="flex flex-col w-full">
            <div className="text-center px-2 mb-3 relative w-full self-center">
              <div className="absolute inset-0 flex items-center w-full">
                <div className="w-full border-t border-text-primary" />
              </div>
              <span className="relative bg-background px-2">
                or {content.mode} with
              </span>
            </div>
            <div className="flex justify-between w-full text-3xl">
              <FcGoogle className="" />
              <FaFacebook className="" />
              <FaDiscord className="" />
            </div>
          </fieldset>

          <div className="flex flex-1">
            <button
              className="flex justify-self-center text-center cursor-pointer  text-text self-end"
              type="button"
              onClick={toggleMode}
            >
              <p>{content.invertText} &thinsp;</p>{" "}
              <p className="text-primary hover:underline">
                {content.invertTitle}
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountForm;
