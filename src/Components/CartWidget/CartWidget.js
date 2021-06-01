import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export function CartWidget () {
    return (
        <button className="btn " title="ShoppingCart">
            <FontAwesomeIcon icon={faShoppingCart}/>
        </button>
    )
}