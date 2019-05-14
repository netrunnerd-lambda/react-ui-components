import React from 'react';
import './App.css';

// components ...
import Calculator from './components/ReactCalculator/ReactCalculator';

const greeting = 'Welcome to the React Calculator';

const App = _ => (
  <React.Fragment>
    <h3>{ greeting }</h3>
    <Calculator />
  </React.Fragment>
);

export default App;
