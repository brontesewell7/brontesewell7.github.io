import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import horse from './horse.png'
function App() {
  return (
    <div className="App">

        <div class="wrapper">
          <img src={horse}/>
          <img src="https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          <h1 id="landing-title">Bronte Sewell</h1>
         
        <a id="equestrian-link" href='/equestrian'>Equestrian</a>

        <a id="web-dev-link" href='/web-developement'>Web Development and Design</a>
        </div>
    </div>
  );
}

export default App;
