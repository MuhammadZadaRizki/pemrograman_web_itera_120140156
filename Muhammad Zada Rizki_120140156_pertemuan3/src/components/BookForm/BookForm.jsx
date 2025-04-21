import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

const BookForm = ({ bookToEdit, onClose, onSubmit }) => {
  const [book, setBook] = useState(bookToEdit || {
    title: '',
    author: '',
    status: 'owned'
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!book.title.trim()) newErrors.title = 'Title is required';
    if (!book.author.trim()) newErrors.author = 'Author is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(book);
    onClose();
  };

  return (
    <div className="book-form-modal">
      <div className="book-form-container">
        <h2>{bookToEdit ? 'Edit Book' : 'Add New Book'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              className={errors.author ? 'error' : ''}
            />
            {errors.author && <span className="error-message">{errors.author}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={book.status}
              onChange={handleChange}
            >
              <option value="owned">Owned</option>
              <option value="reading">Currently Reading</option>
              <option value="wishlist">Wishlist</option>
            </select>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {bookToEdit ? 'Update' : 'Add'} Book
            </button>
            <button 
              type="button" 
              onClick={onClose}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

BookForm.propTypes = {
  bookToEdit: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.oneOf(['owned', 'reading', 'wishlist'])
  }),
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default BookForm;