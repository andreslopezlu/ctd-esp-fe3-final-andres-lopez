import React, { useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem('favs')))

  let dentistsList = localData.map((person)=>{
    return(
      <Card key={person.id} id={person.id} name={person.name} username={person.username} email={person.email} />
    )
  })

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {localData.length === 0 ? null : dentistsList}
      </div>
    </>
  );
};

export default Favs;
