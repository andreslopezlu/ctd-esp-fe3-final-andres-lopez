import React, { useState } from "react";
import Card from "../Components/Card";

const Favs = () => {

  const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem('favs')))

  let dentistsList = localData.map((person)=>{
    return(
      <Card 
        key={person.id} 
        id={person.id} 
        name={person.name} 
        username={person.username} 
        email={person.email} 
        style={{display:'none'
      }}/>
    )
  })

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {localData.length === 0 ? null : dentistsList}
      </div>
    </>
  );
};

export default Favs;
