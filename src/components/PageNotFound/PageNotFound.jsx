import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='page'>
      <section className="not-found">
        <div className='not-found-container'>
          <h1 className="not-found__header">404</h1>
          <h2 className="not-found__title">Страница не найдена</h2>
          <button className="button button_type_to-main" onClick={goBack}>Назад</button>
        </div>
      </section>
    </div>
  );
}

export default PageNotFound;