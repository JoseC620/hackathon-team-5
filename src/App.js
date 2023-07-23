import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      {/* <Nav /> */}
      </Router>
    </div>
  );
}

export default App;
