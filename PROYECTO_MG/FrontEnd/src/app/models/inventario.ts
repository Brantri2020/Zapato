export class Inventario {
    _id?: number;
    codigo: string;
    descripcion: string;
    talla: number;
    stock: number;
    precioUnitario: number;
    proveedor: string;
   

    constructor(codigo: string,
        descripcion: string,
        talla: number,
        stock: number,
        precioUnitario: number,
        proveedor: string) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.talla = talla;
        this.stock = stock;
        this.precioUnitario = precioUnitario;
        this.proveedor = proveedor;
    }
}