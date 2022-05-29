import React from "react";

// import Cards from "./components/Cards/Cards";
// import Carousel from "./components/Carousel/Carousel";

import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import Signup from "./components/Pages/Signup";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" exact element={Home}></Route>
          <Route path="/contact" exact element={Contact}></Route>
          <Route path="/sign-up" exact element={Signup}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
