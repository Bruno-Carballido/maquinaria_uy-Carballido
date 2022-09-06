import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [valor, setValor] = useState(0)
    return (
        <div className="col-1">
            <InputGroup className="mb-3">
                <Button onClick={() => { if (valor > 0) { setValor(valor - 1) } }} variant="outline-secondary">-</Button>
                <Form.Control value={valor} readOnly />
                <Button onClick={() => { if (valor < stock) { setValor(valor + 1) } }} variant="outline-secondary">+</Button>
            </InputGroup>
        </div >
    );
}

export default ItemCount;