import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.js';
import { getFirestore } from '../../firebase';

const ItemListContainer = (() => {
    const [items,setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = categoryId ? db.collection("items").where('categoryId', '==', parseInt(categoryId)) : db.collection("items");

        itemCollection.get().then((snapshot) => {
            setItems(snapshot.docs.map(doc => doc.data()));
        }).catch((error) => {
            console.error(error);
        })
    },categoryId);
    return(
        <div>
            <ItemList items={items}></ItemList>
        </div>
    )
})

export default ItemListContainer