import React, { useState } from 'react';

const Item = (({id, img, name, price}) => {
    return(
        <div>
            <img src={img} width="50px" height="50px"/>
            <h6>{name}</h6>
        </div>
    )
})

export default Item;