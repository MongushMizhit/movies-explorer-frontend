// utils/MainApi.js
const BASE_URL = 'http://api.diplomamizhit.nomoredomainswork.ru'; // Замените на URL вашего API

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Добавьте сюда заголовки авторизации, если необходимо
    },
    credentials: 'include',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

// Добавьте здесь другие функции для работы с вашим API
