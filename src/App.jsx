
import './App.css'
import LocationInfo from './components/LocationInfo'
import MainContent from './components/MainContent'
import ResidentCard from './components/ResidentCard'
import useFetch from './hooks/useFetch'
import getRandonLocation from './utils/getRandonLocation'
import {useRef} from 'react'
import { useState } from 'react'

const App = () => {

const [inputValue, setInputValue] = useState(getRandonLocation())
const url=`https://rickandmortyapi.com/api/location/${inputValue}`
const [location,hasError]=useFetch(url)
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
      {
       hasError
       ? <h2>❌❌ hey !!! You must provide a Id from 1 to 126 - 🐔Face of Chicken 🐔❌❌ </h2>
       : <MainContent location={location}/>
      }
    </div>
  )
}

export default App
