import React, { useState } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js';

export function ItemListContainer (props){
    const [items,setItems] = useState([]);
    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    "id": 1,
                    "name": "Casio LC 403TV",
                },{
                    "id": 2,
                    "name": "Casio fx-991ES PLUS"
                }]);
        },2*1000)
    });

    getItems.then(result => {
        setItems(result);
    });
    
    return(
        <div>
            <h5 className="card-tittle">{props.tittle}</h5>
            <p className="card-text">{props.message}</p>
            <ItemList items={items}></ItemList>
        </div>
    )
}