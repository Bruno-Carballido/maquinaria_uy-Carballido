import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/CartContext';

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