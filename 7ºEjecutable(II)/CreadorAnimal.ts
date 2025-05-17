import { Animal } from "./Animal";

export abstract class CreadorAnimal {
  abstract crearAnimal(): Animal;

  operar(): void {
    const animal = this.crearAnimal();
    animal.hacerSonido();
    animal.mover();
  }
}
