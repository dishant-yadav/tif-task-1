import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
    </div>
  );
}

export default App;
