const { Router } = require('express');
const router = Router();


const Usuario = require('../models/usuario');


const jwt = require('jsonwebtoken');



const proveedorController = require('../controllers/proveedorController');
const usuarioController = require('../controllers/usuarioController');
const inventarioController = require('../controllers/inventarioController');

/// Proveedores
router.post('/proveedores', proveedorController.crearProveedor);
router.get('/proveedores', proveedorController.obtenerProveedores);

//ordenar proveedores
router.get('/proveedores/Nombre', proveedorController.obtenerProveedoresOrdenadosNombre);
router.get('/proveedores/Apellido', proveedorController.obtenerProveedoresOrdenadosApellido);
router.get('/proveedores/Cedula', proveedorController.obtenerProveedoresOrdenadosCedula);
router.get('/proveedores/Cuenta', proveedorController.obtenerProveedoresOrdenadosCuenta);
router.get('/proveedores/Plazo', proveedorController.obtenerProveedoresOrdenadosPlazo);
router.get('/proveedores/Telefono', proveedorController.obtenerProveedoresOrdenadosTelefono);
router.get('/proveedores/Recibo', proveedorController.obtenerProveedoresOrdenadosRecibo);
router.get('/proveedores/Banco', proveedorController.obtenerProveedoresOrdenadosBanco);

router.put('/proveedores/:id', proveedorController.actualizarProveedor);
router.get('/proveedores/:id', proveedorController.obtenerProveedor);
router.delete('/proveedores/:id', proveedorController.eliminarProveedor);
//buscar proveedor
router.get('/proveedores/busqueda/:busqueda', proveedorController.busquedaProveedor);

/// Usuarios
router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios', usuarioController.obtenerUsuarios);
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.get('/usuarios/:id', usuarioController.obtenerUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

//ordenar usuarios
router.get('/usuarios2/Nombre', usuarioController.obtenerUsuariosOrdenadosNombre);
router.get('/usuarios2/Apellido', usuarioController.obtenerUsuariosOrdenadosApellido);
router.get('/usuarios2/Cedula', usuarioController.obtenerUsuariosOrdenadosCedula);
router.get('/usuarios2/Direccion', usuarioController.obtenerUsuariosOrdenadosDireccion);
router.get('/usuarios2/NombreUsuario', usuarioController.obtenerUsuariosOrdenadosNombreUsuario);
router.get('/usuarios2/Rol', usuarioController.obtenerUsuariosOrdenadosRol);

//buscar usuarios
router.get('/usuarios/busqueda/:busqueda', usuarioController.busquedaUsuario);


/// inventario
router.post('/productos', inventarioController.crearInventario);
router.get('/productos', inventarioController.obtenerInventarios);
router.put('/productos/:id', inventarioController.actualizarInventario);
router.get('/productos/:id', inventarioController.obtenerInventario);
router.delete('/productos/:id', inventarioController.eliminarInventario);

//ordenar productos
router.get('/productos2/Codigo', inventarioController.obtenerProductosOrdenadosCodigo);
router.get('/productos2/Descripcion', inventarioController.obtenerProductosOrdenadosDescripcion);
router.get('/productos2/Talla', inventarioController.obtenerProductosOrdenadosTalla);
router.get('/productos2/Stock', inventarioController.obtenerProductosOrdenadosStock);
router.get('/productos2/PrecioUnitario', inventarioController.obtenerProductosOrdenadosPrecioUnitario);
router.get('/productos2/Proveedor', inventarioController.obtenerProductosOrdenadosProveedor);




//buscar inventario
router.get('/productos/busqueda/:busqueda', inventarioController.busquedaInventario);


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
    if (user.password !== password) return res.status(401).send('Contrase??a incorrecta');
    
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