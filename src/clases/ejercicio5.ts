 export class Persona {
    nombre:string;
    apellido:string;
    direccion:string;
    telefono:string;
    edad:number;
    
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    
    esMayorDeEdad() {
        return this.edad >= 18;
    }
    
    mostrarInformacion() {
        return `${this.nombre} ${this.apellido} - ${this.edad} años`;
    }
}

    // Aplicando la Herencia     
    export class Empleado extends Persona {
        sueldo:number;

            constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
                super(nombre, apellido, direccion, telefono, edad);
                this.sueldo = sueldo;
            }
            
            cargarSueldo(nuevoSueldo: number) {
                this.sueldo = nuevoSueldo;
            }
            
            imprimirSueldo() {
                return `Sueldo: $${this.sueldo}`;
            }
            
            mostrarInformacion() {
                return `${super.mostrarInformacion()} | ${this.imprimirSueldo()}`;
            }
        }