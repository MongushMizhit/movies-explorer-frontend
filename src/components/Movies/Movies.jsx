import React from 'react'

import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = () => {
    return (
     <div className="page">   
      <header>
        <Header />
      </header>
      <main>
        <SearchForm />
        <MoviesCardList />
        <div className='movies__more-container'>
          <button className='movies__more'>Еще</button>
        </div>
        <Footer />
      </main>
     </div>
    );
};


export default Movies