import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';

class EntryPage extends Component {
    state = {}


    render() {

        return (
            <div className="entrypage">
                 <a><img id="logo" src = { require('./images/AN_logo.png') }></img>
                </a>
                <h1>AUTONEURA</h1>
                <h2>Knowledge Through Computation</h2>
                           
            </div>
        );

    }
}

export default EntryPage;