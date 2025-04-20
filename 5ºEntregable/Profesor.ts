import { Persona } from './Persona';

export class Profesor extends Persona {
  public getRol(): string {
    return "Titular";
  }

  public listarPersona(): void {
    console.log("Profesor (" + this.getRol() + "): " + this.getNombre() + " " + this.getApellido() + " - DNI: " + this.getDni() + " - Edad: " + this.getEdad());
  }
}
