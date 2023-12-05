import React from "react";
import HeroSlider from "./section/HeroSlider";
import OurTravel from "./section/OurTravel";
import BestHotels from "./section/BestHotels";
import PartnerItem from "./section/PartnerItem";
import Sponser from "./section/Sponser";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Sponser />
      <BestHotels />

      <OurTravel />
      <PartnerItem />
    </>
  );
};

export default Home;
