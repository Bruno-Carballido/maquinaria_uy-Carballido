import { createContext, useState } from 'react';

const CartContext = ({ children }) => {
    const [contextSate, setContextSate] = useState([]);

    const isInCart = (itemId) => {
        let ret = false
        for (let it of contextSate) {
            if (it && it.item.id == itemId) {
                ret = true
            }
        }
        return ret
    }

    const getItemQuantity = (itemId) => {
        let ret = 0
        for (let it of contextSate) {
            if (it && it.item.id == itemId) {
                ret = it.quantity
            }
        }
        return ret
    }

    const getCantItems = () => {
        let ret = 0
        for (let it of contextSate) {
            ret += it.quantity
        }
        return ret
    }

    const getPrecioTotal = () => {
        let ret = 0
        for (let it of contextSate) {
            let precio = it.item.price.split(' ')[1]
            ret += Number(precio) * (it.quantity)
        }
        return ret
    }

    const removeItemContext = (itemId) => {
        let newContext = []
        for (let it of contextSate) {
            if (it && it.item.id != itemId) {
                newContext.push(it)
            }
        }
        setContextSate(newContext)
        return newContext
    }

    const addItem = (item, quantity) => {
        let q = quantity
        if (contextSate && isInCart(item.id)) {
            q = getItemQuantity(item.id) + quantity
            let contx = removeItemContext(item.id)
            setContextSate([...contx, { item: item, quantity: q }])
        } else {
            setContextSate([...contextSate, { item: item, quantity: q }])
        }
    }

    const clear = () => {
        setContextSate([])
    }

    return (
        <AppContext.Provider value={{ addItem, removeItemContext, clear, isInCart, getCantItems, getPrecioTotal, contextSate, setContextSate }}>
            {children}
        </AppContext.Provider>
    )
}

export default CartContext;
export const AppContext = createContext();
