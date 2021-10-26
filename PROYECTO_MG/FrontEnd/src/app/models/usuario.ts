export class Usuario {
    _id?: number;
    nombre: string;
    apellido: string;
    cedula: string;
    direccion: string;
    nombreUsuario: string;
    password: string;
    password2: string;
    rol: string;


    constructor(nombre: string,
        apellido: string,
        cedula: string,
        direccion: string,
        nombreUsuario: string,
        password: string,
        password2: string,
        rol: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.direccion = direccion;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.password2 = password2;
        this.rol = rol;        
    }
}