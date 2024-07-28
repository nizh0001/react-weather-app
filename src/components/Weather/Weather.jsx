import Loading from "../Loading/Loading";
import "./Weather.css";

export default function Weather({ weather, isLoading, selectedLocation }) {
  if (selectedLocation == null)
    return <p className="message">No selected location</p>;
  if (weather == null || isLoading) return <Loading />;
  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div className="weather">
      <h2 className="titleWeather">Weather for {weather.name}</h2>
      <img className="image" src={icon} alt="Icon of clouds in the sky"></img>
      <p>
        <strong>Clouds:</strong> {weather.weather[0].description}{" "}
      </p>
      <p>
        <strong>Temperature:</strong> {weather.main.temp} °C
      </p>
      <p>
        <strong>Feels like:</strong> {weather.main.feels_like} °C
      </p>
      <p>
        <strong>Wind:</strong> {weather.wind.speed} m/s
      </p>
    </div>
  );
}
