import React, { useState } from 'react'
import Book from './Book'
import "./style.css"
import { books } from '../utils/books';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../utils/booksSlice';

function BookList() {
    const [searched, setSearched] = useState("");
    const [arr, setArr] = useState(books);

    function handleChange(e) {
        let value = e.target.value;
        setSearched(value);
    }
    function handleClick() {
        const filteredArr = books.filter((data) =>
            data.title.toLowerCase().includes(searched.toLowerCase())
        );
        setArr(filteredArr);
    }
    function handleKey(e) {
        e.key=='Enter' && handleClick();
    }

    const items = useSelector(store => store.book.books);
    const dispatch = useDispatch();
    function handleAddBook() {
        dispatch(addBook("book1"));
    }
    console.log(items);


  return (
    <>
        <div className='search'>
            <h2 className='searchHeading'>Search books</h2>
            <div className='searchBarGroup'>
                <input className='searchBar' type="text" onChange={handleChange} value={searched} onKeyDown={handleKey}/>
                <button className='searchBtn' onClick={handleClick}>Search</button>
            </div>
        </div>
        <section className='bookList'>
            {arr.map((book) => (
                <Book bookDetail={book} key={book.id}/>
            ))}
        </section>
        <p>{items.length}</p>
        <button onClick={handleAddBook}>Add book</button>
    </>
  )
}

export default BookList