import React from "react";

import { useState, useMemo } from "react";


const Card = ({ id, name, username, email, dentists }) => {

  let [favorite, setFavorite] = useState(false);
  

  // const params = useMemo(() => (JSON.parse(localStorage.getItem('favs'))), []);

  function handleClick(id) {

    let localData = JSON.parse(localStorage.getItem('favs'))

    if(favorite===false){
      setFavorite(true)
      let newTrueFavorites = [...localData]
      newTrueFavorites.push(dentists[id-1]) 
      localStorage.setItem('favs', JSON.stringify(newTrueFavorites)) 
      return;
    } 
    
    if (favorite===true){
      setFavorite(false)
      let newFalseFavorites = [...localData]
      const dentistIndex = newFalseFavorites.findIndex(
        (dentist) => dentist.id === id
      );
      newFalseFavorites.splice(dentistIndex, 1)
      localStorage.setItem('favs', JSON.stringify(newFalseFavorites))
      return;
    }
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src='' alt='dentist'/>
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        <button onClick={()=>handleClick(id)} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
