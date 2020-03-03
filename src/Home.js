import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';

class Home extends Component {
    state = {}


    render() {

        return (
            <div className="home">
                 <a><img id="logo" src = { require('./images/AN_logo.png') }></img>
                </a>
                <h1>AUTONEURA</h1>
                <h2 className="knowledge">Knowledge Through Computation</h2>
                <p></p>
                <p></p>
                <text>
                <div className="mission"> 
                <h2 className ="mission">Our Mission</h2>
                <h3 className="mission">AutoNeura is an early stage start-up with the foresight of contributing to the enhancement of interaction the world has with physics/engineering through control systems, data, analytics and digitalization. We also want to help accelerate the advent of digitization of knowledge. Through this, as humans, we will take better decisions in vesting in technologies. </h3>
                <h3></h3>
                
                </div>
                </text>
                <h2 className ="products">Products</h2>
                <img className="products" src = { require('./Pages/Home/products.png') }></img>
                
            
            </div>
        );

    }
}

export default Home;