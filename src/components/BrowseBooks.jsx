import React, { useEffect, useState } from 'react'
import Book from './Book'
import "./style.css"
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function BrowseBooks() {
    const books = useSelector(store => store.book.books);
    const {category} = useParams();
    const [searched, setSearched] = useState("");
    const [booksToShow, setBooksToShow] = useState(books);

    useEffect(()=>{
        if(category) {
            const filteredArr = books.filter(book => book.category.toLowerCase() == category);
            setBooksToShow(filteredArr);
        } else {
            setBooksToShow(books);
        }
    }, [category, books]);
    
    function handleChange(e) {
        let value = e.target.value;
        setSearched(value);
    }
    function handleClick() {
        const filteredArr = books.filter((book) =>
            book.title.toLowerCase().includes(searched.toLowerCase())
        );
        setBooksToShow(filteredArr);
    }
    function handleKey(e) {
        e.key=='Enter' && handleClick();
    }

    return (
        <div className="booklistContainer">
            <section className='welcomeSection'>
                <h1 className="booklistTitle">🔎 Browse Books</h1>
                <p className="booklistSubtitle">Find your next favorite book by searching or filtering below!</p>
            </section>
            <section className='search'>
                {/* <h2 className='searchHeading'>Search books</h2> */}
                <div className='searchBarGroup'>
                    <input placeholder='search book by title' className='searchBar' type="text" onChange={handleChange} value={searched} onKeyDown={handleKey}/>
                    <button className='searchBtn' onClick={handleClick}>Search</button>
                </div>
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
                {booksToShow.length === 0 ? (
                    <div className="noBooksMsg">No books found. Try a different search or category!</div>
                ) : (
                    booksToShow.map((book) => (
                        <Book bookDetail={book} key={book.id}/>
                    ))
                )}
            </section>
        </div>
    )
}

export default BrowseBooks;