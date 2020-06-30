import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'

import Aux from '../src/hoc/Auxiliary'
import HomeScreen from './Container/Screen/HomeScreen'
import ProductScreen from './Container/Screen/ProductScreen'
import CartScreen from './Container/Screen/CartScreen';
import SigninScreen from './Container/Screen/SigninScreen';
import RegisterScreen from './Container/Screen/RegisterScreen';
import ProductsScreen from './Container/Screen/ProductsScreen';
import ShippingScreen from './Container/Screen/ShippingScreen';
import PaymentScreen from './Container/Screen/PaymentScreen';
import PlaceOrderScreen from './Container/Screen/PlaceOrderScreen';
import ProfileScreen from './Container/Screen/ProfileScreen';


class App extends Component {

  
  render() {
    return (
      <Aux>
        <BrowserRouter>
          <Route path="/products" exact={true} component={ProductsScreen}/>
          <Route path="/shipping" component={ShippingScreen}/>
          <Route path="/payment" component={PaymentScreen}/>
          <Route path="/placeorder" component={PlaceOrderScreen}/>
          <Route path="/signin" component={SigninScreen}/>
          <Route path="/profile" component={ProfileScreen }/>
          <Route path="/register" component={RegisterScreen}/>
          <Route path="/products/:id"  component={ProductScreen}/>
          <Route path="/cart/:id?" component={CartScreen}/>
          <Route path="/" exact={true} component={HomeScreen} />
          
         
        </BrowserRouter>
      </Aux>
    );
  }
}

export default App;
