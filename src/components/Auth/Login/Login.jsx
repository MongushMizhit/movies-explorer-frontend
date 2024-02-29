import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику отправки данных на сервер для входа
        console.log('Form data:', formData);
      };

      return (
        <div className="page">
          <section className='authorization'>
          <form className="authorization__form" onSubmit={handleSubmit}>
            <div className="authorization__header">
            <img className="logo" src={logo} alt="Лого"/> 
            <h1 className="authorization__title">Рады видеть!</h1>
              </div>
            <label className="authorization__label">
              <h2 className="authorization__input_title">E-mail</h2>
              <input className='authorization__input'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <h2 className="authorization__input_title">Пароль</h2>
              <input className='authorization__input'
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="button button__login">
              Войти
            </button>
            <p className="authorization__login">
            Еще не зарегистрированы? <Link to="/signup" className="authorization__login-link">Регистрация</Link>
          </p>
          </form>
          </section>
        </div>
      );
}

export default Login;