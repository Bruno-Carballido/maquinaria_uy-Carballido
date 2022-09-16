import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [valor, setValor] = useState(Number(initial))
    return (
        <div className="col-4 card">
            <div className="card-body">
                <InputGroup className="mb-3">
                    <Button onClick={() => { if (valor > 0) { setValor(valor - 1) } }} variant="outline-secondary">-</Button>
                    <Form.Control value={valor} readOnly style={{textAlign: 'center'}} />
                    <Button onClick={() => { if (valor < stock) { setValor(valor + 1) } }} variant="outline-secondary">+</Button>
                </InputGroup>
                <div className="d-flex justify-content-center">
                    <Button onClick={() => onAdd(stock, valor)} variant="outline-primary">Agregar al carrito</Button>
                </div>
            </div>
        </div >
    );
}

export default ItemCount;