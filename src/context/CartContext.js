import { useState, createContext } from 'react'

const CartContext = ({ children }) => {
    const [contextSate, setContextSate] = useState([]);

    const isInCart = (itemId) => {
        let ret = false
        for (it in contextSate) {
            if (it.item.id == itemId) {
                ret = true
            }
        }
        return ret
    }

    const getItemQuantity = (itemId) => {
        let ret = 0
        for (it in contextSate) {
            if (it.item.id == itemId) {
                ret = it.quantity
            }
        }
        return ret
    }

    const removeItem = (itemId) => {
        let newContext = []
        for (it in contextSate) {
            if (it.item.id != itemId) {
                newContext.push(it)
            }
        }
        setContextSate(newContext)
    }

    const addItem = (item, quantity) => {
        let q = quantity
        if (isInCart(item.id)) {
            q = getItemQuantity(item.id + quantity)
            removeItem(item.id)
        }
        setContextSate([...contextSate, { item: item, quantity: q }])
        console.log(contextSate)
    }

    const clear = () => {
        setContextSate([])
    }

    return (
        <AppContext.Provider value={{ addItem, removeItem, clear, isInCart, contextSate, setContextSate }}>
            {children}
        </AppContext.Provider>
    )
}

export default CartContext;
export const AppContext = createContext();
