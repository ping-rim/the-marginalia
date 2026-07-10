import * as React from "react"
import { useAtomValue } from "jotai"

import { PostCard } from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { postsAtom } from "@/lib/posts-store"

export function BlogList() {
  const posts = useAtomValue(postsAtom)
  const authors = React.useMemo(
    () => Array.from(new Set(posts.map((post) => post.author))),
    [posts]
  )
  const [activeAuthor, setActiveAuthor] = React.useState<string | null>(null)

  const visiblePosts = activeAuthor
    ? posts.filter((post) => post.author === activeAuthor)
    : posts

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <span className="text-accent font-heading text-xs tracking-[0.3em] uppercase">
          The Archive
        </span>
        <h1 className="font-heading mt-2 text-3xl font-semibold">
          All Writings
        </h1>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <Button
          variant={activeAuthor === null ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveAuthor(null)}
        >
          All Authors
        </Button>
        {authors.map((author) => (
          <Button
            key={author}
            variant={activeAuthor === author ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveAuthor(author)}
          >
            {author}
          </Button>
        ))}
      </div>

      {visiblePosts.length === 0 ? (
        <p className="text-muted-foreground">
          No writings from this author yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogList
