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


