import React from 'react'
import './ItemListContainer.css'

export function ItemListContainer (props){
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-tittle">{props.tittle}</h5>
                <p className="card-text">{props.message}</p>
            </div>
        </div>
    )
}