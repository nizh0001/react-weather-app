import LocationCard from "../LocationCard/LocationCard";
import "./LocationBar.css";

function LocationBar({ locations, removeLocation, setSelectedLocation }) {
  if (locations.length === 0) {
    return <p className="message">No locations added</p>;
  }
  return (
    <ul className="locationList">
      {locations.map((item) => (
        <LocationCard
          key={item.id}
          location={item}
          removeCard={() => removeLocation(item.id)}
          setSelectedLocation={setSelectedLocation}
        />
      ))}
    </ul>
  );
}
export default LocationBar;
