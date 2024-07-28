import Loading from "../Loading/Loading";
import "./Weather.css";

export default function Weather({ weather, isLoading, selectedLocation }) {
  if (!selectedLocation) return <div>No selected location</div>;
  if (isLoading) return <Loading />;
  if (!weather) return <div>No weather data available</div>;
  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div>
      <h2>Weather for {weather.name}</h2>
      <img src={icon} alt="Icon of clouds in the sky"></img>
      <p>Clouds: {weather.weather[0].description} </p>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Feels like: {weather.main.feels_like} °C</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}
