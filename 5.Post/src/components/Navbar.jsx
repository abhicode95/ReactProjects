/* eslint-disable react/prop-types */
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";

const Navbar = ({ bgColor, color, toggleBtn, toggle }) => {
  const navBgColor = color === "black" ? "#cbc5c5" : "black";
  return (
    <>
      <div className="nav_bar" style={{ backgroundColor: `${navBgColor}` }}>
        <div
          className="logo"
          style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
        >
          ABHI
          <div onClick={toggleBtn}>
            {toggle ? <BsToggle2On /> : <BsToggle2Off />}
          </div>
        </div>
        <div
          className="search"
          style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
        >
          <div className="left">
            <FcSearch />
            Search here...
          </div>
          <div className="right">
            <IoFilter /> Filters
          </div>
        </div>
        <div
          className="seller"
          style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
        >
          Become a Seller
        </div>
      </div>
    </>
  );
};
export default Navbar;
