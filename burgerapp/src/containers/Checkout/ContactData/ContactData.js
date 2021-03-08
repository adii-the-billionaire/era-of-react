import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/INPUT/Input'
import { element } from 'prop-types'
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your Name'
                },
                value:''
            },
            
            street: {
                 elementType: 'input',
                 elementConfig: {
                    type: 'text',
                    placeholder:'Street'
                },
                value:''
            },
            
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your Name'
                },
                value:''
                },
                
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Country'
                },
                value:''
            },

            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder:'Your email'
                },
                value:''
            },
      
            deliveryMethod: {
                 elementType: 'select',
                 elementConfig: {
                     option: [ {
                         value: 'fastest', displayValue: 'Fastest'
                     },
                         {
                             value: 'cheapest',
                             displayValue:'Cheapest'
                     }]
                },
                value:''
            }
        },
        loading:false
    }
    
    orderHandler = (event) => {
        console.log( this.props.ingredients )
        //alert('You continue!');
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false, purchasing: false } )
                this.props.history.push('/')
            } )
            .catch( error => {
                this.setState( { loading: false, purchasing: false } );
            } );
}

    render() {
        const formElementsArray = []
        for ( let key in this.state.orderForm ) {
            formElementsArray.push( {
                id: key,
                config:this.state.orderForm[key] 
            })
        }
        let form = (
             <form>
                {formElementsArray.map( formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value }/>
                ))}
                    <Button btnType = "Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        )
        if ( this.state.loading ) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>
                    Enter your Contact Data
                </h4>
               {form}
            </div>
        );
    }
}
 
export default ContactData;
//one way is wrap the contact data withrouter
//second is passing props
