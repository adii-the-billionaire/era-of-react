import React from 'react'
import classes from './Order.module.css'
const order = (props) => {
    return (
        <div className={classes.Order}>
            <p>Ingredients:</p>
            <p>Price:<strong>5rupay</strong></p>
        </div>
    )
}
export default order