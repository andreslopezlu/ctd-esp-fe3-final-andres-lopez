import { createContext, useState } from "react";

import { useParams } from "react-router-dom";

export const DetailContext = createContext();

export default function DetailProvider({children}){

    const params = useParams();
    
    const [data, setData] = useState([])

    const getData = async () => {
        const data = await
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        const dataConverted = await data.json();
        setData(dataConverted)
    }

    return(
        <DetailContext.Provider value={{data, setData, getData}}>
            {children}
        </DetailContext.Provider>
    )
}
