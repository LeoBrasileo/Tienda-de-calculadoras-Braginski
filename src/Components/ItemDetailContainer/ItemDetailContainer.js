import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (({id}) => {
    const [item,setItem] = useState({});

    const getItemDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
            const allItems = [
                {
                    "id": 1,
                    "name": "Casio LC 403TV",
                    "price" : 3500,
                    "description": "modelo 2014",
                    "img": "https://maxihogar.vteximg.com.br/arquivos/ids/155466-1000-1000/Calculadora-Casio-LC-403TV.jpg?v=635603991040430000"
                },{
                    "id": 2,
                    "name": "Casio fx-991ES PLUS",
                    "price": 4500,
                    "description": "recomendada para la electronica",
                    "img": "https://www.casio-intl.com/product/image/1425458796018/"
                }];

            resolve(allItems.filter(item => item.id == id));
        },2*1000)
    });

    useEffect(() => {
        getItemDetail.then((response) => {
            setItem(response[0]);
        })
    }, {});
    return(
        <div className="item-detail-container">
            <ItemDetail name={item.name} img={item.img} price={item.price} description={item.description}></ItemDetail>
        </div>
    )
})

export default ItemDetailContainer;