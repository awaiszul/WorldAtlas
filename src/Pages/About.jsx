import React from 'react';
import countries from "../API/Data.json";
import "./About.css";

export const About = ()=>{
    return(
        <section className="cards-container">
      {countries.map((country) => (
        <div className="country-card" key={country.name}>
          {/* <img src={country.flag} alt={`${country.name} flag`} className="flag" /> */}
          <h2>{country.name}</h2>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p className="desc">{country.description}</p>
        </div>
      ))}
    </section>
    )
}