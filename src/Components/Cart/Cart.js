import React, { useState, useEffect, useContext } from 'react';
import firebase from 'firebase';
import './Cart.css';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { getFirestore } from '../../firebase';

const Cart = () => {
    const { items } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);
    const { clear } = useContext(CartContext);
    const { getTotalPrice } = useContext(CartContext);
    const [finish, setFinish] = useState(false);

    const sendBuyOrder = () => {
      let email = document.querySelector('#input-mail').value;
      let name = document.querySelector('#input-name').value;
      let phone = document.querySelector('#input-phone').value;
      let newOrder = {
        buyer: {
          email,
          name,
          phone
        },
        items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: getTotalPrice(),
      };

      const db = getFirestore();
      const ordersCollection = db.collection("orders");
      const itemsCollection = db.collection("items");

      items.forEach(item => {
        var docItem = itemsCollection.doc(item.id);
        docItem.update({stock: item.stock - item.quantity}).then(() => {
          console.log("stock actualizado");
          removeItem(item.id);
        }).catch(e => {
          console.error(e);
        });
      });

      ordersCollection.add(newOrder).then(({ id }) => {
        alert(`Compra registrada correctamente, id: ${id}`);
      }).catch(e => {
        console.error(e);
      }).finally(() => {
        setFinish(false);
        clear();
        window.location.href = '/';
      });
    };

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
            { !finish && <button style={{'margin': '20px'}} className="btn btn-success" onClick={() => {setFinish(true);}}>Generar orden de compra</button>}
        </div> : 
        <div>
            <h1>No hay calculadoras en el carro</h1>
            <NavLink to='/'>
                Seguir navegando
            </NavLink>
        </div>
        }
        {finish &&
        <div className="finish-section container">
          <form>
            <div className="form-group row">
              <label for="input-mail" className="col-sm-2 col-form-label">Direccion de Email:</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="input-mail" aria-describedby="emailHelp"/>
              </div>
            </div>
            <div className="form-group row">
              <label for="input-name" className="col-sm-2 col-form-label">Nombre:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control email" id="input-name"/>
              </div>
            </div>
            <div className="form-group row">
              <label for="input-phone" className="col-sm-2 col-form-label">Telefono:</label>
              <div className="col-sm-10">
                <input type="number" className="form-control phone" id="input-phone"/>
              </div>
            </div>
            <button type="button" style={{'margin': '20px'}} className="btn btn-success" onClick={() => {sendBuyOrder();}}>Finalizar compra</button>
          </form>
        </div>
        }
    </>);
}

export default Cart;