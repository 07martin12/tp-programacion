import  Alumno from './Alumno';

export default class Profesor {
    private nombre: string; 
    private apellido: string;
    private dni: string;
    private alumnos: Alumno[];

    public constructor(nombre: string, apellido: string, dni: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.alumnos = [];
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

    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    public addAlumno(alumno: Alumno): void {
        if (!this.alumnoExistente(alumno)) {
            this.alumnos.push(alumno);
        }
    }

    public removeAlumno(alumno: Alumno): void {
        let pos = this.alumnos.indexOf(alumno);
        if (pos != -1) 
            this.alumnos.slice (pos, 1);
    }

    public alumnoExistente(alumno: Alumno): boolean {
        let pos = this.alumnos.indexOf(alumno);

        if (pos != -1) 
            return true;

        return false;
    }

    public imprimirAlumnos(): void {
        console.log(`Alumnos del Profesor ${this.nombre}:`);
        for (let i = 0; i < this.alumnos.length; i++) {
            console.log(this.alumnos[i].getNombre());
        }
    }
}
