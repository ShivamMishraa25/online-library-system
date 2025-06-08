import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <Link to="/">Home</Link>
        <Link to="/browsebooks">Browse Books</Link>
        <Link to={"/addbook"}>Add Book</Link>
    </header>
  )
}

export default Header