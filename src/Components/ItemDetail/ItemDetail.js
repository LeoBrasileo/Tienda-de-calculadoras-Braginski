import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import {CartContext} from '../../Context/CartContext/CartContext.js';
import { NavLink } from 'react-router-dom';

const ItemDetail = (({item, id, img, name, description, price, stock}) => {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useContext(CartContext);
    const { isStockAvailable } = useContext(CartContext);

    const onAdd = () => {
        setQuantity(quantity + 1);
    };
    const onSubstract = () => {
        setQuantity(quantity - 1);
    };
    const buy = () => {
        if (isStockAvailable(item.id, quantity)){
            document.querySelector("#finish").classList.remove("hide");
            document.querySelector("#finish2").classList.remove("hide");
            document.querySelector("#finish-text").classList.remove("hide");
            document.querySelector(".input-group").classList.add("hide");
            document.querySelector("#buy").classList.add("hide");
            addItem(item, quantity);
        }else {
            alert("Ya se encuentra todo el stock de este producto en el carro")
        }
    };

    return(
        <div>
            <h1>{name}</h1>
            <img src={img} width="300px" height="300px"/>
            <label></label>
            <div>{description}</div>
            <h5>$ {price}</h5>

            <div id="buying-section">
                <ItemCount id="itemCount" stock={stock} onAdd={() => onAdd()} onSubstract={() => onSubstract()}></ItemCount>
                <button type="button" id="buy" className="btn btn-primary" onClick={() => buy()}>Comprar</button>
                <NavLink to="/">
                    <button type="button" id="finish2" className="btn btn-secondary hide">Seguir navegando</button>
                </NavLink>
                <NavLink to="/cart">
                    <button type="button" id="finish" className="btn btn-success hide">Al carrito</button>
                </NavLink>
                <span id="finish-text" className="hide"> {quantity} unidades</span>
            </div>
        </div>
    )
})

export default ItemDetail;