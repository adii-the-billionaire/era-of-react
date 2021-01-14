import React, { useEffect} from 'react'
import classes from './Cockpit.module.css'
const Cockpit = ( props ) => {
  useEffect( () => {
    console.log( '[Cockpit.js] useEffect' )
    setTimeout( () => {
      alert('saved data to cloud')
    }, 1000 )
    return () => {
     // clearTimeout(timer)
      console.log('[Cockpit.js] cleanup work in useEffect')
    }//this shows component wil unmount and unmounnt
  }, [] )
  useEffect( () => {
    console.log( '[Cockpit.js] 2nd useEffect' )
    return ( () => {
      console.log('[Cockpit.js] cleanup  work in 2nd useEffect')
    })
  })
    const assignedClassed = []
    let btnClass = ' '
    if ( props.showPersons ) {
         btnClass = classes.Red
    }
    if ( props.personsLength <= 2 ) {
      assignedClassed.push(classes.red)
    }
    if ( props.personsLength <= 1 ) {
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
export default React.memo( Cockpit )
