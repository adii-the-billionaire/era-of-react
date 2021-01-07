import React, { Component } from 'react';
import classes from'./App.module.css';
// import styled from 'styled-components'
// import Radium, { StyleRoot}from 'radium'
import Person from '../components/Persons/Person/person';

// const StyledButton = styled.button`
//  background-color: ${props =>props.alt?'red':'blue'};
//       color:white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
//       &:hover {
//         background-color: ${props=>props.alt?'salmon':'pink'};
//         color:black;
//       }`
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
    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color:'black'
    //   }
    // }
    let person = null
    let btnClass = [classes.Button]
    if ( this.state.showPersons ) {
      person = (
        <div>
          {this.state.person.map( (person,index )=> {
            return <Person click={() => { this.deletePersonHandler( index ) }} name={person.name} age={person.age} key={ person.id} changed = {(event)=>{this.nameChangeHandler(event,person.id)} } clikc1 = {this.state.otherState} />
         })}
        </div>
      )
      btnClass.push(classes.Red)
      // style.backgroundColor = 'yellow'
      // style[ ':hover' ] = {
      //   backgroundColor: 'blue',
      //   color:'black'
      // }
    }
    const assignedClassed = []
    if ( this.state.person.length <= 2 ) {
      assignedClassed.push(classes.red)
    }
    if ( this.state.person.length <= 1 ) {
      assignedClassed.push(classes.bold)
    }
    
    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi'm React</h1>
        <p className = {assignedClassed.join(' ')}>this is really working</p>
        <button className = {btnClass.join(' ')} onClick={this.togglePersonHandler}
        > hide me</button>
        {person}
        </div>
    )
  }
}
export default App ;
//export default Radium(App)
