import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/INPUT/Input'
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode:''
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
                this.setState( { loading: false, purchasing: false } )
                this.props.history.push('/')
            } )
            .catch( error => {
                this.setState( { loading: false, purchasing: false } );
            } );
}

    render() {
        let form = (
             <form>
                    <Input inputtype="input" type="text" name="name" placeholder="Your name" />
                    <Input inputtype="input" type="text" name="email" placeholder="Your email" />
                    <Input inputtype="input" type="text" name="street" placeholder="Your street"/>
                    <Input inputtype="input" type="text" name="postalCode" placeholder="Your postalCode" />
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
