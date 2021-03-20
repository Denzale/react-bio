import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Navbar from './componets/Navbar.js';
import Footer from './componets/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
