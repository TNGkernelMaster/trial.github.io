// Import React App package
import React, { Component } from "react";
import axios from 'axios';


export default class AddGcrCntct extends Component {
    constructor(props) {
        super(props);
        this.state = { };                
                       
    }

    onChangeCountry(e) {
      this.setState({
          country: e.target.value
      });
    }

    onChangeFullName(e) {
        this.setState({
            fullName: e.target.value
        });
    }

    onChangeEmailAddress(e) {
        this.setState({
            emailAddress: e.target.value
        });
    } 
 
        componentDidMount() {
        }
        

    render() {
        const {data} = this.state;
        return (
            <div style={{marginTop: 10}}>
                
               <h5>Add Contact</h5>
        <form>
        <div>
            <a href="C:\Users\abech\Desktop\Stairway_WebApp\a-good-boy-feb21-with-menu\story_html5.html">Press</a>
        </div>
        </form>
      
             </div>              
           

        );
    }
}

