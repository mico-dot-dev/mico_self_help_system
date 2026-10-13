"use server";
import { supabaseServer } from "../lib/supabase/server";
import {
  AuthModel,
  ActionResponse,
  AuthSchema,
} from "@/src/schema/auth.schema";
import { getErrorMessage } from "@/lib/errors";

export async function GetAuthUser(): Promise<
  ActionResponse<{ userId: string }>
> {
  try {
    const supabase = await supabaseServer();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return { success: false, error: "User not authenticated" };
    }

    return {
      success: true,
      data: { userId: user.id },
    };
  } catch (error) {
    console.error("Error getting authenticated user:", error);
    return {
      success: false,
      error: getErrorMessage(error),
    };
  }
}

export async function LoginUser(
  data: AuthModel,
): Promise<ActionResponse<{ message: string }>> {
  const parsedUser = AuthSchema.safeParse(data);
  if (!parsedUser.success) {
    return { success: false, error: "Invalid form payload" };
  }

  try {
    const supabase = await supabaseServer();
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error)
      return {
        success: false,
        error: "Invalid email or password.",
      };

    return {
      success: true,
      data: { message: "Login successful." },
    };
  } catch (error) {
    console.error("Login failed:", error);
    return {
      success: false,
      error: getErrorMessage(error),
    };
  }
}

export async function SignUpUser(
  data: AuthModel,
): Promise<ActionResponse<{ message: string }>> {
  const parsedData = AuthSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, error: "Invalid form payload" };
  }

  try {
    const supabase = await supabaseServer();
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      return {
        success: false,
        error: "Error in creating a new user",
      };
    }

    return {
      success: true,
      data: { message: "Signup Success" },
    };
  } catch (error) {
    console.log("Sign Up error: ", error);
    return {
      success: false,
      error: getErrorMessage(error),
    };
  }
}
