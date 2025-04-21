import React from 'react';
import { useBookStats } from '../../hooks/useBookStats';
import './Stats.css';

const Stats = () => {
  const stats = useBookStats();

  return (
    <div className="stats-container">
      <h1>Book Statistics</h1>
      <div className="stats-grid">
        <div className="stat-card total-books">
          <h3>Total Books</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card owned-books">
          <h3>Owned</h3>
          <p>{stats.owned}</p>
        </div>
        <div className="stat-card reading-books">
          <h3>Reading</h3>
          <p>{stats.reading}</p>
        </div>
        <div className="stat-card wishlist-books">
          <h3>Wishlist</h3>
          <p>{stats.wishlist}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;