import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import ExampleImage from "../components/home/EaxampleImage";
import Steps from "../components/home/Steps";
import AbautDescribe from "../components/home/AbautDescribe";
const Home = () => {
  return (
    <main className="bg-gradient-to-b from-[#F2FFF9] to-[#FFF6F1] min-h-screen">
      <Navbar />
      <HeroSection />
      <ExampleImage />
      <Steps />
      <AbautDescribe />
    </main>
  );
};

export default Home;
