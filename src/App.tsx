import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Hero from "./pages/hero";
import Articles from "./pages/Articles";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
