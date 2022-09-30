import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import { getItemById } from "./getItems.js";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { idItem } = useParams()

    useEffect(() => {
        if (idItem) {
            getItemById(idItem).then((res) => {
                setItem(res)
            }).catch(() => {
                console.log('Item no encontrado')
            })
        }
    }, [idItem])
    return (
        <Container className="pt-5">
            <ItemDetail item={item} />
        </Container>
    );
}

export default ItemDetailContainer;