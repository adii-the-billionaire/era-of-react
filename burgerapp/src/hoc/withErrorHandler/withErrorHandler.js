import React from 'react';
import Modal from '../../components/UI/MODAL/Modal'
import Aux from '../Auxiliary'
const withErrorHandler = ( WrappedComponent ) => {
    return ( props ) => {
        return (
            <Aux>
                <Modal></Modal>
                <WrappedComponent {...props}/>
            </Aux>
        )
    }
}
export default withErrorHandler