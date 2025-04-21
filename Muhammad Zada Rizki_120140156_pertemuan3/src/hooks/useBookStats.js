import { useContext } from 'react';
import { useBooks } from '../context/BookContext';

const useBookStats = () => {
  const { books } = useBooks();
  
  const total = books.length;
  const owned = books.filter(book => book.status === 'owned').length;
  const reading = books.filter(book => book.status === 'reading').length;
  const wishlist = books.filter(book => book.status === 'wishlist').length;

  return {
    total,
    owned,
    reading,
    wishlist
  };
};

export default useBookStats;