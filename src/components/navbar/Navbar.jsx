import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/create">Write</NavLink>
       <NavLink to="/posts">All Posts</NavLink>
       <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default Navbar