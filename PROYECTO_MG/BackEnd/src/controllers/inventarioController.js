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

exports.obtenerProductosOrdenadosCodigo = async (req, res) => {

    try {
        const inventarios = await Inventario.find().sort('codigo');
        res.json(inventarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductosOrdenadosDescripcion = async (req, res) => {

    try {
        const productos = await Inventario.find().sort('descripcion');
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductosOrdenadosTalla = async (req, res) => {

    try {
        const productos = await Inventario.find().sort('talla');
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductosOrdenadosStock = async (req, res) => {

    try {
        const productos = await Inventario.find().sort('stock');
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductosOrdenadosProveedor = async (req, res) => {

    try {
        const productos = await Inventario.find().sort('proveedor');
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductosOrdenadosPrecioUnitario = async (req, res) => {

    try {
        const productos = await Inventario.find().sort('precioUnitario');
        res.json(productos);

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

exports.busquedaInventario = async (req, res) => {

    try {

        let palabra;

        //Creamos nuestra busqueda
        palabra = req.params.busqueda;

        const inventarios1 = await Inventario.find({ codigo: palabra }).sort('codigo');

        if (JSON.stringify(inventarios1)!=='[]' ) {
            res.json(inventarios1);
            

        } else {
            const inventarios2 = await Inventario.find({ descripcion: palabra }).sort('descripcion');

            if (JSON.stringify(inventarios2)!=='[]' ) {
                res.json(inventarios2);
            } else {
                const inventarios3 = await Inventario.find({ talla: palabra }).sort('talla');

                if (JSON.stringify(inventarios3)!=='[]' ) {
                    res.json(inventarios3);
                } else {
                    const inventarios4 = await Inventario.find({ stock: palabra }).sort('stock');

                    if (JSON.stringify(inventarios4)!=='[]' ) {
                        res.json(inventarios4);
                    } else {
                        const inventarios5 = await Inventario.find({ precioUnitario: palabra }).sort('precioUnitario');

                        if (JSON.stringify(inventarios5)!=='[]' ) {
                            res.json(inventarios5);
                        } else {
                            const inventarios6 = await Inventario.find({ proveedor: palabra }).sort('proveedor');

                            if (JSON.stringify(inventarios6)!=='[]' ) {
                                res.json(inventarios6);
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


