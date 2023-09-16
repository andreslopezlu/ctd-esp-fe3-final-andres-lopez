import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';

import App from './App.js'
import Home from './Routes/Home.js'
import Contact from './Routes/Contact.js'
import Favs from './Routes/Favs.js'
import Detail from './Routes/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='favs' element={<Favs />} />
          <Route path='home/:id' element={<Detail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


