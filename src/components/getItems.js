export const getItems = new Promise((resolve, reject) => {
    const items = [
        { id: 1, img: 'https://www.maquinaria.com.uy/191-large_default/fertilizadora-fertec-f-5000-set-line-data-line-serie-6.jpg', price: 'USD 5500', categoryId: 1, name: 'Cosechadora Fertilizadora Fertec F 5000', description: ' La versión Set Line se configura a partir de un equipo con sistema de dosificación mecánico, proporcional al avance por rueda de mando, y sistema de distribución impulsado por toma de potencia. A esta base se pueden incorporar una gran cantidad de elementos tecnológicos y accesorios.', stock: 5 },
        { id: 2, img: 'https://www.maquinaria.com.uy/190-large_default/fertilizadora-fertec-f-3500-set-line-data-line-serie-6.jpg', price: 'USD 3500', categoryId: 1, name: 'Fertilizadora Fertec F 3500', description: 'La versión Set Line se configura a partir de un equipo con sistema de dosificación mecánico, proporcional al avance por rueda de mando, y sistema de distribución impulsado por toma de potencia. A esta base se pueden incorporar una gran cantidad de elementos tecnológicos y accesorios.', stock: 10 },
        { id: 3, img: 'https://www.maquinaria.com.uy/134-large_default/segadora.jpg', price: 'USD 4000', categoryId: 1, name: 'Segadora', description: 'Segadora usada, marca DEUTZ-FAHR', stock: 15 },
        { id: 4, img: 'https://www.maquinaria.com.uy/120-large_default/generador-portatil-mg5.jpg', price: 'USD 2300', categoryId: 2, name: 'Generador Portatil MG5', description: "GENERADORES PORTATILES Modelos MG Fabricado por WACKER NEUSON Alemania en China Generadores económicos ofrecen energía fiable en el lugar de trabajo", stock: 15 },
        {
            id: 5, img: 'https://www.maquinaria.com.uy/204-large_default/carro-de-fardo-4x800.jpg', price: 'USD 3500', categoryId: 2, name: 'Carro De Fardo 4x800', description: '* Capacidad: 4 fardos de 800kg\
        * 1 eje\
        * Rodado: 12.5 L15', stock: 100
        },
        {
            id: 6, img: 'https://www.maquinaria.com.uy/217-large_default/distribuidro-de-silo-11-m3.jpg', price: 'USD 5000', categoryId: 2, name: 'Distribuidro De Silo 1.1 M3', description: 'Pala cargadora y distribuidora de silo, para 3 puntos de tractor. \
        * Cuenta con pateador y tornillo sin fin para la descarga lateral. \
        * Accionamiento totalmente hidráulico\
        Realice todo el trabajo con el mismo implemento y desde la comodidad de la cabina del tractor.', stock: 20
        },
        { id: 7, img: 'https://www.maquinaria.com.uy/140-large_default/shell-helix-hx5-15w40.jpg', price: 'USD 150', categoryId: 3, name: 'SHELL HELIX HX5 15W40', description: 'API SN - ACEA A3/B3', stock: 10 },
        { id: 8, img: 'https://www.maquinaria.com.uy/147-large_default/shell-rimula-r3-turbo-15w40.jpg', price: 'USD 146', categoryId: 3, name: 'SHELL RIMULA R3 TURBO 15W40', description: 'API CH-4 - ACEA E2 - MB 228.1 - VDS - CAT ECF-1-A', stock: 100 },
        { id: 9, img: 'https://www.maquinaria.com.uy/139-large_default/shell-helix-hx7-sp-10w40.jpg', price: 'USD 87', categoryId: 3, name: 'SHELL HELIX HX7 SP 10W40', description: 'Tecnología sintética -API SP - ACEA A3/B3/B4 - MB 229.3', stock: 50 },
    ]
    setTimeout(() => {
        resolve(items)
    }, 2000)
})