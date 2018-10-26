import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripePayments extends Component {
    render(){
        return(
            <StripeCheckout 
                name="Emaily"
                description="Get 5 email credits for US$ 5"
                amount={500} // cents
                token={token => console.log("StripeToken:",token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
}

export default StripePayments;