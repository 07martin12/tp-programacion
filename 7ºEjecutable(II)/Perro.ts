import { Animal } from "./Animal";

export class Perro implements Animal {
  hacerSonido(): void {
    console.log("Perro ladrando");
  }

  mover(): void {
    console.log("Perro caminando...");
  }
}
