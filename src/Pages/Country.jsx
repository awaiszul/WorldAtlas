import { useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { getCountryData } from "../API/AxiosApi";
import Loader from "../Components/UI/Loader";
import "./Country.css"
export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const navigate = useNavigate();

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width > 1200) setItemsPerPage(12);
      else if (width > 768) setItemsPerPage(8);
      else setItemsPerPage(4);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
      setFilteredCountries(res.data);
    });
  }, []);

  useEffect(() => {
    let updatedCountries = [...countries];
    if (searchQuery.trim()) {
      updatedCountries = updatedCountries.filter((country) =>
        country.name?.common?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortOrder === "asc") {
      updatedCountries.sort((a, b) => a.population - b.population);
    } else if (sortOrder === "desc") {
      updatedCountries.sort((a, b) => b.population - a.population);
    }
    setFilteredCountries(updatedCountries);
    setCurrentPage(1);
  }, [searchQuery, sortOrder, countries]);

  if (isPending) return <Loader />;

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by country name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="sort-dropdown"
        >
          <option value="">Sort by population</option>
          <option value="asc">Population: Low to High</option>
          <option value="desc">Population: High to Low</option>
        </select>
      </div>

      <section className="cards-container">
        {currentCountries.map((country, index) => (
          <div className="country-card" key={index}>
            <img
              src={country.flags?.png}
              alt={`${country.name?.common} flag`}
              className="flag"
            />
            <h2>{country.name?.common}</h2>
            <p><strong>Capital:</strong> {country.capital?.[0]}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
            <button
              className="read-more-btn"
              onClick={() => navigate(`/country/${country.name.common}`, { state: country })}
            >
              Read More →
            </button>
          </div>
        ))}
      </section>

      <div className="pagination">
        <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>⬅️ Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages}>Next ➡️</button>
      </div>
    </>
  );
};
