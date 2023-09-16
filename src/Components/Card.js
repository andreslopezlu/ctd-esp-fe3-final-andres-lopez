import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

const Card = ({ id, name, username, email, dentists, style}) => {

  let [favorite, setFavorite] = useState(false);

  let favoritesData = useContext(FavoritesContext);

  let localData = favoritesData.favorites;

  let updateFavorites = favoritesData.update;

  function handleClick(id) {

    let copyLocalData = [...localData]

    const dentistIndex = localData.findIndex(
      (dentist) => dentist.id === id
    );

    if(favorite===false){
      
      setFavorite(true)
      copyLocalData.push(dentists[id-1]) 
      updateFavorites(copyLocalData) 
      return;
    } 
    
    if (favorite===true){
      setFavorite(false)
      copyLocalData.splice(dentistIndex, 1)
      updateFavorites(copyLocalData) 
      return;
    }
  }

  return (
    <div className="card">
        <img src='../../public/images/doctor.jpg' alt='dentist'/>
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        <button onClick={()=>handleClick(id)} className="favButton" style={style}>Add fav</button>
        <Link to={`${id}`}>
          <p style={style}>Ver detalle</p>
        </Link>
    </div>
  );
};

export default Card;
