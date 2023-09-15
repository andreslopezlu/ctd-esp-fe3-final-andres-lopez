import { createContext, useEffect, useReducer, useState } from "react";

export const DentistContext = createContext();

// function getDataDentistReducer(state, action){

// }  

// const initialState = {}

export default function DentistProvider({children}){
    
    const [data, setData] = useState([])

    const getData = async () => {
        const data = await
        fetch('https://jsonplaceholder.typicode.com/users')
        const dataConverted = await data.json();
        setData(dataConverted)
    }
    
    // const [state, dispatch] = useReducer(getDataDentistReducer, initialState, init)

    return(
        <DentistContext.Provider value={{data, setData, getData}}>
            {children}
        </DentistContext.Provider>
    )
}
