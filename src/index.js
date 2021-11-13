import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CurrentCity from './store/CurrentCity'
import Inputs from './store/Inputs'
import { Provider } from 'mobx-react';

const currentCity = new CurrentCity()
const inputs = new Inputs()
const stores = {currentCity, inputs}
ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
