import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../utils/booksSlice';
import { useNavigate } from 'react-router-dom';
// title, author, desc, rating

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [rating, setRating] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector(store => store.book.books);

    function handleTitle(e) {
        let val = e.target.value;
        setTitle(val);
    }
    function handleAuthor(e) {
        let val = e.target.value;
        setAuthor(val);
    }
    function handleCategory(e) {
        let val = e.target.value;
        setCategory(val);
    }
    function handleDesc(e) {
        let val = e.target.value;
        setDesc(val);
    }
    function handleRating(e) {
        let val = e.target.value;
        setRating(val);
    }

    function handleAddBtn(e) {
        // dispatch(addBook())
        e.preventDefault();
        if(title.trim()==""||author.trim()==""||category.trim()==""||desc.trim()==""||rating.trim()=="") {
            alert("Please fill out all the fields");
            return;
        }
        let newBook = {
            id: books.length+1,
            title: title,
            author: author,
            category: category,
            rating: rating,
            description: desc,
            imageLink: `//dummyimage.com/200x200/B0C4DE/000000&text=${title}+by+${author}`
        }
        dispatch(addBook(newBook));
        navigate("/browsebooks");
    }


    return (
        <div className='addBookPage'>
            <form className='addBookSection'>
                <h2 className="addBookTitle">Add a New Book</h2>
                <input placeholder='Book Title' onChange={handleTitle} value={title} className='addBookInput' type="text" />
                <input placeholder='Book Author' onChange={handleAuthor} value={author} className='addBookInput' type="text" />
                <input placeholder='Book Category' onChange={handleCategory} value={category} className='addBookInput' type="text" />
                <input placeholder='Book Description' onChange={handleDesc} value={desc} className='addBookInput' type="text" />
                <input placeholder='Book Rating' onChange={handleRating} value={rating} className='addBookInput' type="text" />
                <button onClick={handleAddBtn} className='addBookBtn'>Add Book</button>
            </form>
        </div>
    )
}

export default AddBook