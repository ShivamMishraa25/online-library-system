import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <span className="headerLogo">📚 BookMan</span>
        <nav className="headerNav">
          <Link to="/">Home</Link>
          <Link to="/browsebooks">Browse Books</Link>
          <Link to={"/addbook"}>Add Book</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header