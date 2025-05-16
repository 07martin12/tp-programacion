import { Computadora } from './Computadora';

export abstract class Constructor {
  protected computadora: Computadora;

  constructor() {
    this.computadora = new Computadora();
  }

  public abstract construirPC(): void;

  public getPC(): Computadora {
    return this.computadora;
  }
}
