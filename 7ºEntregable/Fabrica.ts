import { Constructor } from './Constructor';
import { Computadora } from './Computadora';

export class Fabrica {
  private constructorPC: Constructor;

  constructor(constructorPC: Constructor) {
    this.constructorPC = constructorPC;
  }

  public construir(): Computadora {
    this.constructorPC.construirPC();
    return this.constructorPC.getPC();
  }
}
