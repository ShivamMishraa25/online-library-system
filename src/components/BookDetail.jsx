import React from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../utils/books';
// remove Number()

function BookDetail() {
    const param = useParams();
    let filteredBook = books.filter(book => book.id == param.id);
    let b = filteredBook[0];
    
    
    

  return (
    <article className='bookCard'>
        <img className='bookImg' src={b.imageLink} alt="book" height="200px" width="200px"/>
        <div className='bookDetails'>
            <h2 className='bookTitle'>{b.title}</h2>
            <p className='bookAuthor'>{b.author}</p>
            <p className='bookDescription'>{b.description}</p>
            <p className='bookYear'>{b.year}</p>
        </div>
    </article>
  )
}

export default BookDetail