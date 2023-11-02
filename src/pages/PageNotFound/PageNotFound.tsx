import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div>
      <h4>Page Not Found</h4>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to the home page</Link>
    </div>
  )
}

export { PageNotFound }