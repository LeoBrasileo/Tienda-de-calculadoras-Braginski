import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext.js';

const Cart = () => {
    const { items } = useContext(CartContext);
    return(
        <h1>Vas a comprar {items[0].name}</h1>
    );
}

export default Cart;