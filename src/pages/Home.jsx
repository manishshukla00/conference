import React from "react";
import Carousel from "../components/Carousel";
import Timer from "../components/Timer";
import Event from "../components/Event";
import About from "../components/About";
import ImportantDates from "../components/ImpotantDates";
import TopicsOfInterest from "../components/TopicsOfInterest";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Timer />
      <ImportantDates />
      <TopicsOfInterest />
      <Event />
      <About />
    </div>
  );
};

export default Home;
