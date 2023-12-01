import { Comment } from "@/app/shared/api/types";
import Card from "@/app/shared/components/Card";
import { H2 } from "@/app/shared/components/Heading";
import { addComment } from "@/app/blog/(content)/post/post-actions";

type CommentListProps = {
  commentsPromise: Promise<Comment[] | null>;
};
export default async function CommentList({
  commentsPromise,
}: CommentListProps) {
  const comments = await commentsPromise;

  if (!comments?.length) {
    return <p>No comments for this post.</p>;
  }

  return (
    <Card>
      <H2 style={"primary"}>Comments</H2>
      <div className={"space-y-4"}>
        {comments.map((c) => (
          <div key={c.id}>
            <span className={"font-bold"}>{c.username}:</span> {c.comment}
          </div>
        ))}
      </div>
    </Card>
  );
}

export function CommentBox({ postId }: { postId: string }) {
  return (
    <form action={addComment}>
      <input type="hidden" name="postId" value={postId} />
      <input type="text" name="comment" />
      <button type="submit">Add!</button>
    </form>
  );
}
