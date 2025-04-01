import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CommitteMember from "./pages/CommitteMember";
import About from "./pages/About";
import Callforpapers from "./pages/Callforpapers";
import Speakers from "./pages/Speakers";
import Registration from "./pages/Registration";

const app = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee-member" element={<CommitteMember />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/callforpapers" element={<Callforpapers />} />
          {/* <Route path="/schedule" element={<Schedule />} /> 
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default app;
