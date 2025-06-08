import { configureStore } from "@reduxjs/toolkit"
import bookReducer from './booksSlice'


const appStore = configureStore({
    reducer: {
        book: bookReducer
    }
});

export default appStore;