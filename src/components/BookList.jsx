import React, { useState } from 'react'
import Book from './Book'
import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../utils/booksSlice';
import { Link } from 'react-router-dom';

function BookList() {
    const books = useSelector(store => store.book.books);


  return (
    <>
        <section className='welcomeSection'>
            <h1>Online Library System</h1>
            <p>Welcome! have a great time reading📖</p>
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
            {books.map((book) => (
                <Book bookDetail={book} key={book.id}/>
            ))}
        </section>
    </>
  )
}

export default BookList