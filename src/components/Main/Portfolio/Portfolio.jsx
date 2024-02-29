import React from 'react'

const Portfolio = () => {
    return (
        <section className='portfolio'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <div className='portfolio__links'>
            <a href='https://github.com/MongushMizhit/how-to-learn' className='portfolio__link'>Статичный сайт<p className='portfolio__link-arrow'>↗</p></a>
            <a href='https://github.com/MongushMizhit/russian-travel' className='portfolio__link'>Адаптивный сайт<p className='portfolio__link-arrow'>↗</p></a>
            <a href='https://github.com/MongushMizhit/mesto-react' className='portfolio__link'>Одностраничное приложение<p className='portfolio__link-arrow'>↗</p></a>
        </div>
      </section>
    );
  };

export default Portfolio;