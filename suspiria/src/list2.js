import React from 'react'
const mia = (props) => {
    return (
        <div>
            <input type="checkbox" checked={props.completed} onChange = {()=>{props.tip(props.id)}}></input>
            <p>{props.text}</p>
        </div>
    )
}
export default mia
