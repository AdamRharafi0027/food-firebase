import "./popular.css";
import { Link as ScrollLink } from "react-scroll";

const FoodCard = ({ name, description, price, image }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} />
      <div className="food-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
        <div className="order-btn">
          {/* Smooth scroll to the contact section */}
          <ScrollLink to="contact" smooth={true} duration={500}>
            <button className="btn order">Order Now</button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
