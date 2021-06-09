import React from 'react'
import './ItemListContainer.css'
import { Item } from '../Item/Item.js';
import { ItemCount } from '../ItemCount/ItemCount.js';
import { ItemList } from '../ItemList/ItemList.js';

export function ItemListContainer (props){
    const onAdd = () => {alert("llamado a onAdd")}
    const onSubstract = () => {alert("llamado a onSubstract")}
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-tittle">{props.tittle}</h5>
                <p className="card-text">{props.message}</p>
                <ItemCount stock="5" onAdd={() => onAdd()} onSubstract={() => onSubstract()}></ItemCount>
            </div>
        </div>
    )
}