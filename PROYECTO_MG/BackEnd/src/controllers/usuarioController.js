const Usuario = require("../models/usuario");
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {

    try {
        let usuario;

        //Creamos nuestro proveedir
        usuario = new Usuario(req.body);

        const user = await Usuario.findOne({ nombreUsuario: usuario.nombreUsuario })

        const cedula = await Usuario.findOne({ cedula: usuario.cedula })

        if (cedula) return res.status(401).send("El usuario con esta cédula ya esta registrado.");

        if (user) return res.status(401).send("El usuario ya existe.");

        const token = jwt.sign({ _id: usuario._id }, 'secretKey');
        await usuario.save();
        res.send(usuario);
        res.status(200).json({ token })

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuarios = async (req, res) => {

    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuariosOrdenadosNombre = async (req, res) => {

    try {
        const usuarios = await Usuario.find().sort('nombre');
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuariosOrdenadosApellido = async (req, res) => {

    try {
        const usuarios = await Usuario.find().sort('apellido');
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuariosOrdenadosCedula = async (req, res) => {

    try {
        const usuarios = await Usuario.find().sort('cedula');
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuariosOrdenadosDireccion = async (req, res) => {

    try {
        const usuarios = await Usuario.find().sort('direccion');
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuariosOrdenadosNombreUsuario = async (req, res) => {

    try {
        const usuarios = await Usuario.find().sort('nombreUsuario');
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuariosOrdenadosRol = async (req, res) => {

    try {
        const usuarios = await Usuario.find().sort('rol');
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.actualizarUsuario = async (req, res) => {

    try {
        const { nombre, apellido, cedula, direccion, nombreUsuario, password, rol } = req.body;
        let usuario = await Usuario.findById(req.params.id);
        let usuario2 = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.cedula = cedula;
        usuario.direccion = direccion;
        usuario.nombreUsuario = nombreUsuario;
        usuario.password = password;
        usuario.rol = rol;

        const user = await Usuario.findOne({ nombreUsuario: usuario.nombreUsuario })

        const ced = await Usuario.findOne({ cedula: usuario.cedula })

        if (user && usuario2.nombreUsuario !== usuario.nombreUsuario) return res.status(401).send("El usuario ya existe.");

        if (ced && usuario2.cedula !== usuario.cedula) return res.status(401).send("El usuario con esta cédula ya esta registrado.");

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true })
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuario = async (req, res) => {

    try {

        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuario = async (req, res) => {

    try {

        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "Usuario eliminado con éxito" })


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}



exports.busquedaUsuario = async (req, res) => {

    try {

        let palabra;

        //Creamos nuestra busqueda
        palabra = req.params.busqueda;

        const usuarios1 = await Usuario.find({ nombre: palabra }).sort('nombre');

        if (JSON.stringify(usuarios1)!=='[]' ) {
            res.json(usuarios1);
            

        } else {
            const usuarios2 = await Usuario.find({ apellido: palabra }).sort('apellido');

            if (JSON.stringify(usuarios2)!=='[]' ) {
                res.json(usuarios2);
            } else {
                const usuarios3 = await Usuario.find({ cedula: palabra }).sort('cedula');

                if (JSON.stringify(usuarios3)!=='[]' ) {
                    res.json(usuarios3);
                } else {
                    const usuarios4 = await Usuario.find({ direccion: palabra }).sort('direccion');

                    if (JSON.stringify(usuarios4)!=='[]' ) {
                        res.json(usuarios4);
                    } else {
                        const usuarios5 = await Usuario.find({ nombreUsuario: palabra }).sort('nombreUsuario');

                        if (JSON.stringify(usuarios5)!=='[]' ) {
                            res.json(usuarios5);
                        } else {
                            const usuarios6 = await Usuario.find({ rol: palabra }).sort('rol');

                            if (JSON.stringify(usuarios6)!=='[]' ) {
                                res.json(usuarios6);
                            } else {
                                return res.json({ msg: 'No existen coincidencias' });
                            }
                        }
                    }
                }
            }


           
        }




    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}