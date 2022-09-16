import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import { getItems } from "./getItems.js";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { idItem } = useParams()

    useEffect(() => {
        if (idItem) {
            getItems.then((res) => {
                let itemFiltrado = res.filter(item => item.id === parseInt(idItem))
                if (itemFiltrado && (itemFiltrado.length == 1)) {
                    setItem(itemFiltrado[0])
                }
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