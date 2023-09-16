import React, { useContext, useEffect, useState, useMemo } from 'react'
import Card from '../Components/Card'
import { DentistContext } from '../context/DentistApiContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  let dentistsData = useContext(DentistContext);

  let dentists = dentistsData.data;

  useEffect(() => {
    dentistsData.getData();
  }, [dentistsData]);

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem('favs'))
  // },[]);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify([]))
  }, []);

  let dentistsList = dentists.map((person)=>{
    return(
      <Card key={person.id} id={person.id} name={person.name} username={person.username} email={person.email} dentists={dentists} />
    )
  })

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <div>
          {dentists.length === 0 ? null : dentistsList}
        </div>
      </div>
    </main>
  )
}

export default Home