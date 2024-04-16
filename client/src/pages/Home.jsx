//Home.js
import React from "react";
import EventInformation from "../components/Home/EventInformation.jsx";
import Footer from "../components/Footer.jsx";
import ViewButtons from "../components/Home/ViewButtons.jsx";
import Hero from "../components/Home/Hero.jsx";
import HeroSidescroll from "../components/HeroSidescroll.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <EventInformation />
      {/* <ViewButtons /> */}
      <HeroSidescroll />
      <Footer />
    </div>
  );
};

export default Home;
