import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';

const ItemDetail = ({ item }) => {
    return (
        <div className="col-2 card">
           Algo
           <h1>{item.name}</h1>
           <img src={item.img} className="img-fluid" alt='Cosechadora'/>
           <p>{item.description}</p>
           <h3>{item.precio}</h3>
        </div >
    );
}

export default ItemDetail;