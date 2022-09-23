import { useState, createContext } from 'react'

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

    const removeItemContext = (itemId) => {
        let newContext = []
        for (let it of contextSate) {
            if (it && it.item.id != itemId) {
                newContext.push(it)
            }
        }
        return newContext
    }

    const addItem = (item, quantity) => {
        let q = quantity
        console.log(contextSate)
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
        <AppContext.Provider value={{ addItem, removeItemContext, clear, isInCart, contextSate, setContextSate }}>
            {children}
        </AppContext.Provider>
    )
}

export default CartContext;
export const AppContext = createContext();
