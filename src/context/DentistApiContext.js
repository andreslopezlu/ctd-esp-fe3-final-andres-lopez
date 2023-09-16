import { createContext, useState } from "react";

export const DentistContext = createContext();

export default function DentistProvider({children}){
    
    const [data, setData] = useState([])

    const getData = async () => {
        const data = await
        fetch('https://jsonplaceholder.typicode.com/users')
        const dataConverted = await data.json();
        setData(dataConverted)
    }

    return(
        <DentistContext.Provider value={{data, setData, getData}}>
            {children}
        </DentistContext.Provider>
    )
}
