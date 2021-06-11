import React, { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.js';
import { ItemCount } from '../ItemCount/ItemCount.js';

const ItemList = (({items}) => {
    const onAdd = () => {console.log("llamado a onAdd")}
    const onSubstract = () => {console.log("llamado a onSubstract")}
    return(
        <div className="items">
            {items.map((item, i) => {
                return(
                    <div className="card" key={i}>
                        <div className="card-body">
                        <h6>{item.name}</h6>
                        <ItemDetailContainer key={i} id={item.id}></ItemDetailContainer>
                        <ItemCount stock="5" onAdd={() => onAdd()} onSubstract={() => onSubstract()}></ItemCount>
                        </div>
                    </div>
                );
            })}
        </div>
    )
})

export default ItemList;