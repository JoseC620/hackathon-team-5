import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ShowPark from "./Pages/ShowPark";
import FourZeroFour from "./Pages/FourZeroFour";
import Index from "./Pages/Index";
import { useState } from 'react';

function App() {
  /*
  Used https://convertio.co/png-ico/ to convert logoCrop to .ico.  Replaced public/logo.ico.
  */

  const [searchParams, setSearchParams] = useState(null);
  const [language, setLanguage] = useState("English");

  return (
    <div className="App">
      <Router>
      <Nav setSearchParams = {setSearchParams} language = {language} setLanguage = {setLanguage}/>
      <main>
        <Routes>
          <Route path="/" element={<Home language = {language}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/parks" element={<Index searchParams = {searchParams} language = {language}/>} />
          <Route path="/parks/:parkId" element={<ShowPark />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
