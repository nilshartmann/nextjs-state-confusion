import { BlogPost, Comment } from "@/app/shared/api/types";
import { getLoaderSWCOptions } from "next/dist/build/swc/options";
import React from "react";

type BlogPostPageProps = {
  params: { postId: string };
};

declare function loadPost(params: any): Promise<BlogPost>;
declare function loadComments(params: any): Promise<Comment[]>;

declare function Comments(params: any): Promise<any>;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const commentsPromise = loadComments(params.postId);
  const post = await loadPost(params.postId);

  return (
    <article>
      <h1>{post.title}</h1>
      {post.body}

      <React.Suspense fallback={<h2>Comments loading...</h2>}>
        <Comments commentsPromise={commentsPromise} />
      </React.Suspense>
    </article>
  );
}

// export default function BlogPostPage({ params }: BlogPostPageProps) {
//   return (
//     <article>
//       <h1>Blog Post with postId {params.postId}</h1>
//     </article>
//   );
// }
