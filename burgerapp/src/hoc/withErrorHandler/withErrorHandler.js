import React, { Component } from 'react';
import Modal from '../../components/UI/MODAL/Modal'
import Aux from '../Auxiliary'
const withErrorHandler = ( WrappedComponent,axios ) => {
    return class extends Component {
        state = {
            error:null
        }
        constructor ( props ) {
            super(props)
            axios.interceptors.request.use( req => {
                this.setState( { error: null } )
                return req
            })
            axios.interceptors.response.use( res=>res,error => {
                this.setState({error:error})
            })
        }

        errorConfirmHandler = () => {
            this.setState({error:null})
        }

        render() {
            return (
            <Aux>
                    <Modal show = {this.state.error} modalClosed={this.errorConfirmHandler}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>
        )
        }
    }
}
export default withErrorHandler
//error before the child components wil rendered that's the logic