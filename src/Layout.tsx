import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <main className="wrapper">
      <Outlet />
    </main>
  )
}
