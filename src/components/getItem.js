export const getItem = new Promise((resolve, reject) => {
    const item = { id: 1, name: 'Cosechadora CASE', description: 'Cosechadora nueva.', foto: 'https://assets.cnhindustrial.com/caseih/NAFTA/NAFTAASSETS/Products/Harvesting/Corn-Heads/4408/7140_Combine_with_4408_Corn_Head_Cutaway_09-14.jpg', precio:'USD 30.000' }

    setTimeout(() => {
        resolve(item)
    }, 2000)
})