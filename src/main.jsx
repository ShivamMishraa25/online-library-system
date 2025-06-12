import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from "./components/Error"
import BrowseBooks from "./components/BrowseBooks.jsx"
import BookList from './components/BookList.jsx'
import BookDetail from './components/BookDetail.jsx'
import AddBook from './components/AddBook.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <BookList />
    },
    {
      path: "/browsebooks/:category?",
      element: <BrowseBooks />
    },
    {
      path: "/addbook",
      element: <AddBook />
    },
    {
      path: "/book/:id",
      element: <BookDetail />
    }],
    errorElement: <Error />
  }
], {
  basename: "/online-library-system/",
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);