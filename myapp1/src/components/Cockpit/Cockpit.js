import React from 'react'
import classes from './Cockpit.module.css'
const cockpit = ( props ) => {
    const assignedClassed = []
    let btnClass = ''
    if ( props.showPersons ) {
         btnClass = classes.Red
    }
    if ( props.persons.length <= 2 ) {
      assignedClassed.push(classes.red)
    }
    if ( props.persons.length <= 1 ) {
      assignedClassed.push(classes.bold)
    }
    return (<div className = {classes.Cockpit}>
      <h1>{props.title }</h1>
        <p className =  {assignedClassed.join(' ')}>this is really working</p>
        <button className={btnClass} onClick = {props.tipa}
        > hide me</button>
        </div>
    )
}
export default cockpit