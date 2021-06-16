import React, { useState } from 'react';

const ItemDetail = (({id, img, name, description, price}) => {
    return(
        <div>
            <h1>{name}</h1>
            <img src={img} width="300px" height="300px"/>
            <label></label>
            <div>{description}</div>
            <h5>$ {price}</h5>
        </div>
    )
})

export default ItemDetail;