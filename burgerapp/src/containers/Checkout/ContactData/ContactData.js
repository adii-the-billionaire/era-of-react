import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode:''
        }
    }
    
    orderHandler = (event) => {
        console.log( this.props.ingredients )
        //alert('You continue!');
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'adii',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '229412',
                    country: 'india'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false, purchasing: false } );
            } )
            .catch( error => {
                this.setState( { loading: false, purchasing: false } );
            } );
}

    render() { 
        return (
            <div className={classes.ContactData}>
                <h4>
                    Enter your Contact Data
                </h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="text" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
                    <input className={classes.Input} type="text" name="postalCode" placeholder="Your postalCode" />
                    <Button btnType = "Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}
 
export default ContactData;