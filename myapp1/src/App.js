import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
// import Radium, { StyleRoot}from 'radium'
import Person from './person';

const StyledButton = styled.button`
 background-color: ${props =>props.alt?'red':'blue'};
      color:white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover {
        background-color: ${props=>props.alt?'salmon':'pink'};
        color:black;
      }`
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
    if ( this.state.showPersons ) {
      person = (
        <div>
          {this.state.person.map( (person,index )=> {
            return <Person click={() => { this.deletePersonHandler( index ) }} name={person.name} age={person.age} key={ person.id} changed = {(event)=>{this.nameChangeHandler(event,person.id)} } clikc1 = {this.state.otherState} />
         })}
        </div>
      )
      // style.backgroundColor = 'yellow'
      // style[ ':hover' ] = {
      //   backgroundColor: 'blue',
      //   color:'black'
      // }
    }
    const classes = []
    if ( this.state.person.length <= 2 ) {
      classes.push('red')
    }
    if ( this.state.person.length <= 1 ) {
      classes.push('bold')
    }
    
    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi'm React</h1>
        <p className = {classes.join(' ')}>this is really working</p>
        <StyledButton alt ={this.state.showPersons} onClick={this.togglePersonHandler}
        > hide me</StyledButton>
        {person}
        </div>
    )
  }
}
//this is javascript at the end this compiled to this code
//in the javascript object and the arrays are the reference type so this must to be considered
//when rendering a list of data describe default property that is key property so think about this
//we can'nt use the pseudo selector
//dealing the problems with pseudo selector
//anything is dynamically 
//className dynamically so here is think that 
//all pseudo selector must wrap in the quotation form so understand this logic 
 export default App ;
// export default Radium(App)
