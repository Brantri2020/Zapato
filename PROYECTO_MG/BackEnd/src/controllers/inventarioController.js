const Inventario = require("../models/inventario");

exports.crearInventario = async (req,res) =>{
    
    try {
        let inventario;

        //Creamos nuestro proveedir
        inventario = new Inventario(req.body);

        

        const codigo = await Inventario.findOne({ codigo: inventario.codigo })

        if (codigo) return res.status(401).send("El producto con esta código ya esta registrado.");

        


        await inventario.save();
        res.send(inventario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerInventarios = async (req,res) =>{
    
    try {
        const inventarios = await Inventario.find();
        res.json(inventarios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarInventario = async (req,res) =>{
    
    try {
        const { codigo, descripcion,talla, stock, precioUnitario, proveedor } = req.body; 
        let inventario = await Inventario.findById(req.params.id);
        let inventario2 = await Inventario.findById(req.params.id);

        if(!inventario){
            res.status(404).json({msg: 'No existe el producto'})
        }
        inventario.codigo = codigo;
        inventario.descripcion = descripcion;
        inventario.talla = talla;
        inventario.stock = stock;
        inventario.precioUnitario = precioUnitario;
        inventario.proveedor = proveedor;


        const cod = await Inventario.findOne({ codigo: inventario.codigo })
        

        if (cod && inventario2.codigo !== inventario.codigo) return res.status(401).send("El producto con este código ya esta registrado.");


        
        inventario = await Inventario.findOneAndUpdate({_id: req.params.id},inventario, {new: true})
        res.json(inventario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerInventario = async (req,res) =>{
    
    try {
       
        let inventario = await Inventario.findById(req.params.id);

        if(!inventario){
            res.status(404).json({msg: 'No existe el producto'})
        }
       
        res.json(inventario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarInventario = async (req,res) =>{
    
    try {
       
        let inventario = await Inventario.findById(req.params.id);

        if(!inventario){
            res.status(404).json({msg: 'No existe el producto'})
        }
       
        await Inventario.findOneAndRemove({_id:req.params.id})
        res.json({msg: "Producto eliminado con éxito"})
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


