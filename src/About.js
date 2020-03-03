import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';

class About extends Component {
    state = {}


    render() {

        return (

            <div>
                <div className="about"> 
                <h1>About</h1>
                <div className="quickfacts">
                
                    <h2 className="quickfacts">Quick Facts</h2>
                    <p><i>Phase </i>  | Early Start-Up (Seed Round)</p>
                    <p><i>Number of Employees </i> | Currently: 1 & On Standby: 3 to 4</p>
                    <p><i>Focus </i> | Industry, Engineering, Physics, Computer Science</p>
                    <p><i>Equity </i> | Available</p>
                    <p><i>Market </i> | Global</p>
                    <p><i>Location </i>| Copenhagen, Denmark</p>
                    <p> </p>
                </div>
                <div className="founder">
                    <h2 className="founder">Founder</h2>
                    <text>
                    <img className="founder" src = { require('./Pages/About/abech_photo.png') }></img>
                        <p><strong>Alexander Bech (BEng, PhD in Mechanical Engineering) </strong></p>
                        <p>Born in Thailand lived in Brazil, Italy, India, China, the UK and Denmark. Witnessed some of the world's most heavily polluted cities (e.g. Bangkok, Beijing, Chennai)!</p>
                        <p><u>Academic and Research Background:</u></p>
                            <p>PhD in Mech. Engineering from the University of Nottingham, United Kingdom. Focused on control engineering, numerical simulations, and powertrain performance. Exposed to commercial powertrain development projects; shocked by inefficiencies and excessive cost.</p>
                        <p><u>Work Experience:</u></p>
                        <p>Deloitte - Tax Management Consulting in Copenhagen, Denmark. Exposed to technology, finance and management related projects through corporates and start-ups.</p>
                        <p>Quit Deloitte in good terms because no one had implemented a cheaper alernative to powertrain testing. The future beholds exciting innovative solutions.</p>
                    </text>
                </div>
                <div className="thoughts">
                    <h2 className="thoughts">Our Train of Thought</h2>
                    <text>
                    <p>The world of scientific development revolves around the use of simulation and experimental measures, call it theoretical and analytical complementation. Based on the insights given through simulation results and the accordance with experimental tests, we as humans help further progress scientific achievement. </p>
                    <p>AutoNeura focuses on the combination of both these aspects of scientific development to enable the user or person to rapidly further their insight on product focused development projects envisioned. By developing an automatic synergy between simulations and experimental mainframes and combining this with analytical solutions such as artificial intelligence, we will make better decisions on scientific based developments.</p> 
                    <p>The focus is on the human being, equipping the human with tools that enable interaction. Be it through high definition graphics, causality reports, voice command or other media, humans are progressing towards this symbiosis. </p>
                    <p>The future lies in an environment where our senses, motives and thoughts are furthered through a neural lace. We are progressing towards the binding of man and machine at a rate which is unprecedented. It is inevitable.</p>
                    <p>The formatting of information such that man may passively understand machine language is needed. Developments are taking place globally in bettering mankind’s understanding of the human brain. The first well-funded attempt to bridge the link between human thought and digital information is being enabled through NeuraLink. </p>
                    <p>AutoNeura has the ambition of focusing on the long-term. Its end goal is to be the leader in digitizing and packaging information for the human brain to understand complex ideas.  </p>
                    <p> </p>
                    </text>
                </div>
                </div>
            </div >
        );

    }
}

export default About;