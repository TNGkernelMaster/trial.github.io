// Import React App package
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import { render } from "react-dom";
import Navbar from './Navbar';
import EntryPage from './EntryPage';
import Home from './Home';
import ProductRangeOne from './productrangeone';
import Endorsement from './Endorsement';
import About from './About';
import Contact from './Contact';


class App extends Component {
    constructor(props) {
        super(props);
         this.state = { 
         };

    }


    componentDidMount() {
        }
           
    render() {
       
        return (
        <Router>
        <font face="constantia">
        {/* NEW NAV BAR*/}
        <Navbar></Navbar>
        
        <Route path="/" exact component={EntryPage}/>
        <Route path="/Home" exact component={Home}/>
        <Route path="/endorsement/" exact component={Endorsement}/>
        <Route path="/contact/" exact component={Contact}/>
        <Route path="/about/" exact component={About}/>
        <Route path="/ProductRangeOne/" exact component={ProductRangeOne}/>
        </font>      

        {/* HIDING THIS CODE - REFERENCE LINK TO PRE-BUILT HTML CODE
          <Link to= "/agoodboyelearning" >A Good Boy</Link>
          <Route path='/agoodboyelearning' component={() => { 
                window.location.href = './story_html5.html'
                return null;
          }}/> 
        */}
       
        </Router>
        );

            }
        }

        
render(<App />, document.getElementById("root"));

export default App;
