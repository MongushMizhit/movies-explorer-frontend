import React, { useState } from 'react';
import logo from '../../images/logo-header.svg';
import accountIcon from '../../images/account-icon.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({ color }) {
  const headerClass = `header ${color ? `header--${color}` : ''}`;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={headerClass}>
      <div className="header__tabs">
        <Link to="/" className='header__link'><img className="logo logo__header" src={logo} alt="Лого"/></Link>
        {!isMenuOpen && (
          <div className='header__tabs-links'>
            <Link
              to="/movies"
              className={`header__tabs-link ${
                location.pathname === '/movies' ? 'header__tabs-link-active' : ''
              }`}
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={`header__tabs-link ${
                location.pathname === '/saved-movies' ? 'header__tabs-link-active' : ''
              }`}
            >
              Сохранённые фильмы
            </Link>
          </div>
        )}
      </div>
      <button className="header__menu-toggle" onClick={handleMenuToggle}></button>
        <div className={`header__menu ${isMenuOpen ? 'show' : ''}`}>
        <button className="header__menu-close-btn" onClick={handleMenuToggle}></button>
          <div className='header__menu-links'>
            <Link to="/" className={`header__tabs-link ${location.pathname === '/' ? 'header__tabs-link-active' : ''}`}>Главная</Link>
            <Link to="/movies" className={`header__tabs-link ${location.pathname === '/movies' ? 'header__tabs-link-active' : ''}`}>Фильмы</Link>
            <Link to="/saved-movies" className={`header__tabs-link ${location.pathname === '/saved-movies' ? 'header__tabs-link-active' : ''}`}>Сохранённые фильмы</Link>
          </div>
          <div className="header__account header__account-menu">
            <p className='header__account-title'>Аккаунт</p>
            <div className='header__account-icon-container'>
              <img className="header__account-icon" src={accountIcon} alt="Иконка"/>
            </div>
          </div>
        </div>
        <div className="header__account">
        {!isMenuOpen && (
          <>
            <p className='header__account-title'>Аккаунт</p>
            <div className="header__account-icon-container">
              <img className="header__account-icon" src={accountIcon} alt="Иконка" />
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

   