import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <form className="search-form">
      <label className="search-form__container">
        <input
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          required
        />
        <button type="submit" className="search-form__submit-button"></button>
      </label>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
