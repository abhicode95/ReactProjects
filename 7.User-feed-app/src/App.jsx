import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await axios("https://randomuser.me/api/?results=50");
      setUser(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header title="UserList" />
      <h1>UserList</h1>
      {user.map((user) => (
        <UserCard key={user.id.value} {...user} />
      ))}
    </>
  );
}

export default App;
