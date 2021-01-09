import React,{Component} from 'react'
import Person from './Person/person'
class Persons extends Component{
   static getDerivedStateFromProps( props, state ) {
      console.log('[Perosns.js] getDerivedStateFromProps')
      return state
   }
   shouldComponentUpdate( nextProps, nextState ) {
      console.log('[Person.js] shouldComponentUpdate')
      return true
   }
   getSnapshotBeforeUpdate(prevProps,prevState) {
      console.log('[Person.js] getSnapShotBeforeUpdate')
   }
   componentDidUpdate() {
      console.log('[Perosns.js] componentDidUpdate')
   }
   render() {
      console.log('[Person.js] rendering ...')
      return (
         this.props.persons.map( ( person, index ) => {
            return (
               <Person
                  click={() => this.props.clicked( index )}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={event =>this.props.changed(event,person.id)}
               />
            )
         })
      )
   }
}  
export default Persons
 