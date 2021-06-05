import React, { useState } from 'react';
import "./ItemCount.css"

export function ItemCount (props) {
    const [count,setCount] = useState(0);
    return(
        <div className="input-group mb-3">
          <button className="btn btn-outline-info" type="button" onClick={() => count != 0 ? setCount(count - 1) : alert("No se pueden tener items negativos")}>-</button>
          <input disabled type="number" className="item-counter" value={count} aria-label="Itmes count"/>
          <button className="btn btn-outline-info" type="button" onClick={() => (props.stock != count) ? setCount(count + 1) : alert("No hay mas stock")}>+</button>
        </div>
    )
}
