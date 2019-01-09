const express = require('express')
const app = express()

app.get('/', (req, res) => {
    //res.send('Hello World');

    let salida = {
        nombre: 'Mario',
        edad: 26,
        url: req.url
    }

    res.send(salida);
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
})