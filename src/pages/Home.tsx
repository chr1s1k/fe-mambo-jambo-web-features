import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
  return (
    <>
      <h1>Examples</h1>
      <ol className="list">
        <li className="list__item">
          <Link to="/container-queries" className="list__link">
            Container queries
          </Link>
        </li>
        <li className="list__item">
          <Link to="/has" className="list__link">
            :has
          </Link>
        </li>
        <li className="list__item">
          <Link to="/text-wrap" className="list__link">
            text-wrap: balance
          </Link>
        </li>
        <li className="list__item">
          <Link to="/focus-visible" className="list__link">
            :focus-visible
          </Link>
        </li>
        <li className="list__item">
          <Link to="/inert" className="list__link">
            inert
          </Link>
        </li>
      </ol>
    </>
  )
}
