import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ defaultValue = [], children }) => {
    const [items, setItems] = useState(defaultValue);

    function addItem (value, qty) {
        value.quantity = qty;
        if (!isInCart(value.id)){
            setItems(items.concat([value]));
            console.log(`${value.name} agregado al carro`);
        }
        else {
            console.log("El item ya esta en el carro");
        }
    }

    function removeItem (itemId) {
        for (let i = 0; i < items.length; i++){
            if (items[i].id === itemId) {
                setItems(items.splice(i,1));
            }
        }
    }

    function clear () {
        setItems([]);
    }
    
    function isInCart (itemId) {
        return items.find(x => x.id === itemId);
    }

    function getTotalBuys () {
        let buy = 0;
        items.forEach(item => {
            if (item && item.quantity > 0){
                buy = buy + item.quantity;
            }
        });
        return buy;
    }

    return <CartContext.Provider value={{ items, addItem, removeItem, clear, isInCart, getTotalBuys }}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider;
