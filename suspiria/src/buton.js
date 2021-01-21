import React, { Component } from 'react'
class Button extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isLoggedIn:false
        }
        this.handlerClick = this.handlerClick.bind(this)
    }
    handlerClick() {
        this.setState( prevState => {
            return {
                isLoggedIn:prevState.isLoggedIn
            }
        })
    }
    render() { 
        let buttonText = this.state.isLoggedIn ? 'Log Out' : 'Log In'
        let displayText = this.state.isLoggedIn?'Loggin':'Logged Out'
        return (  
            <div>
                <button onClick={this.handlerClick}>{buttonText}
                </button>
                <h1>
                    {displayText }</h1>
            </div>
        );
    }
}
 
export default Button;