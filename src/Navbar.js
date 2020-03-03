import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';

class Navbar extends Component {
    state = {
        toggle:false
    }
    

    render() {

        const li = [
            {
                link: "/Home",
                text:"Home",
                path: "./Home",
            },
            {
                link: "/productrangeone/",
                text:"Product Range I"
            },
            {
                link: "/endorsement/",
                text:"Endorsement"
            },
            {
                link: "/about/",
                text:"About"
            },
            {
                link: "/contact/",
                text:"Contact"
            }
            
        ];

        return (
            <>
            <Router>
            <div className="navBar">         
                  <ul className={this.state ? "links show-nav" : "links"} >
                      <a href="/">
                  <div style={{marginright: 100}}><img id="nLogo" style={{width: 24, height: 22}}  src={require('./images/AN_logo.png')} /></div></a>
                      {
                          li.map((objLink, i) => {
                              return ( <li><a href={objLink.link}>{objLink.text} </a></li>
                                 )
                          })
                      }
                  </ul>
            </div>
            </Router>

            
        </>
        );

    }
}

export default Navbar;