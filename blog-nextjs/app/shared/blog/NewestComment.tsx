"use client";
import { BlogPostTeaser } from "@/app/shared/api/types";
import { addComment } from "@/app/blog/(content)/post/post-actions";
import { useState } from "react";

type NewestCommentProps = {
  post: BlogPostTeaser;
};
export default function NewestComment({ post }: NewestCommentProps) {
  const [comment, setComment] = useState("");
  return (
    <div>
      <p className={"font-bold"}>Latest comment(Post Id: {post.id})</p>
      <p className={"italic"}>{post.newestComment?.comment}</p>

      <p>
        <b>ADD YOU COMMENT:</b>
      </p>

      <form action={addComment}>
        <input type={"hidden"} name={"postId"} value={post.id} />
        <input
          key={post.id}
          type={"text"}
          name={"comment"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type={"submit"}>Add!</button>
      </form>
    </div>
  );
}
