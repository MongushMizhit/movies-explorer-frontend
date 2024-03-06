import React, { useState } from 'react';
import { searchMovies } from '../../utils/MoviesApi'; 

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const moviesData = await searchMovies(searchQuery); // Выполнить поиск фильмов
      console.log('Результаты поиска:', moviesData);
      // Обработка полученных данных, например, передача их в родительский компонент
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      // Обработка ошибки, например, вывод сообщения об ошибке для пользователя
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-form__container">
        <input
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          value={searchQuery}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="search-form__submit-button"></button>
      </label>
    </form>
  );
};

export default SearchForm;

