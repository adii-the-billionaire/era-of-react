import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/MODAL/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 1,
    meat: 1,
    bacon:1
}
class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing:false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys( ingredients ).map( ( el ) =>{
            return ingredients[el]///this is our amount of ingredient
        } ).reduce( ( sum, el ) => {
            return sum+el
        },0)
        this.setState( { purchasable: sum > 0 } )
        
}

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[ type ]
        const updatedCounted = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[ type ] = updatedCounted
        const priceAddition = INGREDIENT_PRICES[ type ]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } )
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[ type ]
        if ( oldCount <= 0 ) {
            return
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[ type ] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[ type ]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } )
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler=()=> {
        this.setState({purchasing:true})
    }
     
    render() { 
        const disabledInfo = {
            ...this.state.ingredients
        }
        for ( let key in disabledInfo ) {
            disabledInfo[key]= disabledInfo[key]<=0
        }
        return ( 
            <Aux>
                <div>
                    Burger
                </div>
                <Burger ingredients={ this.state.ingredients}/>
                <div>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler }/>
                </div>
                <div>
                    <Modal show = {this.state.purchasing}>
                        <OrderSummary ingredients={ this.state.ingredients}/>
                    </Modal>
                </div>
                
            </Aux>
         ); 
    }
}
 
export default BurgerBuilder;