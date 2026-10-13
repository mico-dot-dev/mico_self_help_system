import { ActionResponse } from "../../schema/auth.schema";
import { GetAuthUser } from "../../actions/auth.action";

export async function withAuth<T>(
  actionFn: (userId: string) => Promise<ActionResponse<T>>,
): Promise<ActionResponse<T>> {
  const auth = await GetAuthUser();

  if (!auth.success) {
    return {
      success: false,
      error: "User not Authenticated",
    };
  }
  try {
    return await actionFn(auth.data.userId);
  } catch (e) {
    return { success: false, error: "Something went wrong" };
  }
}
