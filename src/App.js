import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Navbar from './componets/Navbar.js';
import Header from './componets/Header.js';
import Footer from './componets/Footer';


function App() {
  return (
<Router>
      <Navbar/>
      <Header/>

      <div className="App">
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
