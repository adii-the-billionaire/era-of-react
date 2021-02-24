import React,{Component} from 'react';
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component {
    render() {
         const ingredientSummary = Object.keys( this.props.ingredients ).map( ( el ) => {
        return ( <li key={el}><span stylel={{ textTransform: 'capitalize' }}>{el}</span>:{this.props.ingredients[el]}</li>)
    })
        return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredient</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType ="Success" clicked = {this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
    }
}
export default OrderSummary