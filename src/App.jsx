import "./App.css";
import LocationInfo from "./components/LocationInfo";
import MainContent from "./components/MainContent";
import ResidentCard from "./components/ResidentCard";
import useFetch from "./hooks/useFetch";
import getRandonLocation from "./utils/getRandonLocation";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState(getRandonLocation());
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 5000}`;
  const [location, hasError] = useFetch(url);
  const inputLocation = useRef();
  console.log(inputValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(inputLocation.current.value);
    event.target.reset(); // resetear el formulario
  };
  return (
    <div className="app">
      <div className="app__banner">
       
        <section className="container__header">
          {/* <img className="img1" src="/img/portalcompleto.png" alt="" /> */}
          
          <img className="img1" src="/public/img/portal bajado entero con texto.png" alt="" />
          <img className="img2" src="/img/Ellipse.png" alt="" />
          {/* <img className="img3" src="/img/logo.png" alt="" /> */}
        </section>
       
        <form className="app__form" onSubmit={handleSubmit}>
          <div className="input-button">
            <input
              className="app__input"
              ref={inputLocation}
              type="text"
              placeholder="Intro location from 1 to 126"
            />
            <button className="app__btn">Search</button>
          </div>
        </form>
      
      </div>

      {hasError ? (
        <h2 className="app__error">
          ❌❌ hey !!! You must provide a Id from 1 to 126 - 🐔Face of Chicken
          🐔❌❌{" "}
        </h2>
      ) : (
        <MainContent location={location} />
      )}
    </div>
  );
};

export default App;
