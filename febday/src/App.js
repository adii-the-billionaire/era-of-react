import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'tia', age: 28 },
      { name: 'nu', age: 29 },
      { name: 'Se', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = ( newName ) => {
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Mau', age: 29 },
        { name: 'nie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'Ma', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'e', age: 26 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map( ( data ) => {
            return <Person name={data.name} age={data.age }/>
          })}
        </div>
        )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App;

