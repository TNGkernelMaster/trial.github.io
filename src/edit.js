import React, { Component } from 'react';
import axios from 'axios';

export default class EditGcrCntct extends Component {

    constructor(props) {
        super(props);

        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            country: '',
            fullName: '',
            emailAddress: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/gcr_cntcts/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    country: response.data.country,
                    fullName: response.data.fullName,
                    emailAddress: response.data.emailAddress
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

      onSubmit(e) {
        e.preventDefault();
        const obj = {
            country: this.state.country,
            fullName: this.state.fullName,
            emailAddress: this.state.emailAddress
        };
        console.log(obj);
        axios.put('http://localhost:8080/api/gcr_cntcts/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h5 align="left">Update Contact</h5>
                <form onSubmit={this.onSubmit}>
                                        
                        <input  type="text"
                                placeholder="Country"
                                value={this.state.country}
                                onChange={this.onChangeCountry}
                                />
                        
                        <input 
                                type="text" 
                                placeholder="Full Name"
                                value={this.state.fullName}
                                onChange={this.onChangeFullName}
                                />
                        <input 
                                type="text" 
                                placeholder="Email Address"
                                value={this.state.emailAddress}
                                onChange={this.onChangeEmailAddress}
                                />
                   
                        <input type="submit" value="Update" className="btn btn-primary" />
                   
                </form>
            </div>
        )
    }
}