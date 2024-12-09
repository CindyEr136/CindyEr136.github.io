import { BrowserRouter } from "react-router-dom";
import React from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
