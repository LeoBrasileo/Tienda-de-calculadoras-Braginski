import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    const { items } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);
    const { getTotalPrice } = useContext(CartContext);
    return(<>
        {(items.length > 0) ? <div>
            {items.map( (item, i) => {
                return(
                    <div className="card mb-3" style={{'maxWidth': '540px'}}>
                      <div className="row no-gutters">
                        <div className="col-md-5">
                          <img src={item.img} className="card-img"/>
                          <div className="btn-area">
                            <button className="btn" onClick={() => { removeItem(item.id) }}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </div>
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text"><small className="text-muted">{item.quantity} * ${item.price}</small></p>
                            <p className="card-text">Precio total: ${item.quantity * item.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                );
            })}
            <div className="alert card alert-primary">
                Precio total: ${getTotalPrice()}
            </div>
        </div> : 
        <div>
            <h1>No hay calculadoras en el carro</h1>
            <NavLink to='/'>
                Seguir navegando
            </NavLink>
        </div>
        }
    </>);
}

export default Cart;