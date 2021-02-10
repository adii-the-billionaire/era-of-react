import React from 'react';
import './App.css'
const person = (props)=> {
    return (
        <div>
            <p onClick={props.click}> i an {props.name } </p>
        </div>
    )
}
export default person