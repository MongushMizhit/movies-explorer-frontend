import React from 'react'
import aboutMeImage from '../../images/about-me-image.svg'

const AboutMe = () => {
    return (
        <section className='about__me' id="student">
        <h2 className='about__me-title'>Студент</h2>
        <div className='about__me-flex'>
            <div className='about__me-info'>
                <h3 className='about__me-name'>Виталий</h3>
                <h4 className='about__me-work'>Фронтенд-разработчик, 30 лет</h4>
                <p className='about__me-description'>
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
                <a href='https://github.com/MongushMizhit' className='about__me-link'>Github</a>
            </div>
            <img className="about__me-image" src={aboutMeImage} alt="Фото"/>
        </div>
      </section>
    );
  };

export default AboutMe;