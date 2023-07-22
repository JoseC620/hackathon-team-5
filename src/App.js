import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      </Router>
    </div>
  );
}

export default App;
