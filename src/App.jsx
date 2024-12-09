import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Hero } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
