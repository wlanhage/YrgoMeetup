 //Home.js
 import React from 'react'
 import Navbar from '../components/Navbar.jsx';
 import EventInformation from '../components/Home/EventInformation.jsx';  
import ViewButtons from '../components/Home/ViewButtons.jsx';
import Hero from '../components/Home/Hero.jsx';

 const Home = () => {
   return (
     <div>
        <Navbar />
        <Hero />
        <EventInformation />
        <ViewButtons />
     </div>
   )
 }

 export default Home
