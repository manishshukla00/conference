import React from "react";
import Carousel from "../components/Carousel";
import Timer from "../components/Timer";
import About from "../components/About";
import ImportantDates from "../components/ImpotantDates";
import Speakers from "../components/Speakers";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Timer />
      <ImportantDates />
      <About />
      <Speakers />
    </div>
  );
};

export default Home;
