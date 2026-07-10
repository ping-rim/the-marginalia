import * as React from "react"
import { useAtomValue } from "jotai"
import { PenLine } from "lucide-react"
import { Link } from "react-router"

import { buttonVariants } from "@/components/ui/button"
import { postsAtom } from "@/lib/posts-store"

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function Admin() {
  const posts = useAtomValue(postsAtom)

  const postsByAuthor = React.useMemo(() => {
    const groups = new Map<string, typeof posts>()
    for (const post of posts) {
      const existing = groups.get(post.author) ?? []
      existing.push(post)
      groups.set(post.author, existing)
    }
    return Array.from(groups.entries()).sort((a, b) =>
      a[0].localeCompare(b[0])
    )
  }, [posts])

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-accent font-heading text-xs tracking-[0.3em] uppercase">
            Scholar's Desk
          </span>
          <h1 className="font-heading mt-2 text-3xl font-semibold">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-2 max-w-md text-sm">
            Review writings from every contributor, or add your own to the
            archive.
          </p>
        </div>
        <Link
          to="/admin/write"
          className={buttonVariants({ className: "shrink-0" })}
        >
          <PenLine data-icon="inline-start" />
          Write Article
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        {postsByAuthor.map(([author, authorPosts]) => (
          <section key={author}>
            <div className="border-border mb-4 flex items-center justify-between border-b pb-2">
              <h2 className="font-heading text-lg font-semibold">{author}</h2>
              <span className="text-muted-foreground text-xs tracking-widest uppercase">
                {authorPosts.length}{" "}
                {authorPosts.length === 1 ? "article" : "articles"}
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {authorPosts.map((post) => (
                <li key={post.id}>
                  <Link
                    to={`/blog/${post.id}`}
                    className="border-border bg-card hover:border-accent/60 flex flex-wrap items-center justify-between gap-2 border px-4 py-3 transition-colors"
                  >
                    <span className="font-medium">{post.title}</span>
                    <span className="text-muted-foreground flex items-center gap-2 text-xs">
                      <span className="text-accent uppercase">
                        {post.tag}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{formatDate(post.date)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Admin
