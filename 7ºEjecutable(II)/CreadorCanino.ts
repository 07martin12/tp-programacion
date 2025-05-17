import { CreadorAnimal } from "./CreadorAnimal";
import { Animal } from "./Animal";
import { Perro } from "./Perro";

export class CreadorCanino extends CreadorAnimal {
  crearAnimal(): Animal {
    return new Perro();
  }
}
