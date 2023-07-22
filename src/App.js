import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/parks" element={<Parks />} />
          <Route path="/parks/:parkId" element={<ShowPark />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
