import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Book(props) {
    let b = props.bookDetail

  return (
    <Link to={`/book/${b.id}`}>
      <article className='bookCard'>
        <img className='bookImg' src={b.imageLink} alt="book" height="200px" width="200px"/>
        <div className='bookDetails'>
            <h2 className='bookTitle'>{b.title}</h2>
            <p className='bookAuthor'>{b.author}</p>
            <p className='bookDescription'>{b.description}</p>
            <p className='bookYear'>{b.year}</p>
        </div>
      </article>
    </Link>
    
  )
}

export default Book