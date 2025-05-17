import { CreadorCanino } from "./CreadorCanino";
import { CreadorFelino } from "./CreadorFelino";
import { CreadorAve } from "./CreadorAve";
import { CreadorAnimal } from "./CreadorAnimal";

export class Ejecutable {
  static main(): void {
    const canino: CreadorAnimal = new CreadorCanino();
    const felino: CreadorAnimal = new CreadorFelino();
    const ave: CreadorAnimal = new CreadorAve();

    console.log("=== Canino ===");
    canino.operar();

    console.log("=== Felino ===");
    felino.operar();

    console.log("=== Ave ===");
    ave.operar();
  }
}

Ejecutable.main();
