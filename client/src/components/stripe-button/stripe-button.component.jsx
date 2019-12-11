import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_eP3rts9uyFngEfv71cfhUc3p00a4CeTYoU';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful!')
        }).catch(error => {
            console.log("Payment Error: ", JSON.parse(error));
            alert("There was an error with your payment. Please use the provided credit card information.")
        }) 
        
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Byte of Knowledge Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;