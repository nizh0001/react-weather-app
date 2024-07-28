import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ addLocation, setErrorMessage }) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(ev) {
    setInputValue(ev.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const API_KEY = "da0176596ecf0732e05970957c52e8fe";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`;

    console.log(URL);

    fetch(URL)
      .then((respond) => {
        if (!respond.ok) {
          throw new Error(respond.statusText);
        }
        return respond.json();
      })
      .then((data) => {
        const locationData = {
          id: crypto.randomUUID(),
          lat: data.coord.lat,
          lng: data.coord.lon,
          country: data.sys.country,
          name: data.name,
        };
        console.log(locationData);
        addLocation(locationData);
        setInputValue("");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Failed to fetch location data");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">City, Province, Country </label>
      <input
        onChange={handleInput}
        type="text"
        name="location"
        id="location"
        value={inputValue}
      />
      <button className="searchButton" type="submit">
        Find Location
      </button>
    </form>
  );
}
export default SearchBar;
