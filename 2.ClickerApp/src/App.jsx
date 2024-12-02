import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Clicker from "./components/Clicker";

function App() {
  const [title] = useState("Clicker");

  return (
    <div className="App">
      <Header title={title} />
      <Clicker />
    </div>
  );
}

export default App;
