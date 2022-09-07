import ItemCount from "./ItemCount.js";

const ItemListContainer = ({ mensaje }) => {
    return (
        <div>
            <p>Bienvenidos a la web</p>
            <ItemCount stock='5' initial='0' onAdd={(stock_disp, cantidad) => { if (stock_disp && cantidad > 0) { alert('Se han agregado ' + cantidad + ' de items al carrito.') } }} />
        </div>
    );
}

export default ItemListContainer;