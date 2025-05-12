import { Animal } from "./Animal";

export class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    emitirSonido(): void {
        console.log("¡Miau!");
    }

    tipoDeDieta(): void {
        console.log("El gato es carnívoro.");
    }
}
