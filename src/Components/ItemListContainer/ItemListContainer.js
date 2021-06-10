import React, { useState } from 'react';
import './ItemListContainer.css'
import Item from '../Item/Item.js';
import { ItemCount } from '../ItemCount/ItemCount.js';
import ItemList from '../ItemList/ItemList.js';

export function ItemListContainer (props){
    const onAdd = () => {alert("llamado a onAdd")}
    const onSubstract = () => {alert("llamado a onSubstract")}
    const [items,setItems] = useState([]);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    "name": "Casio LC 403TV",
                    "img": "https://maxihogar.vteximg.com.br/arquivos/ids/155466-1000-1000/Calculadora-Casio-LC-403TV.jpg?v=635603991040430000"
                }]);
        },2*1000)
    });

    promise.then(result => {
        setItems(result);
    });
    
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-tittle">{props.tittle}</h5>
                <p className="card-text">{props.message}</p>
                <ItemList items={items}></ItemList>
                <ItemCount stock="5" onAdd={() => onAdd()} onSubstract={() => onSubstract()}></ItemCount>
            </div>
        </div>
    )
}