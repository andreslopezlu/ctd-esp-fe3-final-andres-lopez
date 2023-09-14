import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import {ThemeContext} from '../context/ThemeContext.js'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

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
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to='/home' >Home</Link>
      <Link to='/contact' >Contact</Link>
      <Link to='/favs' >Favs</Link>
      <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>Change theme</button>
    </nav>
  )
}
