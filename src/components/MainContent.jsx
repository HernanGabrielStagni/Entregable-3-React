import React from 'react'
import LocationInfo from './LocationInfo'
import ResidentCard from './ResidentCard'


const MainContent = ({ location }) => { 
  return (
    <>
     <LocationInfo location={location} /> 
        {/* Pinto de manera dinamica la info de cada url */}
        {/* Va a ir url por url y llamara a la funtion que las pinta */}
        <div>
          { location?.residents.map(url=>( /*en url se vuwelca cada elemento iterado*/
            <ResidentCard
            key={url}
            url={url} 
            />
          ))

          }


        </div>
    </>
  )
}

export default MainContent