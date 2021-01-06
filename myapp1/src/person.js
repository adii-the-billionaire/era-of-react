import React from 'react';
import './person.css'
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
export default person
