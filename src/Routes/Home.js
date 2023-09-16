import React, { useContext, useEffect } from 'react'
import Card from '../Components/Card'
import { DentistContext } from '../context/DentistApiContext'

const Home = () => {

  let dentistsData = useContext(DentistContext);

  let dentists = dentistsData.data;

  useEffect(() => {
    dentistsData.getData();
  }, [dentistsData]);

  let dentistsList = dentists.map((person)=>{
    return(
      <Card key={person.id} id={person.id} name={person.name} username={person.username} email={person.email} dentists={dentists} />
    )
  })

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        <div>
          {dentists.length === 0 ? null : dentistsList}
        </div>
      </div>
    </main>
  )
}

export default Home