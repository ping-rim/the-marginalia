import { useAtomValue } from "jotai"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router"

import { PostCard } from "@/components/post-card"
import { buttonVariants } from "@/components/ui/button"
import { postsAtom } from "@/lib/posts-store"

export function Home() {
  const posts = useAtomValue(postsAtom)
  const featured = posts.slice(0, 3)

  return (
    <div>
      <section className="border-border relative overflow-hidden border-b px-6 py-28">
        <div className="from-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="text-accent font-heading text-xs tracking-[0.3em] uppercase">
            Est. in the margins
          </span>
          <h1 className="font-heading text-4xl leading-tight font-semibold sm:text-5xl">
            The Marginalia
          </h1>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg">
            Essays, notebooks, and quiet arguments from a small circle of
            readers who never quite left the library.
          </p>
          <Link
            to="/blog"
            className={buttonVariants({ size: "lg", className: "mt-2" })}
          >
            Enter the Archive
            <ArrowRight data-icon="inline-end" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-heading text-2xl font-semibold">
            Featured Writings
          </h2>
          <Link
            to="/blog"
            className="text-accent font-heading text-xs tracking-widest uppercase hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
