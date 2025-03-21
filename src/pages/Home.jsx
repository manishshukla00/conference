import React from "react";
import Carousel from "../components/Carousel";
import Timer from "../components/Timer";
import Event from "../components/Event";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Timer />
      <Event />
      <About />
    </div>
  );
};

export default Home;
