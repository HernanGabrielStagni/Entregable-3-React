import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'





const ResidentCard = ({ url }) => {
 const [resident]=useFetch(url) //guardo en resident lo que me traiga la peticion y lo destructuro porque ahora me llega un arreglo, pero necesito solo este dato
//  console.log(resident)
 
 return (
   <article>
    <header>
        <img src={resident?.image} alt="" />
        <div>
           <div className='circle'> </div>
           <span>{resident?.status}</span>
        </div>
      
        
    </header>
    <section>
            <h3>{resident?.name}</h3>
            <hr /> {/* linea horizontal rule */}

 
               <ul>
                <li><span>Specie </span>{resident?.species}</li>
                <li><span>Origin</span><span>{resident?.origin.name}</span></li>
                <li><span>Eppisodes where appear</span>{resident?.episode.length}</li>
               </ul>  
    </section>

   </article>
    )
}

export default ResidentCard