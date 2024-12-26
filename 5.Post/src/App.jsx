import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { data, data2 } from "./data";

function App() {
  const [bgColor, setBgColor] = useState("#232D3F");
  const [color, setColor] = useState("white");
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
    if (toggle) {
      setBgColor("rgb(255,255,255");
      setColor("black");
      document.querySelector("body").style.backgroundColor = "#cbc5c5";
    } else {
      setBgColor("#232D3F");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "black";
    }
  };
  return (
    <>
      <Navbar
        bgColor={bgColor}
        color={color}
        toggleBtn={toggleBtn}
        toggle={toggle}
      />
      <div className="container">
        <div className="sidebar">
          <Sidebar bgColor={bgColor} color={color} />
        </div>
        <div className="post_section">
          {data.map((item) => (
            <Post key={item.id} item={item} bgColor={bgColor} color={color} />
          ))}
        </div>
        <div className="rightbar">
          {data2.map((item) => (
            <Rightbar key={item.id} item={item} bgColor={bgColor} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
