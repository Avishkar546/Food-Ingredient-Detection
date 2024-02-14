// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Layout/Navbar';
import Image from './Component/Image';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Image />
      <div className="App">
        <Routes>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
