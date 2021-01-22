import React, { Component } from 'react'
class Form extends Component {
    constructor () {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isReading: true,
            gender: "",
            favColor:"blue"
            
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
                <br />
                <label>Fovorite Color:</label>
                <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
                    <option value="blue">Blue
                    </option>
                    <option value="green">Green
                    </option>
                    <option value="yellow">Yellow
                    </option>
                    <option value="orange">Orange
                    </option>
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>you are a {this.state.gender}</h2>
                <h1>your favorite color is {this.state.favColor}</h1>
                <button>Submit</button>
                
            </form>
         );
    }
}
 
export default Form;
//formik library 
//checkbox don't have value attribute