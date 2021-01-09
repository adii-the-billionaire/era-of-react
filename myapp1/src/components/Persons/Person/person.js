import React, { Component} from 'react';
import classes from './Person.module.css'
class Person extends Component{
    render() {
        console.log('[Person.js] rendering ....')
       return ( <div className={classes.Person}>
            <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} year old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.Click1} ></input>
            <button >clickme</button>
        </div>)
    }
}
export default Person

