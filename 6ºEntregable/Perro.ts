import { Animal } from "./Animal";

export class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    emitirSonido(): void {
        console.log("¡Guau!");
    }

    tipoDeDieta(): void {
        console.log("El perro es omnívoro.");
    }
}
