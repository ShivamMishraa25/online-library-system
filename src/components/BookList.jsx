import React from 'react'
import Book from './Book'
import "./style.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function BookList() {
    const books = useSelector(store => store.book.books);

    return (
        <div className="booklistContainer">
            <section className='welcomeSection'>
                <h1 className="booklistTitle">📚 Online Library System</h1>
                <p className="booklistSubtitle">Welcome! Have a great time reading <span role="img" aria-label="book">📖</span></p>
            </section>
            <section className='filterSection booklistFilterSection'>
                <p className="filterLabel">Filter by Category</p>
                <div className="categoryLinks">
                    <Link to={"/browsebooks/fantasy"} className="categoryLink">Fantasy</Link>
                    <Link to={"/browsebooks/fiction"} className="categoryLink">Fiction</Link>
                    <Link to={"/browsebooks/philosophy"} className="categoryLink">Philosophy</Link>
                    <Link to={"/browsebooks/dystopian"} className="categoryLink">Dystopian</Link>
                    <Link to={"/browsebooks/classic"} className="categoryLink">Classic</Link>
                </div>
            </section>
            <section className='bookList'>
                {books.length === 0 ? (
                    <div className="noBooksMsg">No books available. Please check back later!</div>
                ) : (
                    books.map((book) => (
                        <Book bookDetail={book} key={book.id}/>
                    ))
                )}
            </section>
        </div>
    )
}

export default BookList