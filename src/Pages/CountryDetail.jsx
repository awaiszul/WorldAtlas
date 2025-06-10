import { useLocation, useParams } from "react-router-dom";
import "./DetailCountry.css";

export const CountryDetail = () => {
  const { state: country } = useLocation();
  const { name } = useParams();

  if (!country) return <p>No data found for {name}</p>;

  return (
    <div className="country-detail">
      <h1 className="country-name">{country.name?.common}</h1>

      <div className="detail-container">
        <div className="flag-container">
          <img src={country.flags?.png} alt={`${country.name?.common} flag`} />
        </div>

        <div className="info-container">
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
          <p><strong>Area:</strong> {country.area} km²</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};
