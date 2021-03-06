import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import loadingLogo from '../../assets/loading.gif';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from '../../firebase';

const ItemDetailContainer = (() => {
    const [item, setItem] = useState({});
    const [isLoading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const dbItem = itemCollection.doc(itemId);

        dbItem.get().then((doc) => {
            if (doc.size === 0){
                console.log("No hay resultados");
            }
            setItem({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    }, {});
    
    return(
        <div className="item-detail-container">
            <>{ isLoading ? <img src={loadingLogo}/> :
            <ItemDetail item={item} name={item.name} img={item.img} price={item.price} description={item.description} stock={item.stock}></ItemDetail> }</>
        </div>
    )
})

export default ItemDetailContainer;