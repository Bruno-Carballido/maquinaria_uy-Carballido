import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount.js";
import ItemList from "./ItemList.js";
import { getItems } from "./getItems.js";

const ItemListContainer = ({ mensaje }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems.then((res) => {
            setItems(res)
        })
    },[])

    return (
        <Container>
            <p>{mensaje}</p>
            <ItemCount stock='5' initial='0' onAdd={(stock_disp, cantidad) => { if (stock_disp && cantidad > 0) { alert('Se han agregado ' + cantidad + ' de items al carrito.') } }} />
            <br />
            <ItemList items={items} />
        </Container>
    );
}

export default ItemListContainer;