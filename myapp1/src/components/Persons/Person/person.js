import React, { Component} from 'react';
import classes from './Person.module.css'
class Person extends Component{
    static getDerivedStateFromProps( props, state ) {
        console.log('[Person.js] getDerivedState')
        return state
    }
    shouldComponentUpdate( nextProps, nextState ) {
        console.log('[Person.js] shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate')
    }
    componentDidUpdate() {
        console.log('[Perons.js]  componentDidUpdate')
    }
    render() {
        console.log('[Person.js] rendering ....')
       return ( <div className={classes.Person}>
            <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} year old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.Click1} ></input>
            <button >clickme</button>
        </div>)
    }
}
export default Person

