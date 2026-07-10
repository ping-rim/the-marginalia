import { atom } from "jotai"

import { initialPosts, type Post } from "@/data/posts"

export const postsAtom = atom<Post[]>(initialPosts)

export function createPostId(title: string) {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")

  return `${slug || "untitled"}-${Date.now()}`
}
