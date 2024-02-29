import React from 'react'

const Techs = () => {
    return (
        <section className='techs' id="technologies">
        <h2 className='techs__title'>Технологии</h2>
        <div className='techs__seven'>
            <h3 className='techs__seven-title'>
                7 технологий
            </h3>
            <p className='techs__description'>
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
        </div>
        <div className='techs__names'>
            <p className='techs__name'>HTML</p>
            <p className='techs__name'>CSS</p>
            <p className='techs__name'>JS</p>
            <p className='techs__name'>React</p>
            <p className='techs__name'>Git</p>
            <p className='techs__name'>Express.js</p>
            <p className='techs__name'>MongoDB</p>
        </div>
      </section>
    );
  };

export default Techs