import * as React from "react"
import { BookOpen, Menu, Moon, Sun, X } from "lucide-react"
import { NavLink } from "react-router"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/admin", label: "Admin" },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="border-border bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <NavLink
          to="/"
          className="text-primary flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <BookOpen className="size-5" />
          <span className="font-heading text-lg font-semibold tracking-wide">
            The Marginalia
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-heading text-sm tracking-widest uppercase transition-colors",
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-border bg-background flex flex-col border-t px-6 py-4 sm:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "font-heading border-border border-b py-3 text-sm tracking-widest uppercase last:border-none",
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
