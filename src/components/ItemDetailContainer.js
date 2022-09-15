import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import { getItem } from "./getItem.js";
import { Container } from "react-bootstrap";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        getItem.then((res) => {
            setItem(res)
           
        })
    },[item])
    return (
        <Container>
            <ItemDetail item={item}/>
        </Container>
    );
}

export default ItemDetailContainer;