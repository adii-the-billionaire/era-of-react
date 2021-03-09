import React from 'react'
import classes from './Order.module.css'
const order = ( props ) => {
    let ingredients = []
     for ( let key in props.ingredients ) {
         ingredients.push( {
             name: key,
             amount:props.ingredients[key]
         })
    }
    const ingredientsOutput = ingredients.map( ig => {
        return <span key = {ig.name}>{ig.name } ({ig.amount})</span>
    })
    return (
        <div className={classes.Order}>
            <p>{ ingredientsOutput}</p>
            <p>Price:<strong>{props.price }</strong></p>
        </div>
    )
}
export default order