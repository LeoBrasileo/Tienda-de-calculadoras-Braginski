import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../Context/CartContext/CartContext.js';

const Cart = () => {
    const { item } = useContext(CartContext);
    const { quantity } = useContext(CartContext);
    return(
        <h1>Vas a comprar {quantity} {item.name}</h1>
    );
}

export default Cart;