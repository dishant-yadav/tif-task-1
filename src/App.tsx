import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Hero from "./pages/hero";
import LatestArticles from "./pages/latestArticles";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <LatestArticles />
    </div>
  );
}

export default App;
