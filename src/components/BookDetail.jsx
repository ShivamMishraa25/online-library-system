import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function BookDetail() {
    const param = useParams();
    const books = useSelector(store => store.book.books);
    let filteredBook = books.filter(book => book.id == param.id);
    let b = filteredBook[0];
    
  return (
    <div className='detailPage uniqueDetailPage'>
        <article className='bookDetailCard uniqueBookDetailCard'>
            <div className="bookDetailImgWrap">
                <img className='bookDetailImg' src={b.imageLink} alt="book" />
            </div>
            <div className='bookDetailInfo'>
                <h2 className='bookDetailTitle'>{b.title}</h2>
                <p className='bookDetailAuthor'>{b.author}</p>
                <p className='bookDetailDescription'>{b.description}</p>
                {b.rating && <span className="bookDetailRatingBadge">⭐ {b.rating}</span>}
            </div>
        </article>
        <Link to={"/browsebooks"} className="backToBrowseLink uniqueBackToBrowseLink">← Back to Browse</Link>
    </div>
  )
}

export default BookDetail