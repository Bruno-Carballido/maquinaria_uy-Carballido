import { getFirestore } from '../firebase';

export const addItemcart = async (newOrder) => {
    return await new Promise((resolve, reject) => {
        const db = getFirestore();
        const orders = db.collection("orders");

        orders.add(newOrder).then(({ id }) => {
            resolve(id)
        }).catch((error) => {
            console.log("Error", error);
            reject('Error');
        })
    })
}