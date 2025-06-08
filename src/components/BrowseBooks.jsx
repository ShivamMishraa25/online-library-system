import React, { useState } from 'react'
import Book from './Book'
import "./style.css"
import { useSelector } from 'react-redux';

function BrowseBooks() {
    const books = useSelector(store => store.book.books);
    const [searched, setSearched] = useState("");
    const [arr, setArr] = useState(books);

    function handleChange(e) {
        let value = e.target.value;
        setSearched(value);
    }
    function handleClick() {
        const filteredArr = books.filter((book) =>
            book.title.toLowerCase().includes(searched.toLowerCase())
        );
        setArr(filteredArr);
    }
    function handleKey(e) {
        e.key=='Enter' && handleClick();
    }

  return (
    <>
        <div className='search'>
            <h2 className='searchHeading'>Search books</h2>
            <div className='searchBarGroup'>
                <input placeholder='search book by title' className='searchBar' type="text" onChange={handleChange} value={searched} onKeyDown={handleKey}/>
                <button className='searchBtn' onClick={handleClick}>Search</button>
            </div>
        </div>
        <section className='bookList'>
            {arr.map((book) => (
                <Book bookDetail={book} key={book.id}/>
            ))}
        </section>
    </>
  )
}

export default BrowseBooks;