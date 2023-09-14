import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialTheme = {
  darkMode: false,
}

function themeReducer(state, action) {
  switch(action.type) {
    case 'lightmode':
      return {darkMode: false};
      break;
    case 'darkmode':
      return {darkMode: true};
      break;
    default:
      return state;
  }
}

export default function ThemeProvider({children}) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme)

  return(
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}
