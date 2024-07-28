import "./LocationCard.css";

function LocationCard({ location, removeCard, setSelectedLocation }) {
  function handleClick(ev) {
    ev.stopPropagation();
    removeCard();
  }
  return (
    <li onClick={() => setSelectedLocation(location)}>
      <h2>{location.name}</h2>
      <p>{location.country}</p>
      <button onClick={handleClick}>Remove</button>
    </li>
  );
}

export default LocationCard;
