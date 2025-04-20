import { Profesor } from './Profesor';

export class Ayudante extends Profesor {
  public override getRol(): string {
    return "Ayudante";
  }

  public override listarPersona(): void {
    console.log("Profesor (" + this.getRol() + "): " + this.getNombre() + " " + this.getApellido() + " - DNI: " + this.getDni() + " - Edad: " + this.getEdad());
  }
}
