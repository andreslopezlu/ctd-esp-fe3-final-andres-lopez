import React, { useEffect, useContext } from 'react'
import { DetailContext } from '../context/DetailContext';
import Card from '../Components/Card';

const Detail = () => {

  let detailData = useContext(DetailContext);

  let detail = detailData.data;

  useEffect(() => {
    detailData.getData();
  });

  return (
    <>
      <h1>Detail Dentist id </h1>
      {<Card 
        key={detail.id} 
        id={detail.id} 
        name={detail.name} 
        username={detail.username} 
        email={detail.email} 
        style={{display:'none'
      }}/>}
    </>
  )
}

export default Detail