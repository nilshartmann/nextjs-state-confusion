# Start

```bash
# Backend run on port 7002:

pnpm backend

# "Frontend"/Next.js (runs on Port 3080)

pnpm dev:clean

```

## "State confusion"

- Open list of blog posts: http://localhost:3080/blog
- Enter a comment for the first blog post (`ADD YOUR COMMENT`), but do _not_ click on add
- Click on `Order by Date desc`
- Lists gets re-ordered. Note that your comment still is in 1st blog post in that list, and not associated with the blog post you had written your comment for. 😢
