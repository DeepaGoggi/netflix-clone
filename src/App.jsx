import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Join from "./components/Join";
import Foot from "./components/Foot";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Trending />
      <Join />
      <Foot />
    </div>
  );
}

export default App;