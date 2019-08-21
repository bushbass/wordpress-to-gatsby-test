import React from "react"

import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}

export default Nav
