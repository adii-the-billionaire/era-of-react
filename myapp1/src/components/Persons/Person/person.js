import React, { Component,Fragment} from 'react';
import classes from './Person.module.css'
import Auxilliary from '../../../hoc/Auxilliary'
import withClass from '../../../hoc/WithClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'
class Person extends Component{
    constructor (props) {
        super( props )
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount() {
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated)
    }
    render() {
        console.log('[Person.js] rendering ....')
        return (
            <Auxilliary>
                
                  {this.context.authenticated?<p>Authenticated</p>:<p>please login</p>}  
                
        <p key="i1" onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} year old</p>
            <p key="i2" >{this.props.children}</p>
                <input key="i3"
                    type="text"
                    ref={this.inputElementRef  } onChange={this.props.changed} value={this.props.name} ></input>
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

