import React, { Component } from 'react'
class Form extends Component {
    constructor () {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree:false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange( event ) {
        const { name,type ,checked,value } = event.target
        type === 'checkbox' ? this.setState( prevState => {
            return {
                dietaryRestrictions: {
                    ...prevState.dietaryRestrictions,
                [name]:checked}
           }
       }): this.setState( {
            [name]:value
        })
    }
    render() { 
        return ( 
            <main>
                <form>
                    <input name="firstName" placeholder="FirstName" value={this.state.firstName} onChange={this.handleChange}>
                    </input>
                    <br />
                    <input name="lastName" placeholder="LastName" value={this.state.lastName} onChange ={this.handleChange}>
                    </input>
                    <br />
                    <input name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange}>
                    </input>
                    <br />
                    <label>
                        <input type="radio" name="gender" value="male"
                        checked={this.state.gender ==="male"} onChange={this.handleChange}>
                        </input>Male</label>
                    <br />
                    <label>
                        <input type="radio" value="female"
                            name="gender"
                        checked={this.state.gender==="female"} onChange={this.handleChange}>
                        </input>Female</label>
                    <br />
                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option value="">--Please select the one</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway
                        </option>
                        <option value="northpole">North Pole</option>
                        <option value="southpole">South Pole</option>
                    </select>
                    <br/>
                    <label>
                        <input type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                        checked={this.state.dietaryRestrictions.isVegan}>
                        </input>Vegan?</label>
                    <br />
                    <label>
                        <input type="checkbox" name="isKosher" onChange={this.handleChange}
                            checked={this.state.dietaryRestrictions.isKosher}></input>Kosher?</label>
                    <br />
                    <label>
                        <input type="checkbox" name="isLactoseFree"
                        checked={this.state.dietaryRestrictions.isLactoseFree}onChange={this.handleChange}></input>LactoseFree?</label>
                </form>
                <hr />
                <h2>Entered information</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>your age is{this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination:{this.state.destination}</p>
                <p>
                    your dietary restriction:
                Vegan:{this.state.dietaryRestrictions.isVegan?'true':'false'}
                Kosher:{this.state.dietaryRestrictions.isKosher?'true':'false'}
                LactoseFree:{ this.state.dietaryRestrictions.isLactoseFree?'true':'false'}</p>
            </main>
         );
    }
}
 
export default Form;