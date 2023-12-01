"use server";

import { revalidatePath, revalidateTag } from "next/cache";

async function saveComment(postId: string, comment: string) {
  await fetch(`http://localhost:7002/posts/${postId}/comments`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ comment }),
  });
}

export async function addComment(formData: FormData) {
  const postId = formData.get("postId") as string;
  const comment = formData.get("comment") as string;

  console.log("Add comment", postId, comment);

  await saveComment(postId, comment);
  revalidateTag("teaser");
  const p = `/blog/post/${postId}`;
  console.log("##### REVALIDATE", p);
  revalidatePath(p);
}
