import React from "react";
import "./styles/locationInfo.css";
const LocationInfo = ({ location }) => {
  //recibo y destructuro la props
  return (
    <article className="location">
      <h2 className="location__name">{location?.name}</h2>

      <ul className="location__list">
        <li className="location__item">
          <span className="location__label">Type</span>
          {location?.type}
        </li>
        <li className="location__item">
          <span className="location__label">Dimention</span>
          {location?.dimension}
        </li>
        <li className="location__item">
          <span className="location__label">Population</span>
          {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
