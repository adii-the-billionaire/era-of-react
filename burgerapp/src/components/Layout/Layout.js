import React from 'react';
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
const Layout = ( props ) => {
    return (
        <Aux>
            <div><Toolbar/></div>
            <main className = {classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}
export default Layout