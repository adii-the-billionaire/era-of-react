import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import withClass from '../hoc/WithClass'
import Auxilliary from '../hoc/Auxilliary'
import AuthContext from '../context/auth-context'
class App extends Component {
  constructor ( props ) {
    super( props )
    console.log(
      '[App.js] constructor'
    )
  }
  state = {
    person: [
      { id:'djdjdj', name: 'Mia', age: 90 },
      {
        id:'dkdkdk', name: 'Shasha', age: 90
      },
      {id:'djdjdjd', name: 'Grey', age: 90 }
    ],
    otherState: '',
    showPersons: false,
    shotCockpit: true,
    changeCounter: 0,
    authenticated:false
  }

  static getDerivedStateFromProps( props,state ) {
    console.log( '[App.js] getDerivedStateFromProps', props )
    return state
  }

  componentDidMount() {
    console.log('[App.js] component did mount')
  }

  shouldComponentUpdate() {
    console.log( '[App.js] shouldComponentUpDate' )
    return true
  }

  componentDidUpdate() {
    console.log('[App.js]  componentDidUpdate')
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
    this.setState( (prevState,props)=> {
    return {  person: person2,
        changeCounter: this.state.changeCounter + 1
       } 
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
 
  loginHandler = () => {
  this.setState({authenticated:true})
}

  render() {
    console.log('[App.js] render')
    let person = null
    if ( this.state.showPersons ) {
      person = (
        <div>
          <Persons persons={this.state.person}
            clicked={this.deletePersonHandler }
            changed={this.nameChangeHandler}
            isAuthenticated = {this.state.authenticated}
          />
        </div>
      )
    }
    return (
      <Auxilliary>
        <button onClick={() => {
          this.setState({shotCockpit:false})
        }}>Remove Cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
        login:this.loginHandler}}>
        {this.state.shotCockpit ? (
          <Cockpit showPersons={this.state.showPersons} personsLength={this.state.person.length} tipa={this.togglePersonHandler} title={this.props.title}
            />
        ):null}
          {person}
          </AuthContext.Provider>
        </Auxilliary>
    )
  }
}
export default withClass(App,classes.App) ;
//export default Radium(App)
