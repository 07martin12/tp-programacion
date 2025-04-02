import Alumno from './Alumno';
import Profesor  from './Profesor';

export default class Escuela {
    private nombre: string; 
    private alumnos: Alumno[];
    private profesores: Profesor[]; 

    public constructor(nombre: string) {
        this.nombre = nombre;
        this.alumnos = [];
        this.profesores = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    public getProfesores(): Profesor[] {
        return this.profesores;
    }

    public addProfesor(profesor: Profesor): void {
        if (!this.profesorExistente(profesor)) {
            this.profesores.push(profesor);
        }
    }

    public removeProfesor(profesor: Profesor): void {
        let pos = this.profesores.indexOf(profesor);
        if (pos != -1) 
            this.profesores.slice (pos, 1);
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

    public profesorExistente(profesor: Profesor): boolean {
        let pos = this.profesores.indexOf(profesor);

        if (pos != -1) 
            return true;

        return false;
    }

    public alumnoExistente(alumno: Alumno): boolean {
        let pos = this.alumnos.indexOf(alumno);

        if (pos != -1) 
            return true;

        return false;
    }

     public imprimirAlumnos(): void {
        console.log("Alumnos registrados:");
        for (let i = 0; i < this.alumnos.length; i++) {
            console.log(this.alumnos[i].getNombre());
        }
    }

    public imprimirProfesores(): void {
        console.log("Profesores registrados:");
        for (let i = 0; i < this.profesores.length; i++) {
            console.log(this.profesores[i].getNombre());
        }
    }
}
