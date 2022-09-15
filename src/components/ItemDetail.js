import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import { Row, Card } from 'react-bootstrap';

const ItemDetail = ({ item }) => {
    console.log(item.img)
    return (
        <Row style={{maxHeight: '20em'}}>
            <div className="col-6">
                <img src={item.img} className="img-fluid" alt='Cosechadora'/>
            </div >
            <div className="col-6">
                <Card style={{height: '100%'}}>
                    <Card.Body>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <h3>{item.precio}</h3>
                    </Card.Body>
                </Card>
            </div>
        </Row>
    );
}

export default ItemDetail;