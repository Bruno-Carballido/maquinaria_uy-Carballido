import ItemCount from "./ItemCount.js";

const ItemListContainer = ({ mensaje }) => {
    return (
        <div>
            <p>Bienvenidos a la web</p>
            <ItemCount stock='5' initial='0' />
        </div>
    );
}

export default ItemListContainer;