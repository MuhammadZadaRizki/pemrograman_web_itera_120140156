import React, { useState } from 'react';
import { useBooks } from '../../context/BookContext';
import BookForm from '../../components/BookForm/BookForm';
import BookCard from '../../components/BookCard/BookCard';
import BookFilter from '../../components/BookFilter/BookFilter';
import './Home.css';

const Home = () => {
  const { books, dispatch } = useBooks();
  const [filter, setFilter] = useState('all');
  const [editingBook, setEditingBook] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesFilter = filter === 'all' || book.status === filter;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddBook = () => {
    setEditingBook(null);
    setShowForm(true);
  };

  return (
    <div className="home-container">
      <h1>My Book Collection</h1>
      
      <div className="controls">
        <BookFilter filter={filter} setFilter={setFilter} />
        
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <button onClick={handleAddBook} className="add-button">
          Add New Book
        </button>
      </div>
      
      {showForm && (
        <BookForm 
          bookToEdit={editingBook} 
          onClose={() => setShowForm(false)} 
        />
      )}
      
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={(book) => {
                setEditingBook(book);
                setShowForm(true);
              }}
              onDelete={(id) => dispatch({ type: 'DELETE_BOOK', payload: id })}
            />
          ))
        ) : (
          <p>No books found. Add a new book!</p>
        )}
      </div>
    </div>
  );
};

export default Home;