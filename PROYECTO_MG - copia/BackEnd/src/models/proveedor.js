const mongoose = require('mongoose');
const ProveedorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    numeroCuenta: {
        type: String,
        required: true
    },
    diasPlazo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    recibo: {
        type: String,
        required: true
    },
    banco: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Proveedore', ProveedorSchema);
