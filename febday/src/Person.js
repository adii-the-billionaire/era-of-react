import React from 'react';
import './App.css'
const person = (props)=> {
    return (
        <div>
            <p onClick={props.click}> i an {props.name} </p>
            <input type="text" onChange={props.changed }/>
        </div>
    )
}
export default person