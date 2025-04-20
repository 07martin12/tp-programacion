import { Persona } from './Persona';

export class Alumno extends Persona {
  public getRol(): string {
    return "Estudiante";
  }

  public listarPersona(): void {
    console.log("Alumno: " + this.getNombre() + " " + this.getApellido() + " - DNI: " + this.getDni() + " - Edad: " + this.getEdad());
  }
}
