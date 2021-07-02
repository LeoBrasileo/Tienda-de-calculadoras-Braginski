import React, { useState, useContext } from 'react';
import Item from '../Item/Item.js';
import ItemCount from '../ItemCount/ItemCount.js';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext.js';

const ItemList = (({items}) => {
    const { addItem } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    return(
        <div className="items">
            {items.map((item, i) => {
                return(
                    <div className="card mb-3" key={i}>
                        <div className="card-body">
                        <Item key={i} id={item.id} name={item.name} img={item.img} price={item.price} description={item.description}></Item>
                        <ItemCount onAdd={() => { setQuantity(quantity + 1) }} onSubstract={() => { setQuantity(quantity - 1) }} stock={item.stock}></ItemCount>
                        <NavLink to="/cart">
                            <button className="btn btn-primary" onClick={() => {addItem(item, quantity);}}>Compra rapida</button>
                        </NavLink>
                        </div>
                    </div>
                );
            })}
        </div>
    )
})

export default ItemList;