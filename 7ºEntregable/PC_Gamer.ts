import { Constructor } from './Constructor';

export class PC_Gamer extends Constructor {
  public construirPC(): void {
    this.computadora.setProcesador('Intel Core i9');
    this.computadora.setRam('32GB');
    this.computadora.setAlmacenamiento('1TB SSD');
    this.computadora.setTarjetaGrafica('NVIDIA RTX 4090');
    this.computadora.setSistemaOperativo('Windows 11 Pro');
  }
}
