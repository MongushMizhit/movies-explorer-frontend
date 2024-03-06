import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo-header.svg'

function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки данных на сервер для регистрации
    onRegister('Form data:', formData);
  };

  return (
    <div className="page">
      <section className='authorization'>
      <form className="authorization__form" onSubmit={handleSubmit}>
        <div className="authorization__header">
        <img className="logo" src={logo} alt="Лого"/> 
        <h1 className="authorization__title">Добро пожаловать!</h1>
          </div>
        <label className="authorization__label">
        <h2 className="authorization__input_title">Имя</h2>
          <input className='authorization__input'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            required
          />
          <h2 className="authorization__input_title">E-mail</h2>
          <input className='authorization__input'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />
          <h2 className="authorization__input_title">Пароль</h2>
          <input className='authorization__input'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Пароль"
            required
          />
        </label>
        <button type="submit" className="button__authorization">
          Зарегистрироваться
        </button>
        <p className="authorization__login">
        Уже зарегистрированы? <Link to="/signin" className="authorization__login-link">Войти</Link>
      </p>
      </form>
      </section>
      
    </div>
  );
}

export default Register;
