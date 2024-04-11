//Home.js
import React from "react";
import Navbar from "../components/Navbar.jsx";
import EventInformation from "../components/Home/EventInformation.jsx";
import Footer from "../components/Footer.jsx";
import ViewButtons from "../components/Home/ViewButtons.jsx";
import Hero from "../components/Home/Hero.jsx";
import HeroSidescroll from "../components/HeroSidescroll.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <EventInformation />
      <ViewButtons />
      <HeroSidescroll />
      <Footer />
    </div>
  );
};

export default Home;
