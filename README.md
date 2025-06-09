# 📚 Online Library System

An interactive **Online Library System** built with **React**, **React Router**, and **Redux**. This application allows users to explore book categories, view book details, search and filter books, and add new books—all within a polished, frontend experience.
-created by shivam.m4464@gmail.com as a part of Internshala's PGC FSD assignment.

## 🔥 Features

- **Home Page**
  - Landing view with a welcome message.
  - Displays a list of book categories.
  - Shows a selection of popular books (defaulting to 10).
  - Navigation bar linking “Home”, “Browse Books” and “Add Book”.

- **Browse Books**
  - Books displayed by category via dynamic routing (`/books/:category`).
  - Search bar filters books by title or author.
  - “View Details” link on each book navigates to its detail page.

- **Book Details**
  - Dynamic route (`/book/:id`) displaying full information: title, author, description and rating.
  - “Back to Browse” button returns to the previous page.

- **Add Book**
  - Form for adding a book.
  - Implemented with **Redux** to manage global state.
  - Includes form validation to ensure all fields are filled.
  - On submit, the user is redirected to “Browse Books” with the new addition visible.

- **404 - Page Not Found**
  - Catch-all route with friendly error message.
  - Includes a link back to Home.

## 🛠️ Technologies Used

- **React** with functional components and hooks (`useState`, `useEffect`, `useSelector`, `useDispatch`)
- **React Router v6** for client-side routing
- **Redux Toolkit** for application state management
- Styling via CSS Modules (or styled-components/SCSS—whichever you implemented)

## 🚀 Running the Project

1. **Clone the repository**  
   ```bash
   git clone https://github.com/ShivamMishraa25/online-library-system.git
   cd online-library-system

2. **Install dependencies**
    ```bash
    Copy
    Edit
    npm install

3. **Start the development server**
    ```bash
    Copy
    Edit
    npm start

4. **Open in browser**
    Navigate to http://localhost:5173/


### 🧾 License & Notes
Feel free to contribute improvements or file issues.

This project is educational and intended for demonstrating React + Redux functionality.

All book data is managed in-memory (no backend)—so all additions reset on page reload.