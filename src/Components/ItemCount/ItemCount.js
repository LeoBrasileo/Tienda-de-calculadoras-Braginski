import React, { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({stock, onAdd,onSubstract}) => {
    const [count,setCount] = useState(1);
    return(
        <div className="input-group mb-3">
          <button className="btn btn-outline-info" type="button" onClick={count > 1 ? () => {setCount(count - 1); onSubstract()} : () => alert("No se pueden tener 0 items")}>-</button>
          <input disabled type="number" className="item-counter" value={count} aria-label="Items count"/>
          <button className="btn btn-outline-info" type="button" onClick={(stock > count) ? () => {setCount(count+1); onAdd()} : () => {alert("No hay mas stock")}}>+</button>
        </div>
    );
}

export default ItemCount