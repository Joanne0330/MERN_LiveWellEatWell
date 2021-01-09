import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/layout/HomePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={HomePage}/>
      </div>
    </Router>
  );
}

export default App;
