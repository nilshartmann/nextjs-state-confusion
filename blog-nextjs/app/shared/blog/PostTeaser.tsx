import Card from "@/app/shared/components/Card";
import { BlogPostTeaser } from "@/app/shared/api/types";
import { dateTimeString } from "@/app/shared/components/date-formatter";
import AppLink from "@/app/shared/components/AppLink";
import { addComment } from "@/app/blog/(content)/post/post-actions";
import NewestComment from "@/app/shared/blog/NewestComment";

type PostPreviewProps = { post: BlogPostTeaser };
export default function PostTeaser({ post }: PostPreviewProps) {
  return (
    <Card renderAs={"article"}>
      <p>{dateTimeString(post.date)}</p>
      <div className={"space-y-4"}>
        <AppLink href={`/blog/post/${post.id}`} variant={"link"}>
          <h2 className={"border-b-[1px] border-b-grey-3"}>{post.title}</h2>
        </AppLink>
        <p className={"italic"}>{post.teaser}</p>
        <NewestComment post={post} />
      </div>
    </Card>
  );
}
