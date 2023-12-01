import Link from "next/link";
import { BlogPost } from "@/app/shared/api/types";
import OrderByButton from "@/app/shared/blog/OrderByButton";
import OrderButton from "@/app/blog/material/posts/OrderButton";
import { addComment } from "@/app/blog/(content)/post/post-actions";

declare function loadPosts(): Promise<BlogPost[]>;

export default async function PostListPage() {
  // Zugriff auf Datenbank, HTTP-Endpunkt o.ä.
  const posts = await loadPosts();

  return (
    <section>
      <h1>Blog Posts</h1>

      <nav>
        <OrderButton orderBy="title">Order by title</OrderButton>
        <OrderButton orderBy="date">Order by date</OrderButton>
      </nav>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
            <CommentBox postId={p.id} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function CommentBox({ postId }: { postId: string }) {
  return (
    <form action={addComment}>
      <input type="hidden" name="postId" value={postId} />
      <input type="text" name="comment" />
      <button type="submit">Add!</button>
    </form>
  );
}

// export default async function PostListPage() {
//   // Zugriff auf Datenbank, HTTP-Endpunkt o.ä.
//   const posts = await loadPosts();
//
//   return (
//     <section>
//       <h1>Blog Posts</h1>
//
//       <nav>
//         <Link href={"/posts?order_by=title"}>Order by title</Link>
//         <Link href={"/posts?order_by=date"}>Order by date</Link>
//       </nav>
//
//       <ul>
//         {posts.map((p) => (
//           <li key={p.id}>
//             <Link href={`/posts/${p.id}`}>{p.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
