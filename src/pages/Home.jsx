import React from "react";
import Carousel from "../components/Carousel";
import Timer from "../components/Timer";
import About from "../components/About";
import ImportantDates from "../components/ImportantDates"; // Corrected the typo in the import
import Speakers from "../components/Speakers";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Timer />
      <ImportantDates /> {/* Corrected the component name */}
      <About />
      <Speakers />
    </div>
  );
};

export default Home;
