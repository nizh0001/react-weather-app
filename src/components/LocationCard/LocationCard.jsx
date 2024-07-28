import "./LocationCard.css";

function LocationCard({ location, removeCard, setSelectedLocation }) {
  function handleClick(ev) {
    ev.stopPropagation();
    removeCard();
  }
  return (
    <li className="locationCard" onClick={() => setSelectedLocation(location)}>
      <h2 className="title">{location.name}</h2>
      <p>{location.country}</p>
      <button className="removeButton" onClick={handleClick}>
        Remove
      </button>
    </li>
  );
}

export default LocationCard;
