"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { AddPostResponse, BlogPost, RawBlogPost } from "@/app/shared/api/types";

// ---------------------------------------------------------------------------------------------------
// -- Simulate slowness
// ---------------------------------------------------------------------------------------------------
const addCommentSlowdown = ``; // `?slowDown=2400`
const addPostSlowdown = ``; // `?slowDown=2400`

type ActionErrorResponse = {
  status: "error";
  err: unknown;
};

type ActionSuccessResponse = {
  status: "success";
};

export type ActionResponse<T> = ActionErrorResponse | ActionSuccessResponse;

// ---------------------------------------------------------------------------------------------------
// -- Add new Post
// ---------------------------------------------------------------------------------------------------
export async function addPost(
  title: string,
  body: string,
): Promise<ActionResponse<never>> {
  // THIS RUNS ON SERVER!
  // Next is here "Backend-for-frontend"
  const response = await fetch(
    `http://localhost:7002/posts${addPostSlowdown}`,
    {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "content-type": "application/json" },
    },
  );

  if (!response.ok) {
    const err = await response.json();
    console.error("addPost failed", err);
    return { status: "error", err };
  }
  const json = await response.json();

  if (!AddPostResponse.safeParse(json).success) {
    return { status: "error", err: "Could not parse result" };
  }

  // revalidateTag("teaser");

  // revalidatePath does not work 😢
  // console.log("Server Action, revalidate path /blog");
  // revalidatePath(`/blog`);
  console.log("Server Action, revalidateTag 'teaser'");
  revalidateTag("teaser");

  return { status: "success" };
}
