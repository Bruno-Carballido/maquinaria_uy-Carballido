export const getItems = new Promise((resolve, reject) => {
    const items = [
        { id: 1, name: 'Cosechadora CASE', description: 'Cosechadora nueva.', stock: 5 },
        { id: 2, name: 'Tractor', description: 'Tractor amarillo nuevo.', stock: 10 },
        { id: 3, name: 'Enfardadora', description: 'Enfardadora Jhon Deere', stock: 15 }
    ]
    setTimeout(() => {
        resolve(items)
    }, 2000)
})