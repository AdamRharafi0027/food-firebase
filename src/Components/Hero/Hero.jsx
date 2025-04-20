import { Link as ScrollLink } from "react-scroll";
import "./Hero.css";
import burger2 from '../../../public/images/burger2.png'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Delicious Fast Food Delivered To You</h1>
        <p>Craving something tasty? Order now and enjoy hot, fresh meals at your doorstep.</p>
        <div className="hero-buttons">
          <ScrollLink to="menu" className="btn primary" smooth={true} duration={500}>
            View Menu
          </ScrollLink>
          <ScrollLink to="contact" className="btn secondary" smooth={true} duration={500}>
            Order Now
          </ScrollLink>
        </div>
      </div>
      <div className="hero-image">
        <img src={burger2} alt="Delicious Burger" />
      </div>
    </section>
  );
};

export default Hero;
