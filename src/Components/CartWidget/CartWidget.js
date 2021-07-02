import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Context/CartContext/CartContext.js';

export function CartWidget () {
    const { items } = useContext(CartContext);
    const { getTotalBuys } = useContext(CartContext);

    return (<>
        {(getTotalBuys() > 0) && <div className="btn" title="ShoppingCart">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span>{getTotalBuys()}</span>
        </div>}
    </>);
}