import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import LocationBar from "./components/LocationBar/LocationBar";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar";
import Weather from "./components/Weather/Weather";
import Loading from "./components/Loading/Loading";

const API_KEY = "da0176596ecf0732e05970957c52e8fe";

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function addLocation(newLocation) {
    if (locations.length > 4) {
      setErrorMessage(
        "You cannot have more than 5 locations. Please remove some from the list."
      );
      return;
    }
    setLocations([...locations, newLocation]);
  }

  function removeLocation(id) {
    setLocations(locations.filter((item) => item.id !== id));
  }

  function fetchWeather(lat, lon) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(URL)
      .then((respond) => {
        if (!respond.ok) {
          throw new Error(respond.statusText);
        }
        return respond.json();
      })
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Failed to fetch weather data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (selectedLocation) {
      setIsLoading(true);
      fetchWeather(selectedLocation.lat, selectedLocation.lng);
    }
  }, [selectedLocation]);

  console.log(locations);

  return (
    <main>
      <Header />
      <SearchBar addLocation={addLocation} setErrorMessage={setErrorMessage} />
      <FeedbackBar
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <LocationBar
        locations={locations}
        removeLocation={removeLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <Weather
        weather={weather}
        isLoading={isLoading}
        selectedLocation={selectedLocation}
      >
        <Loading />
      </Weather>
    </main>
  );
}

export default App;
