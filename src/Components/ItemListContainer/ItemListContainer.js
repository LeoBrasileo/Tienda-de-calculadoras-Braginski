import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.js';

const ItemListContainer = (() => {
    const [items,setItems] = useState([]);
    const { categoryId } = useParams();

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            const allItems = [
                {
                    "id": 1,
                    "stock": 3,
                    "categoryId": 1,
                    "name": "Casio LC 403TV",
                    "price" : 3500,
                    "description": "modelo 2014",
                    "img": "https://maxihogar.vteximg.com.br/arquivos/ids/155466-1000-1000/Calculadora-Casio-LC-403TV.jpg?v=635603991040430000"
                },{
                    "id": 2,
                    "categoryId": 1,
                    "stock": 30,
                    "name": "Casio fx-991ES PLUS",
                    "price": 4500,
                    "description": "recomendada para la electronica",
                    "img": "https://www.casio-intl.com/product/image/1425458796018/"
                },{
                    "id": 3,
                    "categoryId": 2,
                    "stock": 4,
                    "name": "Helect H-1002B",
                    "price": 5000,
                    "description": "lo mejor en calculadoras con graficadora",
                    "img": "https://images-na.ssl-images-amazon.com/images/I/715UfY0pOoL._AC_SL1500_.jpg"
                },
                {
                    "id": 4,
                    "categoryId": 3,
                    "stock": 9,
                    "name": "Calculadora Grafica Hp 49g",
                    "price": 1020,
                    "description": "Recomendada por oceanografos",
                    "img": "https://images-na.ssl-images-amazon.com/images/I/414K6FZ1P9L._AC_.jpg"
                }];
            if (!categoryId){
                resolve(allItems);
            }
            else{
                resolve(allItems.filter(item => item.categoryId == categoryId));
            }
        },50)
    });

    useEffect(() => {
        getItems.then(result => {
            setItems(result);
        });
    },categoryId);
    return(
        <div>
            <ItemList items={items}></ItemList>
        </div>
    )
})

export default ItemListContainer