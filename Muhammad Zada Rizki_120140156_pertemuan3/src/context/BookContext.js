import React, { createContext, useContext, useReducer } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const BookContext = createContext();

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'EDIT_BOOK':
      return state.map(book => 
        book.id === action.payload.id ? action.payload : book
      );
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useLocalStorage('books', []);
  const [books, dispatch] = useReducer(bookReducer, storedBooks);

  React.useEffect(() => {
    setStoredBooks(books);
  }, [books, setStoredBooks]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
};