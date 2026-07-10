import { Outlet } from "react-router"

import { Navbar } from "@/components/navbar"

export function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default App
