import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Container />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
