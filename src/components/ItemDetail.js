import ItemCount from "./ItemCount.js";
import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/CartContext'
import { Row, Card, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const {addItem} = useContext(AppContext);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const agregarCarrito = (stock_disp, cantidad) => {
        if (stock_disp && cantidad > 0) {
            addItem(item, cantidad)
            // setCantidad(cantidad)
            handleModalShow()
            // alert('Se han agregado ' + cantidad + ' de items al carrito.') 
        }
    }
    return (
        <>
            <Row style={{ maxHeight: '20em' }}>
                <Col xs={12} md={6}>
                    <img src={item.img} className="img-fluid" alt='Imagen producto' />
                </Col >
                <Col xs={12} md={6}>
                    <Card style={{ height: 'auto' }}>
                        <Card.Body>
                            <h3>{item.name}</h3>
                            <hr />
                            <p className='pt-2 pb-3'>{item.description}</p>

                            <h4>Precio: {item.price}</h4>
                            <br />
                            {cantidad == 0 && <ItemCount stock={item.stock} initial='0' onAdd={agregarCarrito} />}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Se ha{cantidad > 1 ? 'n' : ''} agregado {cantidad} producto{cantidad > 1 ? 's' : ''} al carrito!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Seguir comprando
                    </Button>
                    <Link to="/cart">
                        <Button variant="primary">
                            Ir al carrito
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ItemDetail;