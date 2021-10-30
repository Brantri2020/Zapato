const { Router } = require('express');
const router = Router();


const Usuario = require('../models/usuario');

const jwt = require('jsonwebtoken');



const proveedorController = require('../controllers/proveedorController');
const usuarioController = require('../controllers/usuarioController');

/// Proveedores
router.post('/proveedores', proveedorController.crearProveedor);
router.get('/proveedores', proveedorController.obtenerProveedores);
router.put('/proveedores/:id', proveedorController.actualizarProveedor);
router.get('/proveedores/:id', proveedorController.obtenerProveedor);
router.delete('/proveedores/:id', proveedorController.eliminarProveedor);

/// Usuarios
router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios', usuarioController.obtenerUsuarios);
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.get('/usuarios/:id', usuarioController.obtenerUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);


/*
router.post('/registro', async (req, res) => {
    const { usuario, password } = req.body;

    const newUser = new Usuario({ usuario, password });
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, 'secretKey');
    res.status(200).json({ token })

});
*/

router.post('/login', async (req, res) => {
    const { nombre, password } = req.body;
    

    const user = await Usuario.findOne({ nombreUsuario: nombre })
    
    if (!user) return res.status(401).send("El usuario no existe");
    if (user.password !== password) return res.status(401).send('Contraseña incorrecta');
    
    let nombres = user.nombre + " " + user.apellido 
    const token = jwt.sign({ _id: user._id }, 'secretKey');
    return res.status(200).json({ token, nombres});
});

router.get('/tasks', (req,res)=>{
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem',
            date : "2021-10-22T15:19.211Z"
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem',
            date : "2021-10-20T15:19.211Z"
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem',
            date : "2021-10-21T15:19.211Z"
        }
    ])
})

router.get('/private-tasks', verifyToken, (req,res)=>{
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem',
            date : "2021-10-22T15:19.211Z"
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem',
            date : "2021-10-20T15:19.211Z"
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem',
            date : "2021-10-21T15:19.211Z"
        }
    ])
})

module.exports = router;

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorize request');
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token == 'null'){
        return res.status(401).send('Unthorize request');
    }

    const payload = jwt.verify(token, 'secretKey')
    req.userId = payload._id;
    next();
}