import React, { Component } from "react";
class Counter extends Component {
    state = {
        count: 0,
        
    }
    render() {
        React.createElement('h1')
        return (<React.Fragment>
            <span>{ this.state.count}</span>
            <button>increment</button>
        </React.Fragment>
        )
    }
}

export default Counter