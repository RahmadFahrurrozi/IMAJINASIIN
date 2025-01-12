import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <h1>Home</h1>
      <Link to="/buy-credit">Buy Credit</Link>
    </main>
  );
};

export default Home;
