import ItemCount from "./ItemCount.js";
import React, { useState } from 'react';
import { Row, Card, Col } from 'react-bootstrap';

const ItemDetail = ({ item }) => {
    console.log(item)
    return (
        <Row style={{ maxHeight: '20em' }}>
            <Col xs={12} md={6}>
                <img src={item.img} className="img-fluid" alt='Imagen producto' />
            </Col >
            <Col xs={12} md={6}>
                <Card style={{ height: '100%' }}>
                    <Card.Body>
                        <h3>{item.name}</h3>
                        <hr />
                        <p className='pt-2 pb-3'>{item.description}</p>

                        <h4>Precio: {item.price}</h4>
                        <ItemCount stock={item.stock} initial='0' onAdd={(stock_disp, cantidad) => { if (stock_disp && cantidad > 0) { alert('Se han agregado ' + cantidad + ' de items al carrito.') } }} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default ItemDetail;