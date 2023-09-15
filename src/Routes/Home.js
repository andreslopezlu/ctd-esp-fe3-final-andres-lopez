import React, { useContext, useEffect } from 'react'
import Card from '../Components/Card'
import { DentistContext } from '../context/DentistApiContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  let dentistsData = useContext(DentistContext);

  let dentists = dentistsData.data;

  useEffect(() => {
    dentistsData.getData();
  }, [dentistsData]);

  let dentistsList = dentists.map((person)=>{
    return(
      <li key={person.id}> {person.id} -- {person.name} -- {person.usename} -- {person.email} </li>
    )
  })

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <ul>
          {dentists.length === 0 ? null : dentistsList}
        </ul>
      </div>
    </main>
  )
}

export default Home