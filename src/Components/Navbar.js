import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import {ThemeContext} from '../context/ThemeContext.js'

export default function Navbar() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "lightmode" });
    } else {
      theme.dispatch({ type: "darkmode" });
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar-links'>
        <Link to='/home' >Home</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/favs' >Favs</Link>
        <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>Change theme</button>
      </div>
    </nav>
  )
}
