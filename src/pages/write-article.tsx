import * as React from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { useNavigate } from "react-router"

import { Button } from "@/components/ui/button"
import { createPostId, postsAtom } from "@/lib/posts-store"

const inputClassName =
  "border-border bg-card w-full border px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"

export function WriteArticle() {
  const posts = useAtomValue(postsAtom)
  const setPosts = useSetAtom(postsAtom)
  const navigate = useNavigate()

  const existingAuthors = React.useMemo(
    () => Array.from(new Set(posts.map((post) => post.author))),
    [posts]
  )

  const [title, setTitle] = React.useState("")
  const [author, setAuthor] = React.useState("")
  const [tag, setTag] = React.useState("Essays")
  const [excerpt, setExcerpt] = React.useState("")
  const [content, setContent] = React.useState("")

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!title.trim() || !author.trim() || !content.trim()) {
      return
    }

    const paragraphs = content
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)

    setPosts((current) => [
      {
        id: createPostId(title),
        title: title.trim(),
        author: author.trim(),
        tag: tag.trim() || "Essays",
        excerpt: excerpt.trim() || paragraphs[0]?.slice(0, 140) || "",
        date: new Date().toISOString().slice(0, 10),
        content: paragraphs,
      },
      ...current,
    ])

    navigate("/admin")
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <span className="text-accent font-heading text-xs tracking-[0.3em] uppercase">
        New Entry
      </span>
      <h1 className="font-heading mt-2 text-3xl font-semibold">
        Write an Article
      </h1>
      <p className="text-muted-foreground mt-2 text-sm">
        Add a new piece to the archive. Separate paragraphs with a blank
        line.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-xs tracking-widest uppercase">
            Title
          </label>
          <input
            id="title"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className={inputClassName}
            placeholder="On the Ethics of Marginalia"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="author"
              className="text-xs tracking-widest uppercase"
            >
              Author
            </label>
            <input
              id="author"
              required
              list="existing-authors"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              className={inputClassName}
              placeholder="Your name"
            />
            <datalist id="existing-authors">
              {existingAuthors.map((name) => (
                <option key={name} value={name} />
              ))}
            </datalist>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="tag" className="text-xs tracking-widest uppercase">
              Category
            </label>
            <input
              id="tag"
              value={tag}
              onChange={(event) => setTag(event.target.value)}
              className={inputClassName}
              placeholder="Essays"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="excerpt"
            className="text-xs tracking-widest uppercase"
          >
            Excerpt (optional)
          </label>
          <input
            id="excerpt"
            value={excerpt}
            onChange={(event) => setExcerpt(event.target.value)}
            className={inputClassName}
            placeholder="A short teaser for the archive listing"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="content"
            className="text-xs tracking-widest uppercase"
          >
            Content
          </label>
          <textarea
            id="content"
            required
            rows={10}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className={inputClassName}
            placeholder={
              "Begin your article here.\n\nLeave a blank line between paragraphs."
            }
          />
        </div>

        <div className="mt-2 flex gap-3">
          <Button type="submit">Publish Article</Button>
        </div>
      </form>
    </div>
  )
}

export default WriteArticle
