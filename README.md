# The Marginalia

A dark-academia themed publishing platform for long-form writing — essays, articles and
notes. Contributors publish from a built-in editor; readers browse the archive and read
individual pieces; the admin desk shows everything grouped by author.

Built with React 19, TypeScript and Tailwind CSS v4.

## Features

**Reading**

- Landing page introducing the publication
- Archive listing every published piece as a card, with category tag, author and date
- Individual article pages that render the body paragraph by paragraph

**Writing**

- Publish form for title, author, category, optional excerpt and body
- Author field autocompletes from contributors who have already published
- If you skip the excerpt, one is generated automatically from the opening paragraph
- Body paragraphs are separated by a blank line — no markdown syntax to remember

**Managing**

- Admin desk groups every article by author with per-author article counts
- Each entry links straight through to the published post

**Across the site**

- Dark, light and system themes, defaulting to dark, via a class-based theme provider
- Responsive layout with a sticky blurred navbar and a drawer menu on small screens
- Accessible controls — focus-visible states, ARIA labels and `aria-expanded` on the
  nav toggle

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript (strict) |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui on Base UI |
| Routing | React Router 7 |
| State | Jotai |
| Icons | lucide-react |
| Type | Inter Variable (Fontsource) |
| Quality | ESLint, Prettier + Tailwind class sorting |

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
pnpm install
pnpm dev
```

The dev server prints a local URL — open it and you are on the home page.

### Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server with hot reload |
| `pnpm build` | Type-check, then build for production into `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm typecheck` | Run `tsc --noEmit` |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format everything with Prettier |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/blog` | Archive listing |
| `/blog/:id` | Single article |
| `/admin` | Admin desk, grouped by author |
| `/admin/write` | Publish a new article |

## Project structure

```
src/
├── App.tsx                 # shell: navbar + routed outlet
├── main.tsx                # providers, router, route table
├── index.css               # Tailwind entry and design tokens
├── components/
│   ├── navbar.tsx          # nav, theme toggle, mobile drawer
│   ├── post-card.tsx       # archive card
│   ├── theme-provider.tsx  # dark / light / system
│   └── ui/                 # shadcn/ui primitives
├── data/
│   └── posts.ts            # seed articles and the Post type
├── lib/
│   ├── posts-store.ts      # Jotai store and post ID generation
│   └── utils.ts            # class name helper
└── pages/
    ├── home.tsx
    ├── blog-list.tsx
    ├── blog-post.tsx
    ├── write-article.tsx
    └── admin.tsx
```

## Status and roadmap

Articles currently live in client-side Jotai state, seeded from `src/data/posts.ts`, so
published pieces are not persisted and reset on refresh. Planned next:

- [ ] Persist articles and images with Appwrite
- [ ] Contributor accounts and author authentication
- [ ] Markdown rendering for article bodies
- [ ] Edit and delete existing articles
- [ ] Search and tag filtering on the archive
- [ ] Tests for the post ID and excerpt helpers

## License

Not yet licensed.
