import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Route path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/skills'><Skills /></Route>
        <Route path='/work'><Work /></Route>
        <Route path='/contact'><Contact /></Route>
      </Router>
    </div>
  );
}

export default App;
