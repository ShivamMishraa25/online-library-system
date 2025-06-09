import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
// remove Number()

function BookDetail() {
    const param = useParams();
    const books = useSelector(store => store.book.books);
    let filteredBook = books.filter(book => book.id == param.id);
    let b = filteredBook[0];
    
    
  return (
    <div className='detailPage'>
        <article className='bookCard'>
            <img className='bookImg' src={b.imageLink} alt="book" height="200px" width="200px"/>
            <div className='bookDetails'>
                <h2 className='bookTitle'>{b.title}</h2>
                <p className='bookAuthor'>{b.author}</p>
                <p className='bookDescription'>{b.description}</p>
                <p className='bookYear'>{b.rating}</p>
            </div>
        </article>
        <Link to={"/browsebooks"}>Back to Browse</Link>
    </div>
  )
}

export default BookDetail