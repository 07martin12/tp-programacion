export abstract class Persona {
  private nombre: string;
  private apellido: string;
  private dni: string;
  private edad: number;

  constructor(nombre: string, apellido: string, dni: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public getDni(): string {
    return this.dni;
  }

  public getEdad(): number {
    return this.edad;
  }

  public abstract getRol(): string;

  public abstract listarPersona(): void;
}
