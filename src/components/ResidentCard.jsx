import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import './styles/recidentCard.css';

const ResidentCard = ({ url }) => {
  const [resident] = useFetch(url); //guardo en resident lo que me traiga la peticion y lo destructuro porque ahora me llega un arreglo, pero necesito solo este dato
  //  console.log(resident)

  return (
    <article className="resident">
      <header className="resident__header">
        <img className="resident__avatar" src={resident?.image} alt="" />
        <div className="resident_status">
          <div className={`resident__status-circle ${resident?.status}`}></div>
          <span className="resident__status-label">{resident?.status}</span>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{resident?.name}</h3>
        <hr className="hr" /> {/* linea horizontal rule */}
        <ul className="resident__list">
          <li className="resident__item">
            <span className="resident__label">Specie </span>
            <span className="resident__value">{resident?.species}</span>
            
          </li>
          <li className="resident__item">
            <span className="resident__label">Origin</span>
            <span className="resident__value">{resident?.origin.name}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Times appear</span>
            <span className="resident__value">{resident?.episode.length} time</span>
            
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
