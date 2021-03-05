import React from 'react';
import {withRouter} from 'react-router-dom'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'
const burger = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients ).map( igKey => {
        return [ ...Array( props.ingredients[ igKey ] ) ].map( ( _, i ) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        })
    } ).reduce( ( arr, el ) => {
        return arr.concat(el)
    },[]) 
    
    if ( transformedIngredients.length === 0 ) {
    transformedIngredients = <p>Plz start adding ingredient</p>
}

console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default withRouter(burger)