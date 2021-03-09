import React from 'react'
import classes from './Input.module.css'
const input = ( props ) => {
    let inputElement = null
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input onChange={props.changed} className={classes.inputElement}  {...props.elementConfig} value={props.value}/>
            break
        case ( 'textarea' ):
            inputElement = <textarea onChange={props.changed}className={classes.inputElement} {...props.elementConfig} value={props.value}/>
            break
        case ( 'select' ):
            inputElement = (
                <select onChange={props.changed}className={classes.inputElement} value={props.value}>
                 {props.elementConfig.options.map( option => {
                    return(<option key={option.value} value={option.value}>{ option.displayValue}</option>)
            })}
            </select>
            )
                break;
        default:
            inputElement = <input onChange={props.changed} className={classes.inputElement}  {...props.elementConfig} value={props.value}/>
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default input

