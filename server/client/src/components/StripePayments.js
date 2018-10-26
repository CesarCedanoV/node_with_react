import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripePayments extends Component {
    render(){
        debugger;
        return(
            <StripeCheckout 
                amount={500} // cents
                token={token => console.log("StripeToken:",token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default StripePayments;