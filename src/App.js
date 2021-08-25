import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from './component/Home';

function App() {
  return (
    
    <Router forceRefresh={true}>
            <Switch>
                <Home/>
            </Switch>
      </Router>
  );
}

export default App;
