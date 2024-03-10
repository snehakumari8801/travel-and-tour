import React from 'react'
import './Card.css'

function Card({id , name ,image ,info , price, deletehandler,refresh}) {
  return (
    <div className='card'>
    <div>
      <img src={image} alt='' id='image'></img>
      </div>

      <div className='info'>
      <h2>{name}</h2>
      

      
      <h4>Rs.{price}</h4>
     

      <p>{info}</p>
      

      
      <button onClick={() =>deletehandler(id)}>Delete</button>
      </div>
      
    </div>
  )
}

export default Card
