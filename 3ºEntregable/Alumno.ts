export default class Alumno {
    private nombre: string; 
    private apellido: string;
    private dni: string;
    private nota: number; 

    public constructor(nombre: string, apellido: string, dni: string, nota: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nota = nota;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDni(): string {
        return this.dni;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    public getNota(): number {
        return this.nota;
    }

    public setNota(nota: number): void {
        this.nota = nota;
    }

    public estaAprobado(): boolean {
        return this.nota > 7;
    }
}
