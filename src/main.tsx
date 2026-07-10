import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Admin } from "@/pages/admin.tsx"
import { BlogList } from "@/pages/blog-list.tsx"
import { BlogPost } from "@/pages/blog-post.tsx"
import { Home } from "@/pages/home.tsx"
import { WriteArticle } from "@/pages/write-article.tsx"

const root = document.getElementById("root")
ReactDOM.createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/write" element={<WriteArticle />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
