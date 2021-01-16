import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Navbar from './componets/Navbar.js';


function App() {
  return (












 <Router>
      <Navbar></Navbar>

      <div className="App">
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
    <h2> Denzale Houston</h2>

    
        <Link to="/portfolio" className="item">
          {' '}
          Porfoilio{' '}
        </Link>
        <Link to="/contact" className="item">
          {' '}
          Contact{' '}
        </Link>
        <Link to="/about" className="item">
          {' '}
          About{' '}
        </Link>
      </div>
    </Router>
  );
}

export default App;
