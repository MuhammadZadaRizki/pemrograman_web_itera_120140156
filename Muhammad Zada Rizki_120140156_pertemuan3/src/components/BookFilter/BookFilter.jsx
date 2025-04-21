import React from 'react';
import PropTypes from 'prop-types';
import './BookFilter.css';

const BookFilter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="book-filter">
      <label htmlFor="status-filter">Filter by Status: </label>
      <select 
        id="status-filter"
        value={filter} 
        onChange={handleChange}
        className="filter-select"
      >
        <option value="all">All Books</option>
        <option value="owned">Owned</option>
        <option value="reading">Currently Reading</option>
        <option value="wishlist">Wishlist</option>
      </select>
    </div>
  );
};

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default BookFilter;