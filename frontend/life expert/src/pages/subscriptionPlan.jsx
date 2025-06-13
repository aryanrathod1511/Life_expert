import * as React from 'react';
import SubscriptionComponent from '../components/SubscriptionComponent.jsx';

export default function SubscriptionPlan(){


    return (
        <div className="container">
            <div className ="main-content" style={{height:'100vh', width:'100vw'}}>
                <h3 style={{textAlign:'center', marginBottom:'20px'}}>Choose the plan that elevates your experience </h3>
                <SubscriptionComponent/>
            </div>
        </div>
    )
}