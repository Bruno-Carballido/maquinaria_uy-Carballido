import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const bottomdiv = {
        background: '#cb694b',
        color: '#fff'
    }
    return (
        <Col >
            <Card >
                <Card.Body className='p-0'>
                    <img src={item.img} className="img-fluid" alt="img prod"></img>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col>
                            <h5>{item.name}</h5>
                            <small className="text-muted">Stock disponible: {item.stock}</small>
                        </Col>
                        <Col xs='auto' className='d-flex align-items-end flex-column'>
                            <Link className="btn mt-auto" style={bottomdiv} type='Button' to={'/item/' + item.id}>Detalles</Link>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default Item;