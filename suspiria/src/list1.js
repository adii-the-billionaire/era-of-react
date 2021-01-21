import React,{Component} from 'react';
import list from './list'
import Baby from './list2'
class Sia extends Component {
    constructor () {
        super()
        this.state = {
            person:list
        }
    }
    render() {
        const person =this.state.person.map( ( list ) => <Baby id ={list.id} completed={list.completed} text={list.task }/>)
     return (
         <div>
             {person}
         </div>
    )
    }
}
export default Sia
