import React from 'react'
import Logo from '../../LOGO/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/BACKDROP/Backdrop'
import Aux from '../../../hoc/Auxiliary'
const sideDrawer = ( props ) => {
    ///conditionally attach some css classes
    let attachedClass = [ classes.SideDrawer, classes.Close ]
    if ( props.open ) {
        attachedClass =[classes.SideDrawer,classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={ props.closed}/>
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}
export default sideDrawer