import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';





function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />





        <Link href="/" className="item"> Porfoilio </Link>
        <Link href="/contact" className="item"> Contact </Link>
        <Link href="/about" className="item"> About </Link>


      </div>
    </Router>
  );
}

export default App;
