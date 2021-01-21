import React, { Component } from 'react'
class Form extends Component {
    constructor () {
        super()
        this.state = {
            firstName: '',
            lastName:''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState( {
            [name]:value
        })
    }
    render() { 
        return ( 
            <form>
                <input type="text" placeholder="firstName" onChange={this.handleChange} value={this.state.firstName}
                name="firstName">
                </input>
                <br/>
                <input type="text" placeholder=";lastName" onChange={this.handleChange} value={this.lastName}
                name="lastName">
                </input>
                <h1>{this.state.firstName} {this.state.lastName }</h1>
            </form>
         );
    }
}
 
export default Form;