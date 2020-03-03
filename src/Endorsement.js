import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';

class Endorsement extends Component {
    state = {}


    render() {

        return (

            <div>
                <div className="endorsement"> 
                <h1>Endorsement</h1>
                <div className="endorse1">
                <h2>Affiliation</h2>
                  <text>
                  <p>AutoNeura is endorsed by the University of Nottingham, United Kingdom, on its mission and first product range development. As Chair for Automotive Propulsion/Director of Powertrain Research Centre, Professor Alasdair Cairns and his team of fellow academics, technicians and students ensure that AutoNeura will be able to fulfill on its first product finalization.</p>
                  <p>The University is equipped with 12 test rigs, 3 of which are suited to develop AutoNeura’s cheaper hardware approach, the University of Nottingham is committed in making this collaboration a success. Resources and facilities are enabled at reduced overheads through the University. In addition, ties with automotive manufacturers, original equipment manufacturers (OEMs) and the academic arena will enable AutoNeura to be available to a wide audience for product delivery and service once seed investment is secured. </p> 
                  <p>With campuses spread in the United Kingdom, China and Malaysia; the University of Nottingham provides a wide array of engineering talent and ambition. Furthermore, being part of the Universitas 21 and Russel groups; academics, industrial leads and think-tanks within the realm of engineering, are available for network on a global scale.</p>
                  </text>
                  </div>
                  <img className="endorsement" src = { require('./Pages/Endorsement/Endorsement.png') }></img>
                </div>
            </div >

        );

    }
}

export default Endorsement;