import { IAnimal } from "./IAnimal";

export abstract class Animal implements IAnimal {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    moverse(): void {
        console.log(`${this.nombre} se mueve...`);
    }

    abstract emitirSonido(): void; 
    abstract tipoDeDieta(): void;
}
