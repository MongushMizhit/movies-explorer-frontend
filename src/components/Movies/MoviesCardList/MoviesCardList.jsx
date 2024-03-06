import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { searchMovies } from '../../utils/MoviesApi';

const MoviesCardList = ({ searchQuery }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return; // Если нет поискового запроса, ничего не делаем
    }

    setLoading(true); // Установить флаг загрузки

    // Загрузка данных при изменении поискового запроса
    searchMovies(searchQuery)
      .then(data => {
        setSearchedMovies(data);
        setLoading(false); // Убрать флаг загрузки
      })
      .catch(error => {
        console.log('Ошибка при загрузке фильмов:', error);
        setLoading(false); // Убрать флаг загрузки в случае ошибки
      });
  }, [searchQuery]);

  return (
    <section className="movies">
      {loading && <p>Loading...</p>} {/* Показывать загрузку, пока идет запрос */}
      {!loading && searchedMovies.map(movie => (
        <MoviesCard key={movie._id} movie={movie} />
      ))}
    </section>
  );
};

export default MoviesCardList;

