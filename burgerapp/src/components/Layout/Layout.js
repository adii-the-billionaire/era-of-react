import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state = {
        showSideDrawer:true
    }
    sideCLosedHandler = () => {
        this.setState({showSideDrawer:false})
    }
    render() {
        return (
        <Aux>
                <Toolbar />
                <SideDrawer closed={this.sideCLosedHandler} open={this.state.showSideDrawer }/>
            <main className = {classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    )
    }
}
export default Layout