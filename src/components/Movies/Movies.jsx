import React, { useState } from 'react';
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = () => {
    const [allMoviesLoaded, setAllMoviesLoaded] = useState(false);
    const [visibleMoviesCount, setVisibleMoviesCount] = useState(3); // Начальное количество отображаемых карточек
    const [isSearching, setIsSearching] = useState(false); // Состояние для отслеживания поиска фильмов

    const handleLoadMoreClick = () => {
        setVisibleMoviesCount(prevCount => prevCount + calculateAdditionalMoviesCount());
    };

    const calculateAdditionalMoviesCount = () => {
        // Логика для рассчета количества дополнительных карточек для подгрузки
        // Например, в зависимости от указанных в задании условий
        if (window.innerWidth >= 1280 || window.innerWidth >= 768) {
            return 3;
        } else if (window.innerWidth >= 320 && window.innerWidth <= 480) {
            return 1;
        }
    };

    // Функция для установки состояния поиска
    const handleSearch = () => {
        setIsSearching(true);
    };

    return (
        <div className="page">
            <header>
                <Header />
            </header>
            <main>
                <SearchForm onSearch={handleSearch} /> {/* Передача функции для установки состояния поиска */}
                <MoviesCardList onAllMoviesLoaded={() => setAllMoviesLoaded(true)} visibleMoviesCount={visibleMoviesCount} />
                {/* Условный рендеринг кнопки "Еще" */}
                {isSearching && !allMoviesLoaded && (
                    <div className='movies__more-container'>
                        <button className='movies__more' onClick={handleLoadMoreClick}>Еще</button>
                    </div>
                )}
                <Footer />
            </main>
        </div>
    );
};

export default Movies;
