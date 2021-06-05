import React from 'react'
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount.js';

export function ItemListContainer (props){
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-tittle">{props.tittle}</h5>
                <p className="card-text">{props.message}</p>
                <ItemCount stock="5"></ItemCount>
            </div>
        </div>
    )
}