import React,{Component} from 'react';
import list from './list'
import Baby from './list2'
class Sia extends Component {
    constructor () {
        super()
        this.state = {
            person:list
        }
    this.handler = this.handler.bind(this)
    }
    handler(id) {
        console.log( 'id', id )
        this.setState( prevState =>{
            const value = prevState.person.map( ( list ) => {
                if ( list.id === id ) {
                    list.completed = !list.completed
                }
                return list
            } )
            return {
                person:value
            }
        })
    }
    render() {
        const person = this.state.person.map( ( list ) => <Baby id={list.id} completed={list.completed} text={list.task} tip={this.handler}/>)
     return (
         <div>
             {person}
         </div>
    )
    }
}
export default Sia

