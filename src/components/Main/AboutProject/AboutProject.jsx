import React from 'react'

const AboutProject = () => {
    return (
        <section className='about__project' id="project">
        <h2 className='about__title'>О проекте</h2>
            <div className='about__diploma'>
                <div className='about__steps'>
                    <h3 className='about__description-title'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='about__description'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='about__work'>
                    <h3 className='about__description-title'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='about__description'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
            </div>
        </div>
        <div className='about__graphic'>
                <div className='about__backend'>
                    <h3 className='about__backend-title'>
                        1 неделя
                    </h3>
                    <p className='about__graphic-description'>
                        Back-end
                    </p>
                </div>
                <div className='about__frontend'>
                    <h3 className='about__frontend-title'>
                        4 недели
                    </h3>
                    <p className='about__graphic-description'>
                        Front-end
                    </p>
            </div>
        </div>
      </section>
    )
}

export default AboutProject;