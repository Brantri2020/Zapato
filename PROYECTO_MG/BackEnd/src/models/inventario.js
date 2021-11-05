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
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    precioUnitario: {
        type: Number,
        required: true
    },
    proveedor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Inventario', InventarioSchema);
