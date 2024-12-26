import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">Abhi Code</div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <button className="close-drawer" onClick={closeDrawer}>
          <FaTimes />
        </button>
        <li>
          <Link to="/" onClick={closeDrawer}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeDrawer}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeDrawer}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeDrawer}>
            Services
          </Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleDrawer}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};
export default Navbar;
