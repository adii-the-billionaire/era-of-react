import React from 'react'
import Logo from '../../LOGO/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
const sideDrawer = ( props ) => {
    ///conditionally attach some css classes
    return (
        <div className = {classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}
export default sideDrawer