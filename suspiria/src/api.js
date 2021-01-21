import React, { Component } from 'react'
class Api extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            data: {},
            loading:false
        }
    }
    componentDidMount() {
        this.setState( { loading: !this.state.loading } )
        fetch( 'https://swapi.co/api/people' ).then( response => response.json() ).then( data => {
            this.setState({
                loading: false,
                data:data
            })
        })
    }
    render() { 
        const text  = this.state.loading?'Loading.....':this.state.data.name
        return ( 
            <div>
                {text}
            </div>
         );
    }
}
 
export default Api;