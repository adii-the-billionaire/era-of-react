import React from 'react';
import Aux from '../../../hoc/Auxiliary'
const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys( props.ingredients ).map( ( el ) => {
        return ( <li key={el}><span stylel={{ textTransform: 'capitalize' }}>{el}</span>:{props.ingredients[el]}</li>)
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredient</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}
export default orderSummary