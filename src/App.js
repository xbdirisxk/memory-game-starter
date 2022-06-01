import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Game />
      <Footer />
    </>
  );
};

export default App;
