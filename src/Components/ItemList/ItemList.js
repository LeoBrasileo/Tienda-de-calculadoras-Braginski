import React, { useState } from 'react';
import Item from '../Item/Item.js';

const ItemList = (({items}) => {
    return(
        <div className="items">
            {items.map((item, i) => {
                return(
                    <div className="item" key={i}>
                        <Item key={i} id={item.id} name={item.name} img={item.img}></Item>
                    </div>
                );
            })}
        </div>
    )
})

export default ItemList;