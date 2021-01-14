import React,{Component} from 'react'
import Person from './Person/person'
class Persons extends Component{
   shouldComponentUpdate( nextProps, nextState ) {
      console.log( '[Person.js] shouldComponentUpdate' )
      if ( nextProps.persons !== this.props.persons ) {
         return true
      } else {
         return false
      }
   }
   getSnapshotBeforeUpdate(prevProps,prevState) {
      console.log( '[Person.js] getSnapShotBeforeUpdate' )
      return {message:'snaphot'}
   }
   componentDidUpdate(prevProps,prevState,snapshot) {
      console.log( '[Perosns.js] componentDidUpdate' )
      console.log(snapshot)
   }
   componentWillUnmount() {
      console.log('[Perosns.js] componentWillUnmount')
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
 