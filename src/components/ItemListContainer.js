import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useParams } from 'react-router-dom';
import { getItemByCategory, getItems } from "./getItems.js";
import ItemList from "./ItemList.js";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        if (idCategory) {
            getItemByCategory(idCategory).then((res) => {
                setItems(res)
            }).catch(() => {
                console.log('Items no encontrados')
            })
        } else {
            getItems().then((res) => {
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