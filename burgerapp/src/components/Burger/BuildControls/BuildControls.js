import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    {label:'Cheese',type:'cheese'}
]
const buildControls = ( props ) => {
    return ( <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2) }</strong></p>
        {controls.map( ( ctrl ) => {
            return <BuildControl key={ctrl.label} label={ctrl.label}
                added={() => props.ingredientAdded( ctrl.type )}
                remove={() => { props.ingredientRemove( ctrl.type ) }}
                disabled={props.disabled[ctrl.type] }/> 
        })}
    </div>)
}
export default buildControls