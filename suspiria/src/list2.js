import React from 'react'
const mia = (props) => {
    return (
        <div>
            <input type="checkbox" checked={props.completed}></input>
            <p>{props.text}</p>
        </div>
    )
}
export default mia
