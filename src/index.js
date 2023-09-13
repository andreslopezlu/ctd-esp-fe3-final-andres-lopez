import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.js'
import Home from './Routes/Home.js'
import Contact from './Routes/Contact.js'
import Favs from './Routes/Favs.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='favs' element={<Favs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


