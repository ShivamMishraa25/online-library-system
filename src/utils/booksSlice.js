import { createSlice } from "@reduxjs/toolkit";
import {books} from "./books";

const booksSlice = createSlice({
    name: "books",
    initialState: {
        books: books
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        }
    }
});

export const {addBook} = booksSlice.actions;
export default booksSlice.reducer;