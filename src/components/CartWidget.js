import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from '../context/CartContext'
import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

const CartWidget = () => {

    const { getCantItems } = useContext(AppContext);

    const links = {
        textDecoration: 'initial',
        color: 'initial'
    }
    return (
        <>
            {getCantItems() > 0 && <NavLink type='Button' className="btn btn-outline " style={links} to='/cart'>
                <FontAwesomeIcon icon={faCartShopping} /> Carrito ({getCantItems()})
            </NavLink>}
        </>
    );
}

export default CartWidget;