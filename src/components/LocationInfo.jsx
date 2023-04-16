import React from 'react'

const LocationInfo = ({location}) => { //recibo y destructuro la props
  return (
   <article>
      <h2>{location?.name}</h2>

      <ul>
        <li><span>Type</span>{location?.type}</li>
        <li><span>Dimention</span>{location?.dimension}</li>
        <li><span>Population</span>{location?.residents.length}</li>
      </ul>
   </article>
  )
}

export default LocationInfo