import React,{Component} from 'react';
import list from './list'
import Baby from './list2'
class Sia extends Component {
    constructor () {
        super()
        this.state = {
            person: list,
            topi:false
        }
        this.handler = this.handler.bind( this )
        this.bam = this.handler.bind(this)
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
    bam() {
        this.setState( prevstate => {
            
            return {
                topi:prevstate.topi
            }
        })
    }
    render() {
        let p = false
        if ( p===this.state.person ) {
            p ='login'
        } else if ( p !== this.state.person ) {
            p = 'logout'
        }
        const person = this.state.person.map( ( list ) => <Baby id={list.id} completed={list.completed} text={list.task} tip={this.handler}/>)
     return (
         <div>
             {person}
             <button onClick={this.bam}>{ p}</button>
             
         </div>
    )
    }
}
export default Sia
//make a button after clicking show login nd logout

