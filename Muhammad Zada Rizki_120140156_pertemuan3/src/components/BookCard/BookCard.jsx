import React from 'react';
import PropTypes from 'prop-types';
import './BookCard.css';

const BookCard = ({ book, onEdit, onDelete }) => {
  const getStatusColor = () => {
    switch(book.status) {
      case 'owned': return 'green';
      case 'reading': return 'blue';
      case 'wishlist': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <div className="book-card">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
      </div>
      <div className="book-actions">
        <span 
          className="status-badge" 
          style={{ backgroundColor: getStatusColor() }}
        >
          {book.status}
        </span>
        <button onClick={() => onEdit(book)}>Edit</button>
        <button onClick={() => onDelete(book.id)}>Delete</button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['owned', 'reading', 'wishlist']).isRequired
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default BookCard;