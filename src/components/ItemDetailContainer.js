import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getItemById } from "./getItems.js";
import ItemDetail from "./ItemDetail.js";

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