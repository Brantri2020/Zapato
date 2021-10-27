export class Proveedor {
    _id?: number;
    nombre: string;
    apellido: string;
    cedula: string;
    numeroCuenta: string;
    diasPlazo: string;
    telefono: string;
    recibo: string;
    banco: string;

    constructor(nombre: string,
        apellido: string,
        cedula: string,
        numeroCuenta: string,
        diasPlazo: string,
        telefono: string,
        recibo: string,
        banco: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.numeroCuenta = numeroCuenta;
        this.diasPlazo = diasPlazo;
        this.telefono = telefono;
        this.recibo = recibo;
        this.banco = banco;
    }
}