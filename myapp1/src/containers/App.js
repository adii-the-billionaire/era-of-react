import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit'
// import styled from 'styled-components'
// import Radium, { StyleRoot}from 'radium'
import Person from '../components/Persons/Person/person';
import Persons from '../components/Persons/Persons'
      
class App extends Component {
  state = {
    person: [
      { id:'djdjdj', name: 'Mia', age: 90 },
      {
        id:'dkdkdk', name: 'Shasha', age: 90
      },
      {id:'djdjdjd', name: 'Grey', age: 90 }
    ],
    otherState: '',
    showPersons: false
  }
  switchHandler = ( event ) => {
    this.setState( {
      person: [
        { name: event, age: 90 },
        { name: 'sia', age: 90 },
        { name: 'tia', age: 90 }
      ],
      
    } )
  }
  nameChangeHandler = ( event,id ) => {
    const personIndex = this.state.person.findIndex( p => p.id === id )
    const personNew = { ...this.state.person[ personIndex ] }
    //we can also using of Object.assign
    //Object.assign({},this.state.person[personIndex])
    personNew.name = event.target.value
    const person2 = [ ...this.state.person ]
    person2[personIndex] = personNew
    this.setState( {
      person: person2
    })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState( { showPersons: !doesShow } )
  }
  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.person.slice()
    const persons = [...this.state.person]
    persons.splice( personIndex, 1 )
    this.setState({person:persons})
  }
 
  render() {
    let person = null
    if ( this.state.showPersons ) {
      person = (
        <div>
          <Persons persons={this.state.person}
            clicked={this.deletePersonHandler }
            changed={ this.nameChangeHandler}/>
        </div>
      )
    }
    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.person} tipa={this.togglePersonHandler} title={ this.props.title}/>
        {person}
        </div>
    )
  }
}
export default App ;
//export default Radium(App)
