import React, { useState } from 'react';
import filmOne from '../../images/movie-images-1.png';
import filmTwo from '../../images/movie-images-2.png';
import filmThree from '../../images/movie-images-3.png';

const MoviesCard = () => {
  // Создаем состояния для каждой карточки
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);

  // Обработчики для каждой карточки
  const handleMouseEnterOne = () => {
    setIsHoveredOne(true);
  };

  const handleMouseLeaveOne = () => {
    setIsHoveredOne(false);
  };

  const handleMouseEnterTwo = () => {
    setIsHoveredTwo(true);
  };

  const handleMouseLeaveTwo = () => {
    setIsHoveredTwo(false);
  };

  const handleMouseEnterThree = () => {
    setIsHoveredThree(true);
  };

  const handleMouseLeaveThree = () => {
    setIsHoveredThree(false);
  };
  
  return (
    <section className='movies movies__saved'>
      <article className="movie movie__saved" 
      onMouseEnter={handleMouseEnterOne}
      onMouseLeave={handleMouseLeaveOne}
      >
    <img
      className="movie__image"
      src={filmOne}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">33 слова о дизайне</h2>
            <p className='movie__lengh'>1ч 47м</p>
        </div>
        {isHoveredOne && (
          <button className="movie__delete-btn" type="button"></button>
        )}
    </div>
  </article>
  <article className="movie movie__saved" 
      onMouseEnter={handleMouseEnterTwo}
      onMouseLeave={handleMouseLeaveTwo}
      >
    <img
      className="movie__image"
      src={filmTwo}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">Киноальманах «100 лет дизайна»</h2>
            <p className='movie__lengh'>1ч 3м</p>
        </div>
        {isHoveredTwo && (
          <button className="movie__delete-btn" type="button"></button>
        )}
    </div>
  </article>
  <article className="movie movie__saved" 
      onMouseEnter={handleMouseEnterThree}
      onMouseLeave={handleMouseLeaveThree}
      >
    <img
      className="movie__image"
      src={filmThree}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">В погоне за Бенкси</h2>
            <p className='movie__lengh'>1ч 42м</p>
        </div>
        {isHoveredThree && (
          <button className="movie__delete-btn" type="button"></button>
        )}
    </div>
  </article>
    </section>
  );
};

export default MoviesCard;
