import React, { Component,Fragment} from 'react';
import classes from './Person.module.css'
import Auxilliary from '../../../hoc/Auxilliary'
import withClass from '../../../hoc/WithClass'
import PropTypes from 'prop-types'
class Person extends Component{
    render() {
        console.log('[Person.js] rendering ....')
        return (
        <Auxilliary>
        <p key="i1" onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} year old</p>
            <p key="i2" >{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} ></input>
        </Auxilliary>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func
}

export default withClass(Person,classes.Person)

