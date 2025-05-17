import { Animal } from "./Animal";

export class Gato implements Animal {
  hacerSonido(): void {
    console.log("Gato maullando...");
  }

  mover(): void {
    console.log("El gato caminando...");
  }
}
