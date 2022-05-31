import React from "react";

// import Cards from "./components/Cards/Cards";
// import Carousel from "./components/Carousel/Carousel";

import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// <----Below Line is Commented by Vikram Singh 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// <----Below Line is Written by Vikram Singh
import { Routes, Route } from 'react-router-dom';
import Contact from "./components/Pages/Contact";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import Mustsee from "./components/Must See/Mustsee";
import Historical from "./components/Historical/Historical";
import Activities from "./components/Activities/Activities";
import Mumbaizoo from "./components/Activities/Mumbaizoo";
import Sanjaygandhinationalpark from "./components/Activities/Sanjaygandhinationalpark";
import Esselworld from "./components/Activities/Esselworld";
import Fashionstreet from "./components/Activities/Fashionstreet";
function App() {
  return (
    <>
      {/* Here some Changes made by Vikram remove Router and some routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/log-in" element={<Login />}></Route>
        <Route path="/must-see" element={<Mustsee />}></Route>
        <Route path="/historical" element={<Historical />}></Route>
        <Route path="/activities" element={<Activities />}></Route>
        <Route path="/activities-mumbai-zoo" element={<Mumbaizoo />}></Route>
        <Route path="/activities-sanjay-gandhi-national-park" element={<Sanjaygandhinationalpark />}></Route>
        <Route path="/activities-fashion-street'" element={<Fashionstreet />}></Route>
        <Route path="/activities-essel-world" element={<Esselworld />}></Route>
        {/* <Footer /> */}
      </Routes>
    </>
  );
}
export default App;
