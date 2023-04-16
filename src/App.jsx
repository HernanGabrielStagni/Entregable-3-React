
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import useFetch from './hooks/useFetch'
import getRandonLocation from './utils/getRandonLocation'
import {useRef} from 'react'
const App = () => {

const get= getRandonLocation()
const url=`https://rickandmortyapi.com/api/location/${get}`
const location=useFetch(url)
// console.log(location) 

const handleSubmit=(event)=>{
  event.preventDefault()
  // console.log(event.preventDefault.current.value)
}
const inputLocation=useRef()

  return (
    <div className="App">
        <h1>Rick and Morty</h1>

        <form onSubmit={handleSubmit}>
            <input  type="text" />
            <button>Search</button>
          </form>

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
    </div>
  )
}

export default App
