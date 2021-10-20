const express = require('express')
const conectarDB = require('./config/db')

//creamos el servidor

const app = express();

//Conectamos a la BD
conectarDB();

app.use('/api/productos', require('./routes/producto'));

//Definimos ruta principal
/*app.get('/', (req, res)=>{
    res.send('Hola mundo');
})*/

app.listen(4000, () =>{
    console.log('El servidor esta corriendo perfectamente');
})