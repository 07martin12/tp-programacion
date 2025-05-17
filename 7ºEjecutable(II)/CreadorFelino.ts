import { CreadorAnimal } from "./CreadorAnimal";
import { Animal } from "./Animal";
import { Gato } from "./Gato";

export class CreadorFelino extends CreadorAnimal {
  crearAnimal(): Animal {
    return new Gato();
  }
}
