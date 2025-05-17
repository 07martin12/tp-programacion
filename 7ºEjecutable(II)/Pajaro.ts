import { Animal } from "./Animal";

export class Pajaro implements Animal {
  hacerSonido(): void {
    console.log("Pajaro silvando...");
  }

  mover(): void {
    console.log("Pajaro volando...");
  }
}
