import { useAtomValue } from "jotai"
import { ArrowLeft } from "lucide-react"
import { Link, useParams } from "react-router"

import { postsAtom } from "@/lib/posts-store"

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BlogPost() {
  const { id } = useParams()
  const posts = useAtomValue(postsAtom)
  const post = posts.find((item) => item.id === id)

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-heading text-2xl font-semibold">
          This page has been lost to the archive.
        </h1>
        <Link
          to="/blog"
          className="text-accent mt-6 inline-flex items-center gap-2 text-sm hover:underline"
        >
          <ArrowLeft className="size-4" />
          Back to all writings
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        to="/blog"
        className="text-muted-foreground hover:text-accent mb-10 inline-flex items-center gap-2 text-xs tracking-widest uppercase"
      >
        <ArrowLeft className="size-3.5" />
        Back to all writings
      </Link>

      <span className="text-accent font-heading text-xs tracking-[0.3em] uppercase">
        {post.tag}
      </span>
      <h1 className="font-heading mt-3 text-3xl leading-tight font-semibold sm:text-4xl">
        {post.title}
      </h1>
      <div className="text-muted-foreground mt-4 flex items-center gap-2 text-sm">
        <span className="font-medium">{post.author}</span>
        <span aria-hidden="true">·</span>
        <span>{formatDate(post.date)}</span>
      </div>

      <div className="border-border mt-10 flex flex-col gap-6 border-t pt-10 text-base leading-loose">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export default BlogPost
