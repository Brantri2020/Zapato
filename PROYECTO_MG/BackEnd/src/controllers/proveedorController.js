const Proveedor = require("../models/proveedor");

exports.crearProveedor = async (req,res) =>{
    
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

exports.obtenerProveedores = async (req,res) =>{
    
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}



exports.obtenerProveedoresOrdenadosNombre = async (req,res) =>{
    
    try {
        const proveedores = await Proveedor.find().sort('nombre');
        res.json(proveedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosApellido = async (req,res) =>{
    
    try {
        const proveedores = await Proveedor.find().sort('apellido');
        res.json(proveedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerProveedoresOrdenadosCedula = async (req,res) =>{
    
    try {
        const proveedores = await Proveedor.find().sort('cedula');
        res.json(proveedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosCuenta = async (req,res) =>{
    
    try {
        const proveedores = await Proveedor.find().sort('numeroCuenta');
        res.json(proveedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosPlazo = async (req,res) =>{
    
    try {
        const proveedores = await Proveedor.find().sort('diasPlazo');
        res.json(proveedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosTelefono = async (req,res) =>{
    
    try {
        const proveedores = await Proveedor.find().sort('telefono');
        res.json(proveedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosRecibo = async (req,res) =>{
    
    try {
        const proveedores = await Proveedor.find().sort({'recibo':'-1'});
        res.json(proveedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedoresOrdenadosBanco = async (req,res) =>{
    
    try {
        const proveedores = await Proveedor.find().sort('banco');
        res.json(proveedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.actualizarProveedor = async (req,res) =>{
    
    try {
        const { nombre, apellido,cedula, numeroCuenta, diasPlazo, telefono, recibo, banco } = req.body; 
        let proveedor = await Proveedor.findById(req.params.id);
        let proveedor2 = await Proveedor.findById(req.params.id);

        if(!proveedor){
            res.status(404).json({msg: 'No existe el proveedor'})
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


        
        proveedor = await Proveedor.findOneAndUpdate({_id: req.params.id},proveedor, {new: true})
        res.json(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProveedor = async (req,res) =>{
    
    try {
       
        let proveedor = await Proveedor.findById(req.params.id);

        if(!proveedor){
            res.status(404).json({msg: 'No existe el proveedor'})
        }
       
        res.json(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProveedor = async (req,res) =>{
    
    try {
       
        let proveedor = await Proveedor.findById(req.params.id);

        if(!proveedor){
            res.status(404).json({msg: 'No existe el proveedor'})
        }
       
        await Proveedor.findOneAndRemove({_id:req.params.id})
        res.json({msg: "Proveedor eliminado con éxito"})
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


