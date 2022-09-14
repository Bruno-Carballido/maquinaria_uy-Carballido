import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import { getItem } from "./getItem.js";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        getItem.then((res) => {
            setItem(res)
            return (
                <ItemDetail item={item}/>
            );
        })
    },[item])
}

export default ItemDetailContainer;