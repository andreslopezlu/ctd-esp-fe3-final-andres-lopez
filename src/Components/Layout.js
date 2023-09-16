import React, {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext.js'

export default function Layout({children}) {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`main-container ${darkMode ? "bg-dark" : "bg-light"}`}>
      {children}
    </div>
  )
}