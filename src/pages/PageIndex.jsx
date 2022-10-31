import { Link } from "react-router-dom"

const PageIndex = () => {
  return <div>
    <Link to="/home">home</Link>
    <hr />
    <Link to="/set_language">set language</Link>
  </div>
}

export default PageIndex;