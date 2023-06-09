
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
const url=`https://rickandmortyapi.com/api/location/${inputValue || 5000}`
const [location,hasError]=useFetch(url)
const inputLocation=useRef()
console.log(inputValue)


const handleSubmit=(event)=>{
  event.preventDefault()
  setInputValue(inputLocation.current.value)
  event.target.reset(); // resetear el formulario
}
  return (
    <div className="app">
        <h1 className='app__title'>Rick and Morty</h1>
        <div className='app__banner'>
          <img src="./img/Rick and Morty.png" alt="" />
        </div>

        <form className='app__form' onSubmit={handleSubmit}>
            <input className='app__input' ref={inputLocation} type="text" placeholder="Intro location from 1 to 126" />
            <button className='app__btn'>Search</button>
        </form>
      {
       hasError
       ? <h2 className='app__error'>❌❌ hey !!! You must provide a Id from 1 to 126 - 🐔Face of Chicken 🐔❌❌ </h2>
       : <MainContent location={location}/>
      }
    </div>
  )
}

export default App
