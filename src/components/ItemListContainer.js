import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import ItemList from "./ItemList.js";
import { useParams } from 'react-router-dom';
import { getItems } from "./getItems.js";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        if (idCategory) {
            getItems.then((res) => {
                setItems(res.filter(item => item.categoryId === parseInt(idCategory)))
            })
        } else {
            getItems.then((res) => {
                setItems(res)
            })
        }
    }, [idCategory])

    return (
        <Container className="pt-5">
            <ItemList items={items} />
        </Container>
    );
}

export default ItemListContainer;