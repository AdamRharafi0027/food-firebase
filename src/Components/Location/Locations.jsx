import locationsData from "../../Data/locationsData";
import "./locations.css";

const Locations = () => {
    return (
      <section className="locations">
        <div className="container">
          <h2>📍 Our Locations</h2>
          <div className="locations-grid">
            {locationsData.map((loc) => (
              <div className="location-card" key={loc.id}>
                <i className="fas fa-store"></i>
                <h3>{loc.title}</h3>
                <p>{loc.address.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                <div className="location-details">
                  <p><i className="fas fa-clock"></i> {loc.hours}</p>
                  <p><i className="fas fa-phone"></i> {loc.phone}</p>
                </div>
                <a href={loc.mapLink} className="btn secondary" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Locations;
