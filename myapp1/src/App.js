import React, { Component } from 'react';
import './App.css';
import Person from './person';

class App extends Component {
  state = {
    person: [
      { name: 'Mia', age: 90 },
      { name: 'Shasha', age: 90 },
      { name: 'Grey', age: 90 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  switchHandler = ( event ) => {
    this.setState( {
      person: [
        { name: event, age: 90 },
        { name: 'sia', age: 90 },
        { name: 'tia', age: 90 }
      ]
    } )
  }
  nameChangeHandler = ( event ) => {
    this.setState( {
      person: [
        {id:'ajsj', name: 'mia', age: 90 },
        { id:'vajdj',name: 'sia', age: 90 },
        { id:'djdjd',name: event.target.value, age: 90 }
      ]
    } )
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let person = null
    if ( this.state.showPersons ) {
      person = (
        <div>
          {this.state.person.map( (person,index )=> {
            return <Person click={() => { this.deletePersonHandler( index ) }} name={person.name} age={person.age} key={ person.id}/>
         })}
        </div>
      )
    }
    return (
      <div className="App">
        <button style={style} onClick={() => { this.switchHandler( 'mahiyaaaa' ) }}>clickmeBaby</button>
        <button style={style} onClick={this.togglePersonHandler}
        > hide me</button>
        {person}
      </div>
    )
  }
}
//this is javascript at the end this compiled to this code
//in the javascript object and the arrays are the reference type so this must to be considered
//when rendering a list of data describe default property that is key property so think about this
export default App ;

