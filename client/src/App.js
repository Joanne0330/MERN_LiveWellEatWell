import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/layout/HomePage';
import NavBar from './components/layout/NavBar';
import Header from './components/layout/Header';
import RecipeDetails from './components/RecipeDetails';
import RecipeCollection from './components/RecipeCollection';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <br></br>
        <Route exact path='/' component={HomePage}/>
        <Route path='/details/:id' component={RecipeDetails}/>
        <Route path='/collection' component={RecipeCollection}/>
      </div>
    </Router>
  );
}

export default App;
