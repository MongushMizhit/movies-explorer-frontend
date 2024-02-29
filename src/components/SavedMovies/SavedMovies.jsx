import React from 'react'

import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const SavedMovies = () => {
    return (
     <div className="page">   
      <header>
        <Header />
      </header>
      <main>
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </main>
     </div>
    );
};


export default SavedMovies