import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';

class Contact extends Component {
    state = {}


    render() {

        return (

            <div>
                <div className="Contact"> 
                <h1>Contact Us</h1>
                <div className="contact1">
                 <text>
                     <p>  </p>
                  <div className="cntct1">Please do not hesitate to get in touch. </div>
                  <h2>Details</h2>
                  <p><i>Founder</i>: Alexander Bech</p>
                  <p><i>Email</i>: abech@autoneura.org</p> 
                  <p><i>Cellphone</i>: +4530934394</p> 
                  <p>Copenhagen, Denmark</p>
                  <p> </p>
                   </text>
                  </div>
                </div>
            </div >

            
            
            

        );

    }
}

export default Contact;