import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <h1>Simple Blog</h1>

      <Link href={"/posts"}>Blog Posts</Link>
    </main>
  );
}
