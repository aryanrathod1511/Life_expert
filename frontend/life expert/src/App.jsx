import React from 'react';

import {Route,Routes, BrowserRouter as Router} from 'react-router-dom';

import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import SignupMaster from './pages/SignupMaster.jsx';
import SignupUser from './pages/SignupUser.jsx';
import SubscriptionPlan from './pages/subscriptionPlan.jsx';
import Checkout from './pages/Checkout.jsx';
import CheckoutComponent from './components/CheckoutComponent.jsx';
import MainPage from './pages/mainPage.jsx';


function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/auth/login" element = {<LoginPage/>}/>
        <Route path="/auth/signup/user" element = {<SignupUser/>}/>
        <Route path="/auth/signup/master" element = {<SignupMaster/>}/>
        <Route path="/user/subscriptionPlans" element = {<SubscriptionPlan/>}/>
        <Route path="/user/subscriptionPlans/monthly" element = {<Checkout planType="monthly"/>}/>
        <Route path="/user/subscriptionPlans/half_yearly" element = {<Checkout planType="half_yearly"/>}/>
        <Route path="/user/mainPage" element = {<MainPage/>}/>
         
      </Routes>
   </Router>
  )
}
export default App;