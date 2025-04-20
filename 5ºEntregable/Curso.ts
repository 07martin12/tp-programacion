import { Persona } from './Persona';

export class Curso {
  private nombre: string;
  private id: number;
  private cargaHoraria: number;
  private miembros: Persona[];
  private tematicas: string[];

  constructor(nombre: string, id: number, cargaHoraria: number) {
    this.nombre = nombre;
    this.id = id;
    this.cargaHoraria = cargaHoraria;
    this.miembros = [];
    this.tematicas = [];
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getId(): number {
    return this.id;
  }

  public getCargaHoraria(): number {
    return this.cargaHoraria;
  }

  public getMiembros(): Persona[] {
    return this.miembros;
  }

  public getTematicas(): string[] {
    return this.tematicas;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setCargaHoraria(cargaHoraria: number): void {
    this.cargaHoraria = cargaHoraria;
  }

  public addMiembro(miembro: Persona): void {
    if (this.miembroExistente(miembro)) {
      console.log("El miembro ya está inscrito en el curso.");
      return;
    }

    if (this.esTitular(miembro)) {
      for (let i = 0; i < this.miembros.length; i++) {
        if (this.esTitular(this.miembros[i])) {
          console.log("Ya hay un titular en el curso.");
          return;
        }
      }
    }

    this.miembros.push(miembro);
  }

  public removeMiembro(miembro: Persona): void {
    for (let i = 0; i < this.miembros.length; i++) {
      if (this.miembros[i].getDni() === miembro.getDni()) {
        this.miembros.splice(i, 1);
        return;
      }
    }
  }

  public addTematica(tematica: string): void {
    if (!this.tematicaExistente(tematica)) {
      this.tematicas.push(tematica);
    }
  }

  public removeTematica(tematica: string): void {
    for (let i = 0; i < this.tematicas.length; i++) {
      if (this.tematicas[i] === tematica) {
        this.tematicas.splice(i, 1);
        return;
      }
    }
  }

  public miembroExistente(miembro: Persona): boolean {
    for (let i = 0; i < this.miembros.length; i++) {
      if (this.miembros[i].getDni() === miembro.getDni()) {
        return true;
      }
    }
    return false;
  }

  public tematicaExistente(tematica: string): boolean {
    for (let i = 0; i < this.tematicas.length; i++) {
      if (this.tematicas[i] === tematica) {
        return true;
      }
    }
    return false;
  }

  public esTitular(miembro: Persona): boolean {
    return miembro.getRol() === "Titular";
  }

  public esAyudante(miembro: Persona): boolean {
    return miembro.getRol() === "Ayudante";
  }

  public esEstudiante(miembro: Persona): boolean {
    return miembro.getRol() === "Estudiante";
  }

  public listarMiembros(): void {
    console.log("Miembros del curso:");
    for (let i = 0; i < this.miembros.length; i++) {
      this.miembros[i].listarPersona();
    }
  }

  public listarTematicas(): void {
    console.log("Temáticas del curso:");
    for (let i = 0; i < this.tematicas.length; i++) {
      console.log("- " + this.tematicas[i]);
    }
  }
}
