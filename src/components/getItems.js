import { getFirestore } from '../firebase';

export const getItems = async () => {
    return await new Promise((resolve, reject) => {
        const db = getFirestore();
        const itemCollection = db.collection("items");

        itemCollection.get().then((queySnapshot) => {
            if (queySnapshot.size === 0) {
                reject('Items does not exists!');
            }
            resolve(queySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }).catch((error) => {
            console.log("Error", error);
            reject('Error');
        })
    })
}

export const getItemById = async (idItem) => {
    return await new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemCollection = db.collection("items");
        const item = itemCollection.doc(idItem);

        item.get().then((doc) => {
            if (doc.exists) {
                resolve({ id: doc.id, ...doc.data() });
            }
            reject('Item does not exists!'); //console.log('Item does not exists!');
        }).catch((error) => {
            console.log("Error", error);
            reject('Error');
        })
    })
}

export const getItemByCategory = async (idCategory) => {
    return await new Promise((resolve, reject) => {
        const db = getFirestore();
        let categoryId = Number(idCategory);
        if (isNaN(categoryId)) {
            reject('Id incorrecto');
        }
        const itemCollection = db.collection("items");
        const category = itemCollection.where('categoryId', '==', categoryId);

        category.get().then((queySnapshot) => {
            if (queySnapshot.size === 0) {
                reject('Items does not exists!');
            }
            resolve(queySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }).catch((error) => {
            console.log("Error", error);
            reject('Error');
        })
    })
}