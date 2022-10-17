import * as firebase from 'firebase/app';
import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/CartContext';
import { addItemcart } from './addItemCart';

const Cart = () => {
    const { getCantItems, getPrecioTotal, contextSate, removeItemContext, clear } = useContext(AppContext);

    const navigate = useNavigate();

    const [idCompra, setIdCompra] = useState('')
    const [btnComprar, setBtnComprar] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')

    const handleModalClose = () => {
        setShowModal(false)
        navigate('/')
    }
    const handleModalShow = () => setShowModal(true);

    const handleInputName = event => {
        setNombre(event.target.value);
    };
    const handleInputTel = event => {
        setTel(event.target.value);
    };
    const handleInputEmail = event => {
        setEmail(event.target.value);
    };

    const comprar = () => {
        setBtnComprar(true)
        let datosItems = []
        for (let i of contextSate) {
            datosItems.push({
                id: i.item.id,
                name: i.item.name,
                price: i.item.price
            })
        }
        let newOrder = {
            buyer: {
                name: nombre,
                phone: tel,
                email: email
            },
            items: datosItems,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: getPrecioTotal()
        }
        // console.log(newOrder)
        addItemcart(newOrder).then((id) => {
            setIdCompra(id)
            setNombre('')
            setTel('')
            setEmail('')
            clear()
            handleModalShow()
        }).catch(() => {
            console.log('Error al guardar')
        })
    }

    return (
        <>
            <Container className="pt-5">
                {getCantItems() > 0 ?
                    <>
                        <Row className='pt-4'>
                            <Col xs={12} md={6}>
                                <Card className="p-5">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control onChange={(e) => { handleInputName(e) }} type="text" placeholder="Ingresa tu nombre" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicTel">
                                            <Form.Label>Telefono</Form.Label>
                                            <Form.Control onChange={(e) => { handleInputTel(e) }} type="text" placeholder="Ingresa tu número de telefono" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicMail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control onChange={(e) => { handleInputEmail(e) }} type="text" placeholder="Ingresa tu email" />
                                        </Form.Group>
                                        <Button disabled={btnComprar} variant="primary" className='mt-4' onClick={() => { comprar() }} type="button">
                                            Comprar
                                        </Button>
                                    </Form>
                                </Card>
                            </Col>
                            <Col xs={12} md={6}>
                                {contextSate.map(i =>
                                    <Card key={i.item.id}>
                                        <Row>
                                            <Col xs={12} md={4}>
                                                <img src={i.item.img} style={{ maxHeight: '10em' }} className="img-fluid ms-4 mt-2 mb-2" alt='Imagen producto' />
                                            </Col>
                                            <Col xs={12} md={5}>
                                                <div style={{ height: '100%' }} className="d-flex flex-grow-1 align-items-center">
                                                    <span>
                                                        <h5>{i.item.name}</h5>
                                                        <br />
                                                        <h6>Precio: {i.item.price}</h6>
                                                        <h6>Cantidad: x{i.quantity}</h6>
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={3}>
                                                <div style={{ height: '100%' }} className="d-flex flex-grow-1 align-items-center">
                                                    <Button onClick={() => { removeItemContext(i.item.id) }} variant="outline-danger">Eliminar</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                )}
                            </Col>

                        </Row>
                        <h3 className='pt-5'>Precio total: USD {getPrecioTotal()}</h3>
                    </>
                    :
                    <>
                        <p><b>No hay productos agregados</b></p>
                        <Link type='Button' className="btn btn-secondary " to='/'>
                            Volver al Landing
                        </Link>
                    </>
                }
            </Container>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Orden guardada, su ID de compra es: <br/><br/><b>{idCompra}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Volver al inicio
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Cart;