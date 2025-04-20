import { Persona } from './Persona';
import { Curso } from './Curso';

export class Escuela {
  private nombre: string;
  private miembros: Persona[];
  private cursos: Curso[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.miembros = [];
    this.cursos = [];
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public addMiembro(miembro: Persona): void {
    if (!this.miembroExistente(miembro)) {
      this.miembros.push(miembro);
    }
  }

  public addCurso(curso: Curso): void {
    if (!this.cursoExistente(curso)) {
      this.cursos.push(curso);
    }
  }

  public listarMiembros(): void {
    console.log("Miembros de la escuela:");
    for (let i = 0; i < this.miembros.length; i++) {
      this.miembros[i].listarPersona();
    }
  }

  public listarCursos(): void {
    console.log("Cursos de la escuela:");
    for (let i = 0; i < this.cursos.length; i++) {
      console.log("- " + this.cursos[i].getNombre());
    }
  }

  public listarMiembroXRol(rol: string): void {
    console.log("Miembros con rol: " + rol);
    for (let i = 0; i < this.miembros.length; i++) {
      if (this.miembros[i].getRol() === rol) {
        this.miembros[i].listarPersona();
      }
    }
  }

  private miembroExistente(miembro: Persona): boolean {
    for (let i = 0; i < this.miembros.length; i++) {
      if (this.miembros[i].getDni() === miembro.getDni()) {
        return true;
      }
    }
    return false;
  }

  private cursoExistente(curso: Curso): boolean {
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i].getId() === curso.getId()) {
        return true;
      }
    }
    return false;
  }
}
