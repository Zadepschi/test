import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Products from './Products';
import './App.css';
import Login from './Login';
import Home from './Home';
import ClockApp from './ClockApp';
import About from './About';


function App() {

     return ( 
     <div>
      <div >
     <ClockApp />
    </div>
     <Router>
     <nav>
       <Link to="/" className="link">Home</Link>
       <Link to="/products" className="link">Products</Link>
       <Link to="/about" className="link">About</Link>
       <Link to="/login" className="link">Login</Link>
     </nav>
     <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>

     </Routes>
   </Router>
    
   </div>
   )
}

export default App;
