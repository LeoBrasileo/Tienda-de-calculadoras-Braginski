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
        setItems(items.filter((item) => {
            return item.id !== itemId;
        }))
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

    function getTotalPrice () {
        let price = 0;
        items.forEach(item => {
            if (item && item.quantity > 0){
                price = price + (item.quantity * item.price);
            }
        });
        return price;
    }

    return <CartContext.Provider value={{ items, addItem, removeItem, clear, isInCart, getTotalBuys, getTotalPrice }}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider;
