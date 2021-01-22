import React, { Component } from 'react'
class Form extends Component {
    constructor () {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isReading: true,
            gender:""
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value,type,checked } = event.target
        type==="checkbox"?this.setState({[name]:checked}):this.setState( {
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
                <textarea value="some default value" onChange={this.handleChange}></textarea>
                <br />
                <label>
                    <input type='checkbox' name="isReading" onChange={this.handleChange} checked={this.state.isReading}></input>
                </label>
                <br/>
                 <label>
                    <input type='radio' value="male" name="gender" onChange={this.handleChange} checked={this.state.gender === "male"}></input>
                    Male
                </label>
                <br/>
                 <label>
                    <input type='radio' value="female" name="gender" onChange={this.handleChange} checked={this.state.gender === "female"}></input>
                    Female
                </label>
                <select>
                    <opiton>
                    </opiton>
                    <opiton>
                    </opiton>
                    <opiton>
                    </opiton>
                    <opiton>
                    </opiton>
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>you are a {this.state.gender }</h2>
            </form>
         );
    }
}
 
export default Form;
//formik library 