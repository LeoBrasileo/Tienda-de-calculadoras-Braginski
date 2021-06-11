import React, { useState } from 'react';

const ItemDetail = (({id, img, name, description, price}) => {
    return(
        <div>
            <img src={img} width="70px" height="70px"/>
            <label></label>
            <div>{description}</div>
            <h5>$ {price}</h5>
        </div>
    )
})

export default ItemDetail;