import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "./Header.css";
import { auth } from "../../firebase/firebase.js";
import { signOut } from "firebase/auth";
import { useAuth } from "../../context/AuthContext"; 
import { FaUserCircle } from 'react-icons/fa'; // Bootstrap user icon

const Header = () => {
  const { user } = useAuth(); 
  const handleLogout = () => {
    signOut(auth);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Fast Food</div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="link"
              onClick={closeMenu}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="menu"
              smooth={true}
              duration={500}
              className="link"
              onClick={closeMenu}
            >
              Menu
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="link"
              onClick={closeMenu}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="why"
              smooth={true}
              duration={500}
              className="link"
              onClick={closeMenu}
            >
              Why Us
            </ScrollLink>
          </li>
        </ul>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="link contact-btn"
          onClick={closeMenu}
        >
          Contact
        </ScrollLink>

        {user ? (
          <div className="user-profile">
            <FaUserCircle className="profile-icon" />
            <span className="user-name">{user.displayName || 'User'}</span>
            <span
              className="link contact-btn"
              onClick={handleLogout}
            >
              Logout
            </span>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="link" onClick={closeMenu}>
              Login
            </Link>
            <Link to="/signup" className="link" onClick={closeMenu}>
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
