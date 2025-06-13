import CheckoutComponent from '../components/CheckoutComponent.jsx';
import * as React from 'react';
import plans from '../data/plans';

export default function Checkout({ planType }) {
    console.log(planType);
    return (
        <div className="container">
            <div className="main-content" style={{height:'100vh'}}>
                <h3 style={{textAlign:'center', marginBottom:'20px'}}>Confirm Your Subscription</h3>
               
                <CheckoutComponent
                    planType={planType} 
                    price={plans.find(plan => plan.planType === planType)?.price} 
                    user={{ name: "John Doe", email: "john@example.com" }}
                />
                
            </div>
        </div>
    )
}
