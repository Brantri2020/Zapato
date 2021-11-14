const Proveedor = require("../models/proveedor");

exports.crearProveedor = async (req, res) => {

    try {
        let proveedor;

        //Creamos nuestro proveedir
        proveedor = new Proveedor(req.body);



        const cedula = await Proveedor.findOne({ cedula: proveedor.cedula })

        if (cedula) return res.status(401).send("El proveedor con esta cédula ya esta registrado.");




        await proveedor.save();
        res.send(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedores = async (req, res) => {

    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}



exports.obtenerProveedoresOrdenadosNombre = async (req, res) => {

    try {
        const proveedores = await Proveedor.find().sort('nombre');
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosApellido = async (req, res) => {

    try {
        const proveedores = await Proveedor.find().sort('apellido');
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerProveedoresOrdenadosCedula = async (req, res) => {

    try {
        const proveedores = await Proveedor.find().sort('cedula');
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosCuenta = async (req, res) => {

    try {
        const proveedores = await Proveedor.find().sort('numeroCuenta');
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosPlazo = async (req, res) => {

    try {
        const proveedores = await Proveedor.find().sort('diasPlazo');
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosTelefono = async (req, res) => {

    try {
        const proveedores = await Proveedor.find().sort('telefono');
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosRecibo = async (req, res) => {

    try {
        const proveedores = await Proveedor.find().sort({ 'recibo': '-1' });
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosBanco = async (req, res) => {

    try {
        const proveedores = await Proveedor.find().sort('banco');
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.actualizarProveedor = async (req, res) => {

    try {
        const { nombre, apellido, cedula, numeroCuenta, diasPlazo, telefono, recibo, banco } = req.body;
        let proveedor = await Proveedor.findById(req.params.id);
        let proveedor2 = await Proveedor.findById(req.params.id);

        if (!proveedor) {
            res.status(404).json({ msg: 'No existe el proveedor' })
        }
        proveedor.nombre = nombre;
        proveedor.apellido = apellido;
        proveedor.cedula = cedula;
        proveedor.numeroCuenta = numeroCuenta;
        proveedor.diasPlazo = diasPlazo;
        proveedor.telefono = telefono;
        proveedor.recibo = recibo;
        proveedor.banco = banco;

        const ced = await Proveedor.findOne({ cedula: proveedor.cedula })


        if (ced && proveedor2.cedula !== proveedor.cedula) return res.status(401).send("El proveedor con esta cédula ya esta registrado.");



        proveedor = await Proveedor.findOneAndUpdate({ _id: req.params.id }, proveedor, { new: true })
        res.json(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedor = async (req, res) => {

    try {

        let proveedor = await Proveedor.findById(req.params.id);

        if (!proveedor) {
            res.status(404).json({ msg: 'No existe el proveedor' })
        }

        res.json(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProveedor = async (req, res) => {

    try {

        let proveedor = await Proveedor.findById(req.params.id);

        if (!proveedor) {
            res.status(404).json({ msg: 'No existe el proveedor' })
        }

        await Proveedor.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "Proveedor eliminado con éxito" })


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.busquedaProveedor = async (req, res) => {

    try {

        let palabra;

        //Creamos nuestra busqueda
        palabra = req.params.busqueda;

        const proveedores1 = await Proveedor.find({ nombre: palabra }).sort('nombre');

        if (JSON.stringify(proveedores1)!=='[]' ) {
            res.json(proveedores1);
            

        } else {
            const proveedores2 = await Proveedor.find({ apellido: palabra }).sort('apellido');

            if (JSON.stringify(proveedores2)!=='[]' ) {
                res.json(proveedores2);
            } else {
                const proveedores3 = await Proveedor.find({ cedula: palabra }).sort('cedula');

                if (JSON.stringify(proveedores3)!=='[]' ) {
                    res.json(proveedores3);
                } else {
                    const proveedores4 = await Proveedor.find({ numeroCuenta: palabra }).sort('numeroCuenta');

                    if (JSON.stringify(proveedores4)!=='[]' ) {
                        res.json(proveedores4);
                    } else {
                        const proveedores5 = await Proveedor.find({ diasPlazo: palabra }).sort('diasPlazo');

                        if (JSON.stringify(proveedores5)!=='[]' ) {
                            res.json(proveedores5);
                        } else {
                            const proveedores6 = await Proveedor.find({ telefono: palabra }).sort('telefono');

                            if (JSON.stringify(proveedores6)!=='[]' ) {
                                res.json(proveedores6);
                            } else {
                                const proveedores7 = await Proveedor.find({ recibo: palabra }).sort('recibo');

                                if (JSON.stringify(proveedores7)!=='[]' ) {
                                    res.json(proveedores7);
                                } else {
                                    const proveedores8 = await Proveedor.find({ banco: palabra }).sort('banco');

                                    if (JSON.stringify(proveedores8)!=='[]' ) {
                                        res.json(proveedores8);
                                    } else {
                                        console.log('Sigo aqui')
                                        return res.json({ msg: 'No existen coincidencias' });
                                        
                                    }
                                }
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