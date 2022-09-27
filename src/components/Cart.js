import { AppContext } from '../context/CartContext'
import { useContext } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { getCantItems, getPrecioTotal, contextSate, removeItemContext } = useContext(AppContext);

    return (
        <Container className="pt-5">
            {getCantItems() > 0 ?
                <>
                    <Col xs={12} md={6}>
                        {contextSate.map(i =>
                            <Card className='mt-4'>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <img src={i.item.img} style={{ maxHeight: '10em' }} className="img-fluid" alt='Imagen producto' />
                                    </Col>
                                    <Col xs={12} md={5}>
                                        <div style={{ height: '100%' }} className="d-flex flex-grow-1 align-items-center">
                                            <p>
                                                <h5>{i.item.name}</h5>
                                                <br />
                                                <h6>Precio: {i.item.price}</h6>
                                                <h6>Cantidad: x{i.quantity}</h6>
                                            </p>
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
    );
}

export default Cart;