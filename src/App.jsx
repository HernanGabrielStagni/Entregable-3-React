
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import useFetch from './hooks/useFetch'
import getRandonLocation from './utils/getRandonLocation'
import {useRef} from 'react'
import { useState } from 'react'

const App = () => {

const [inputValue, setInputValue] = useState(getRandonLocation())
const url=`https://rickandmortyapi.com/api/location/${inputValue}`
const location=useFetch(url)
const inputLocation=useRef()
console.log(inputValue)


const handleSubmit=(event)=>{
  event.preventDefault()
  setInputValue(inputLocation.current.value)
}
  return (
    <div className="App">
        <h1>Rick and Morty</h1>

        <form onSubmit={handleSubmit}>
            <input ref={inputLocation} type="text" />
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
