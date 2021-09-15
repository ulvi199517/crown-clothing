import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ja5oICGipMf0dDjcPBNyNeGyfkuY8cxyrve2cu00WLqBtktaAFpB8WIXGTL00U4hS4n4DdCB6SSIupeLuM7azHZ00lXPyvPgx';
    
    const onToken = token => {
        console.log(token);
        alert('Payment was Successful');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            panelLabel='Pay Now'
            name='Crown-Clothing Ltd.'
            billingAddress
            shippingAddress
            currency='USD'
            amount={priceForStripe}
            image='https://svgshare.com/i/CUz.svg' 
            token={onToken}
            description={`Your total is $${price}`}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;
