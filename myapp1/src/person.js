import React from 'react';
import './person.css'
import Radium from 'radium'
const person = ( props ) => {
    return (
        <div className = "Person">
            <p onClick = {props.click} >I'm {props.name} and I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.Click1} ></input>
            <button >clickme</button>
        </div>
        )
}
export default Radium(person)
//Radium class component and functional component so let's start something arbitrary
