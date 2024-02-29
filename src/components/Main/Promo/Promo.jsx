import React from 'react';
import promoLogo from '../../images/promo-logo.png'


function Promo() {
  return (
      <section className='promo'>
        <img className="promo__logo" src={promoLogo} alt="Лого"/>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      </section>
  )
}

export default Promo;
