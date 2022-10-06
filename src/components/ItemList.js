import Row from 'react-bootstrap/Row';
import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <Row xs={1} md={3} className="g-4">
            {items.map(i => <Item key={i.id} item={i} />)}
        </Row>
    );
}

export default ItemList;