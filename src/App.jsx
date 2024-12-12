import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Aimtrainer } from "./pages/Aimtrainer";
import { Quiz } from "./pages/Quiz";
import { BrainyBees } from "./pages/BrainyBees";
import { Heritage } from "./pages/Heritage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Aimtrainer" element={<Aimtrainer />} />
          <Route path="/BrainyBees" element={<BrainyBees />} />
          <Route path="/Heritage" element={<Heritage />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
