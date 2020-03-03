import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';

class ProductRangeOne extends Component {
    state = {}


    render() {

        return (

            <div>
                <div className="ProductRangeOne"> 
                    <h1>Product Range I</h1>
                    <div className="control">
                    <h2 className="control">High Accuracy Control System for Powertrain Development</h2>
                    {/*<hr width="600px"></hr>*/}
                    <h3>Enabling powertrain testing and development at reduced cost with tailored software made to run on cheaper laboratory hardware. Developed over a period of 3 years (2014 to 2018) and sought as a product as of 2019, Q4. Currently at Technology Readiness Level (TRL) 4/5. AutoNeura is seeking seed investment to reach TRL 6/7 and industrial application. </h3>
                    <img className="productrangeone" src = { require('./Pages/ProductRangeOne/prodrange1.png') }></img>
                    </div>
                    <h2 className ="features">Features</h2>
                    {/*<hr width="200px"></hr>*/}
                    <img className="productfeatures" src = { require('./Pages/ProductRangeOne/Features.png') }></img>

                    </div>
            </div >
        );

    }
}

export default ProductRangeOne;