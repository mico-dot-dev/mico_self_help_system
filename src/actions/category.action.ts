"use server";

import { ActionResponse } from "@/src/schema/auth.schema";
import {
  CategoryFormModel,
  CategoryListModel,
  CategoryListSchema,
  CategorySchema,
} from "@/src/schema/category.schema";
import { prisma } from "@/src/lib/prisma-client";
import { withAuth } from "@/src/lib/utils/validation-wrapper";
import { getErrorMessage } from "../lib/errors";

export async function getUserCategory(): Promise<
  ActionResponse<CategoryListModel[]>
> {
  return await withAuth(async (userId) => {
    try {
      const res = await prisma.task_category.findMany({
        where: {
          OR: [
            {
              user_id: userId,
            },
            {
              is_system: true,
            },
          ],
        },
        orderBy: {
          title: "asc",
        },
      });

      return {
        success: true,
        data: res,
      };
    } catch (error) {
      console.error("Error fetching user categories:", error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  });

  // try {
  //   const res = await withAuth(async (userId) => {
  //     return {
  //       success: true,
  //       data: await prisma.task_category.findMany({
  //         where: {
  //           user_id: userId,
  //         },
  //         orderBy: {
  //           title: "asc",
  //         },
  //       }),
  //     };
  //   });

  //   if (!res.success) {
  //     return {
  //       success: false,
  //       error: "User Not Authenticated",
  //     };
  //   }

  //   const categories = res.data;

  //   if (categories[0] === undefined) {
  //     return {
  //       success: true,
  //       data: [],
  //     };
  //   }

  //   const parsedCategories: CategoryListModel[] = categories.map(
  //     (category) => ({
  //       id: category.id,
  //       title: category.title || "",
  //     }),
  //   );

  //   return {
  //     success: true,
  //     data: parsedCategories,
  //   };
  // } catch (error) {
  //   console.error("Error fetching user categories:", error);
  //   return {
  //     success: false,
  //     error: getErrorMessage(error),
  //   };
  // }
}

export async function CreateCategory(
  data: CategoryFormModel,
): Promise<ActionResponse<{ message: string }>> {
  const parsedData = CategorySchema.safeParse(data);
  if (!parsedData.success) {
    return {
      success: false,
      error: "Failed to parsed category data",
    };
  }
  return withAuth(async (userId) => {
    try {
      const newCategory = await prisma.task_category.create({
        data: {
          title: data.title,
          user_id: userId,
        },
      });

      return {
        success: true,
        data: { message: "Success" },
      };
    } catch (error) {
      console.error("Error creating category:", error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  });
}
