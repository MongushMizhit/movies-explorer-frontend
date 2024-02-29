import React from 'react';
import filmOne from '../../images/movie-images-1.png'
import filmTwo from '../../images/movie-images-2.png'
import filmThree from '../../images/movie-images-3.png'
import filmFour from '../../images/movie-images-4.png'
import filmFive from '../../images/movie-images-5.png'
import filmSix from '../../images/movie-images-6.png'
import filmSeven from '../../images/movie-images-7.png'
import filmEith from '../../images/movie-images-8.png'
import filmNine from '../../images/movie-images-9.png'
import filmTen from '../../images/movie-images-10.png'
import filmEleven from '../../images/movie-images-11.png'
import filmTwelve from '../../images/movie-images-12.png'

const MoviesCard = () => {
  
  return (
    <section className='movies'>
      <article className="movie">
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
        <button className="movie__like-btn movie__like-btn-active" type="button" ></button>
    </div>
  </article>
  <article className="movie">
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
        <button className="movie__like-btn" type="button" ></button>
    </div>
  </article>
  <article className="movie">
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
        <button className="movie__like-btn" type="button" ></button>
    </div>
  </article>
  <article className="movie">
    <img
      className="movie__image"
      src={filmFour}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">Баския: Взрыв реальности</h2>
            <p className='movie__lengh'>1ч 21м</p>
        </div>
        <button className="movie__like-btn" type="button" ></button>
    </div>
  </article>
  <article className="movie">
    <img
      className="movie__image"
      src={filmFive}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">Бег это свобода</h2>
            <p className='movie__lengh'>1ч 44м</p>
        </div>
        <button className="movie__like-btn" type="button" ></button>
    </div>
  </article>
  <article className="movie">
    <img
      className="movie__image"
      src={filmSix}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">Книготорговцы</h2>
            <p className='movie__lengh'>1ч 37м</p>
        </div>
        <button className="movie__like-btn movie__like-btn-active" type="button" ></button>
    </div>
  </article>
  <article className="movie">
    <img
      className="movie__image"
      src={filmSeven}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">Когда я думаю о Германии ночью</h2>
            <p className='movie__lengh'>1ч 56м</p>
        </div>
        <button className="movie__like-btn" type="button" ></button>
    </div>
  </article>
  <article className="movie">
    <img
      className="movie__image"
      src={filmEith}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">Gimme Danger: История Игги и The Stooge...</h2>
            <p className='movie__lengh'>1ч 59м</p>
        </div>
        <button className="movie__like-btn" type="button" ></button>
    </div>
  </article>
  <article className="movie">
    <img
      className="movie__image"
      src={filmNine}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">Дженис: Маленькая девочка грустит</h2>
            <p className='movie__lengh'>1ч 42м</p>
        </div>
        <button className="movie__like-btn movie__like-btn-active" type="button" ></button>
    </div>
  </article>
  <article className="movie">
    <img
      className="movie__image"
      src={filmTen}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">Соберись перед прыжком</h2>
            <p className='movie__lengh'>1ч 10м</p>
        </div>
        <button className="movie__like-btn movie__like-btn-active" type="button" ></button>
    </div>
  </article>
  <article className="movie">
    <img
      className="movie__image"
      src={filmEleven}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">Пи Джей Харви: A dog called money</h2>
            <p className='movie__lengh'>1ч 4м</p>
        </div>
        <button className="movie__like-btn" type="button" ></button>
    </div>
  </article>
  <article className="movie">
    <img
      className="movie__image"
      src={filmTwelve}
      alt='Изображение'
    />
    <div className='movie__container'>
        <div className="movie__info-container">
            <h2 className="movie__title">По волнам: Искусство звука в кино</h2>
            <p className='movie__lengh'>1ч 7м</p>
        </div>
        <button className="movie__like-btn" type="button" ></button>
    </div>
  </article>
    </section>
  );
};

export default MoviesCard;