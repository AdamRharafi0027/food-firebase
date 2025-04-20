import specialDealsData from "../../Data/specialDealsData";
import "./specialDeals.css"; // Or specialDeals.css if you separated it
import { Link as ScrollLink } from "react-scroll";

const SpecialDeals = () => {
  return (
    <section id="deals" className="deals">
      <h2>🔥 Special Deals</h2>
      <div className="deals-list">
        {specialDealsData.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <img src={deal.image} alt={deal.name} />
            <div className="deal-info">
              <h3>{deal.name}</h3>
              <p>{deal.description}</p>
              <span className="price">{deal.price}</span>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <button className="btn order">Order Now</button>
              </ScrollLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialDeals;
