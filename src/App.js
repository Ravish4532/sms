import React from "react";
import Navbar from './Navbar' ;
import Masthead from './Masthead' ;
import Portfolio from "./Portfolio";
import About from './About';
import Contact from "./Contact";
import Footer from './Footer';
import Copyright from "./Copyright";
import "./css/styles.css";
const App = () => {
return (
<div className="App">
<h1>hi this is react tutorial</h1>
<Navbar />
<Masthead />
<Portfolio />
<About />
<Contact />
<Footer /> 
<Copyright />
</div>
)
}
export default App;