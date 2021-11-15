const mongoose = require('mongoose');
const InventarioSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    talla: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    precioUnitario: {
        type: String,
        required: true
    },
    proveedor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Inventario', InventarioSchema);
