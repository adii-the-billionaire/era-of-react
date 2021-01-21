import React, { Component } from 'react'
class Button extends Component {
    constructor () {
        super()
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
        const buttonText = this.state.isLoggedIn ? 'Log Out' : 'Log In'
        const displayText = this.state.isLoggedIn?'Loggin':'Logged Out'
        return (  
            <div>
                <button>{buttonText}
                </button>
                <h1>
                    {displayText }</h1>
            </div>
        );
    }
}
 
export default Button;