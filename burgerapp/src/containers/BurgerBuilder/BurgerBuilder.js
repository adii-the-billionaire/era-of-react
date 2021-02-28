import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/MODAL/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders.js'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 1,
    meat: 1,
    bacon:1
}
class BurgerBuilder extends Component {
    state = {
        ingredients:null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error:null
    }

    componentDidMount() {
        axios.get( 'https://desi-burger-e2c90-default-rtdb.firebaseio.com/.json' ).then( response => {
            this.setState( { ingredients: response.data } )
        } ).catch( e => {
        this.setState({error:true})
    })
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
     
    purchaseCancelHandler = () => {
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = () => {
        this.setState({loading:true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'adi',
                address: {
                    street: '91street',
                    zipcode: '213457',
                    country:'GERMANY'
                },
                email:'adiishukla196@gmail.com'
            },
            deliveryMethod:'fastest'
        }
        //alert('continue or nt')
        axios.post( '/orders.json', order ).then( response => this.setState( { loading: false,purchasing:false } ) ).catch( e => {
            this.setState({loading:false,purchasing:false})
        })
    }

    render() { 
        const disabledInfo = {
            ...this.state.ingredients
        }
        for ( let key in disabledInfo ) {
            disabledInfo[key]= disabledInfo[key]<=0
        }
        let orderSummary = null
        let burger = this.state.error ? <h1 style={{ textAlign: "center"}}>Ingredients can't be load</h1>: <Spinner/>
        if ( this.state.ingredients ) {
            burger = (
               <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
            ) 
            orderSummary =<OrderSummary ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler} purchaseContinued={this.purchaseContinueHandler} /> 
        }
 
        if ( this.state.loading ) {
              orderSummary = <Spinner/>
        } 
        return ( 
            <Aux>
                 <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                        {orderSummary}
                </Modal>
                {burger}
            </Aux>
         ); 
    }
}
 
export default withErrorHandler( BurgerBuilder, axios )
//how to handle error during fetching data from the server