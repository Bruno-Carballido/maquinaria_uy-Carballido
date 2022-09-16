import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({ cantItems }) => {
    return (
        <Nav.Link href="#carrito">
            <FontAwesomeIcon icon={faCartShopping} /> Carrito ({cantItems})
        </Nav.Link>
    );
}

export default CartWidget;