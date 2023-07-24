import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ShowPark from "./Pages/ShowPark";
import FourZeroFour from "./Pages/FourZeroFour";
import Index from "./Pages/Index";
import { useEffect, useState } from 'react';
import { getParkData } from "./api/fetch"


function App() {

  const [masterParkData, setMasterParkData] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    getParkData().then((response) => {
      setMasterParkData (response);
    })
  },[]);

  return (
    <div className="App">
      <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/parks" element={<Index masterParkData = {masterParkData} searchParams = {searchParams} language = {language}/>} />
          <Route path="/parks/:parkId" element={<ShowPark />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
