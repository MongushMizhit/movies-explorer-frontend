import React, { useState } from 'react';
import Header from '../../Common/Header/Header'


function Profile({ username }) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки данных на сервер для редактирования профиля
    console.log('Form data:', formData);
  };

  return (
    <div className="page">
      <header>
        <Header />
      </header>
      <form className="profile__form" onSubmit={handleSubmit}>
      <h1 className="profile__title">Привет, Мижит!</h1>
        <label className="profile__label">
          Имя
          <input
            className="profile__label-input"
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="profile__label">
          E-mail
          <input
            className="profile__label-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <div className='profile__button-flex'>
            <button type="submit" className="profile__submit-button">
                Редактировать
            </button>
            <button className="profile__logout-button">
                Выйти из аккаунта
            </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
