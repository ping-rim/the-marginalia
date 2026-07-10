import { Link } from "react-router"

import type { Post } from "@/data/posts"

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group border-border bg-card hover:border-accent/60 flex flex-col gap-3 border p-6 transition-colors"
    >
      <span className="text-accent font-heading text-xs tracking-widest uppercase">
        {post.tag}
      </span>
      <h3 className="font-heading group-hover:text-accent text-xl leading-snug font-semibold transition-colors">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {post.excerpt}
      </p>
      <div className="text-muted-foreground mt-2 flex items-center gap-2 text-xs">
        <span className="font-medium">{post.author}</span>
        <span aria-hidden="true">·</span>
        <span>{formatDate(post.date)}</span>
      </div>
    </Link>
  )
}
