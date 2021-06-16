import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = (({id, img, name, description, price}) => {
    return(
        <div>
            <h6>{name}</h6>
            <Link to={`/item/${id}`}>
                <img src={img} width="70px" height="70px"/>
            </Link>
            <label></label>
            <h5>$ {price}</h5>
        </div>
    )
})

export default Item;