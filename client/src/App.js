import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/layout/HomePage';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={HomePage}/>
        <Route path='/details/:id' component={RecipeDetails}/>
      </div>
    </Router>
  );
}

export default App;
