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
    }, [category]);
    
    
    

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
    <>
        <section className='search'>
            <h2 className='searchHeading'>Search books</h2>
            <div className='searchBarGroup'>
                <input placeholder='search book by title' className='searchBar' type="text" onChange={handleChange} value={searched} onKeyDown={handleKey}/>
                <button className='searchBtn' onClick={handleClick}>Search</button>
            </div>
        </section>
        <section className='filterSection'>
            <p>Filter by Category</p>
            <Link to={"/browsebooks/fantasy"}>Fantasy</Link>
            <Link to={"/browsebooks/fiction"}>Fiction</Link>
            <Link to={"/browsebooks/philosophy"}>Philosophy</Link>
            <Link to={"/browsebooks/dystopian"}>Dystopian</Link>
            <Link to={"/browsebooks/classic"}>Classic</Link>
        </section>
        <section className='bookList'>
            {booksToShow.map((book) => (
                <Book bookDetail={book} key={book.id}/>
            ))}
        </section>
    </>
  )
}

export default BrowseBooks;