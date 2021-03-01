import React from 'react';
import './Cart.css'

const Cart = (props) => {
       
        const cart = props.cart;
     
       let totalPopulation = 0;     
//  for (let i = 0; i < cart.length; i++) {
//      const country = cart[i];
//      totalPopulation = totalPopulation + country.population;
//  }
// this is reduce function 
    totalPopulation = cart.reduce((sum, country) => sum + country.population ,0);
    return (
        <div>
           <h3>This is Cart : {cart.length}</h3>
           <h3> Total Population : {totalPopulation}</h3>
        </div>
    );
};

export default Cart;