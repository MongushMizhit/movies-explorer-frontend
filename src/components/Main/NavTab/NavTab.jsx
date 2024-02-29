import React from 'react'

const NavTab = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return (
        <nav className='navTab'>
            <ul className='navTab__links'>
                <li className='navTab__link'><a href="#" className='navTab__link' onClick={() => scrollToSection('project')}>О проекте</a></li>
                <li className='navTab__link'><a href="#" className='navTab__link' onClick={() => scrollToSection('technologies')}>Технологии</a></li>
                <li className='navTab__link'><a href="#" className='navTab__link' onClick={() => scrollToSection('student')}>Студенты</a></li>
            </ul>
        </nav>
    );
  };

export default NavTab