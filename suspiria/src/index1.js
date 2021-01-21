import React,{Component} from 'react'
class Tdo extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header name= "ciao"/>
                <Greeting/>
            </div>
         );
    }
}
class Header extends Component{
    render() {
        return (
            <header>
                <p>Welcome ,{ this.props.name}</p>
            </header>
        )
    }
}
class Greeting extends Component{
    render() {
        const data = new Date()
        const hours = data.getHours()
        let timdelay
        if ( hours < 12 ) {
            timdelay = "morning"
        } else if ( hours >= 12 && hours < 17 ) {
            timdelay = 'afternoon'
        } else {
            timdelay="night"
        }
        return (
            <h1>Good {timdelay} to you sir or madam</h1>
        )
    }
}
export default Tdo;