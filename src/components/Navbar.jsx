// style
import "./Navbar.css"
import { NavLink,Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
        <nav>
            <h1 className="btn btn-ghost text-2xl">My Articles</h1>
            <div>
                <NavLink className="btn btn-ghost" to="/">Home</NavLink>
                <NavLink className="btn btn-ghost" to="articles">Articles</NavLink>
                <NavLink className="btn btn-ghost" to="about">About</NavLink>
                <NavLink className="btn btn-ghost" to="contact">Contact</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar