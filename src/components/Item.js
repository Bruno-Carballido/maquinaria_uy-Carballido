import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Item = ({ item }) => {
    return (
        <Col>
            <Card >
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {item.description}
                        <br />
                        <br />
                        <Button variant="secondary">Ver detalles del producto</Button>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Stock disponible: {item.stock}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default Item;