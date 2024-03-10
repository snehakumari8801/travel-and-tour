import React from 'react'
import Card from './Card';
import './Tours.css'

      
      function Tours({ tours , deletehandler,refresh }) {
  return (
    <div className='tours'>
      {
        tours.map((tour) => <Card {...tour} deletehandler={deletehandler} key={tour.id}/>)
      }
    </div>
  )
}

export default Tours
