import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Parks from "./Pages/Parks";
import ShowPark from "./Pages/ShowPark";
import FourZeroFour from "./Pages/FourZeroFour";
import Index from "./Pages/Index";


function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/parks" element={<Index />} />
          <Route path="/parks/:parkId" element={<ShowPark />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
