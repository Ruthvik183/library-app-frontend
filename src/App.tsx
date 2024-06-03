import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </div>
  );
}

export default App;
