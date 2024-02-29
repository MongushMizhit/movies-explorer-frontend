import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Auth/Profile/Profile';
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
