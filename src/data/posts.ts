export type Post = {
  id: string
  title: string
  author: string
  date: string
  tag: string
  excerpt: string
  content: string[]
}

export const initialPosts: Post[] = [
  {
    id: "ruins-of-forgotten-libraries",
    title: "On the Ruins of Forgotten Libraries",
    author: "Evelyn Ashworth",
    date: "2026-03-02",
    tag: "Essays",
    excerpt:
      "A wandering meditation on the libraries lost to fire, flood, and neglect, and what their absence teaches the living.",
    content: [
      "There is a particular grief reserved for buildings that once held books. Walk the site of any burned library and you will feel it: a silence too heavy for an empty field, as though the ground itself remembers what it lost.",
      "I have spent the better part of a decade cataloguing these places — Alexandria, Louvain, Sarajevo's Vijećnica — not to mourn them, exactly, but to understand what a civilization does with the hole left behind.",
      "What survives is rarely the text. It is the habit of reading, passed hand to hand, that outlives any single shelf.",
    ],
  },
  {
    id: "marginalia-and-ghosts",
    title: "Marginalia and the Ghosts of Scholars Past",
    author: "Marcus Thackeray",
    date: "2026-03-11",
    tag: "Notebook",
    excerpt:
      "Old library books carry more than their printed text. In the margins, previous readers leave a second, stranger book behind.",
    content: [
      "Every secondhand book is haunted twice — once by its author, and once by the strangers who annotated it before it reached you.",
      "I keep a running list of the best marginalia I've found: a furious rebuttal to Kant scrawled in pencil, a pressed violet in a copy of Rilke, a single word — 'true' — beside a line I'd underlined myself, years apart from whoever came first.",
      "We are none of us the first reader. That thought should comfort more than it unsettles.",
    ],
  },
  {
    id: "ethics-of-candlelight-study",
    title: "The Ethics of Candlelight Study",
    author: "Odile Fenwick",
    date: "2026-03-19",
    tag: "Philosophy",
    excerpt:
      "Why we romanticize studying by dim light, and what that romance quietly costs the people who actually have to do it.",
    content: [
      "There is a photograph, endlessly reproduced, of a student bent over a desk by candlelight, and we have decided this image means devotion rather than what it more plainly means: no electricity, and eyes that will suffer for it.",
      "I want to defend the aesthetic without excusing the conditions. Beauty and hardship are not the same thing, even when they share a photograph.",
    ],
  },
  {
    id: "ink-dust-and-doubt",
    title: "Ink, Dust, and Doubt",
    author: "Julian Voss",
    date: "2026-04-02",
    tag: "Essays",
    excerpt:
      "A short defense of uncertainty as a scholarly virtue, written from the archive floor at two in the morning.",
    content: [
      "The archive teaches patience before it teaches anything else. You will spend four hours in a box of correspondence to find one sentence that changes your argument, and three more hours where nothing changes at all.",
      "Doubt, in this context, is not weakness. It is the only honest response to evidence that keeps refusing to resolve.",
    ],
  },
  {
    id: "requiem-for-the-reading-room",
    title: "A Requiem for the Reading Room",
    author: "Evelyn Ashworth",
    date: "2026-04-14",
    tag: "Essays",
    excerpt:
      "As university reading rooms close or convert to study pods, something quieter than architecture is disappearing.",
    content: [
      "The reading room was never just a room. It was an agreement among strangers to be silent together, in service of something none of them were doing at the same time.",
      "I don't know how to build that agreement into a study pod with a whiteboard and a power outlet. I'm not sure anyone does.",
    ],
  },
  {
    id: "ciphers-in-the-cloister",
    title: "Ciphers in the Cloister",
    author: "Marcus Thackeray",
    date: "2026-04-27",
    tag: "History",
    excerpt:
      "Monastic scribes hid jokes, complaints, and the occasional cipher in the margins of illuminated manuscripts.",
    content: [
      "'The parchment is thin, the winter is cold, the work goes badly, more snow than usual today' — a marginal complaint from a ninth-century scribe, and somehow the most human sentence in the whole manuscript.",
      "We like to imagine the past as more solemn than the present. The margins disagree, cheerfully.",
    ],
  },
]
