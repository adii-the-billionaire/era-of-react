import React from 'react';
import classes from './Person.module.css'
// import Radium from 'radium'
// import styled from 'styled-components'
// const StyledDiv = styled.div`
// width: 60%;
//     margin: auto;
//     border: 1px solid rgb(46, 23, 23);
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16 px;
//     text-align: center;
//     @media(min-width:500px) {
//         width: 60%;
// } `
const person = ( props ) => {
    // const style = {
    //     '@media(min-width:500px)': {
    //         width:'450px'
    //     },
       
    // }
    return (
        // <div className = "Person" style = {style}>
        <div className = {classes.Person}>
             <p onClick = {props.click} >I'm {props.name} and I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.Click1} ></input>
            <button >clickme</button>
        </div>
        )
}
export default person

