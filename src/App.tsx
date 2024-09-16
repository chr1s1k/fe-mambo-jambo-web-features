import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { ContainerQueries, FocusVisible, Has, Home, Inert, TextWrap } from "./pages"

import "./App.css"
import Layout from "./Layout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/container-queries" element={<ContainerQueries />} />
      <Route path="/has" element={<Has />} />
      <Route path="/text-wrap" element={<TextWrap />} />
      <Route path="/focus-visible" element={<FocusVisible />} />
      <Route path="/inert" element={<Inert />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
