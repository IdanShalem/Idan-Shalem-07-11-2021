import { inject, observer } from 'mobx-react';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import DegreeUnits from './components/DegreeUnits';
import Navbar from './components/Navbar';

const App = inject('currentCity')(observer((props) => {

  const { currentCity } = props
  
  return (
    <div className={`App ${currentCity.isDayTime ? 'day' : 'night'}`}>
      <Router>
        <DegreeUnits />
        <Container />
        <Navbar />
      </Router>
    </div>
  );
}))

export default App;
