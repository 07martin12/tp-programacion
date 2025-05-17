import { CreadorAnimal } from "./CreadorAnimal";
import { Animal } from "./Animal";
import { Pajaro } from "./Pajaro";

export class CreadorAve extends CreadorAnimal {
  crearAnimal(): Animal {
    return new Pajaro();
  }
}
