import React, { useState } from 'react';

const MoviesCard = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Переключение состояния лайка
    // Здесь добавить логику отправки запроса на сервер для сохранения или удаления фильма
  };

  return (
    <section className="movie">
        <a 
          href={ movie.trailerLink }
          className='movie__trailer-link'
          target={"_blank"}
          rel="noreferrer"
          >
            <img
              className="movie__image"
              src={`https://api.nomoreparties.co${movie.image.url}`}
              alt={movie.nameRU}
            />
          </a>
      <div className="movie__container">
        <div className="movie__info-container">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__lengh">{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</p>
        </div>
        <button className={`movie__like-btn ${isLiked ? 'movie__like-btn-active' : ''}`} type="button" onClick={handleLikeClick}></button>
      </div>
    </section>
  );
};

export default MoviesCard;

