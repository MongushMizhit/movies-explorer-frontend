import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input
          type="text"
          className="search-form__input"
          placeholder="Фильм"
        />
        <button type="submit" className="search-form__submit-button"></button>
      </div>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
