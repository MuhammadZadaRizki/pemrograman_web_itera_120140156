import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import './index.css';

const App = () => {
  return (
    <BookProvider>
      <Router>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/stats" className="nav-link">Statistics</Link>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </Router>
    </BookProvider>
  );
};

export default App;