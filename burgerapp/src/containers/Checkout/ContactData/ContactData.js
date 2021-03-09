import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/INPUT/Input'
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
                     options: [ {
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
    
    orderHandler = () => {
        console.log( this.props.ingredients )
        //alert('You continue!');
        this.setState( { loading: true } );
        const formData = {}
        for ( let formElementIndentifier in this.state.orderForm ) {
            formData[formElementIndentifier] =this.state.orderForm[formElementIndentifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData:formData
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

    inputChangedHandler = (event,inputIdentifier) => {
        console.log( event.target.value )
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = { ...updatedOrderForm[ inputIdentifier ] }
        updatedFormElement.value = event.target.value
        updatedOrderForm[ inputIdentifier ] = updatedFormElement
        this.setState({orderForm:updatedOrderForm})
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
             <form onSubmit={this.orderHandler}>
                {formElementsArray.map( formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={ (event)=>this.inputChangedHandler(event,formElement.id)}/>
                ))}
                    <Button btnType = "Success" >ORDER</Button>
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
