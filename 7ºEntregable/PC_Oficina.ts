import { Constructor } from './Constructor';

export class PC_Oficina extends Constructor {
  public construirPC(): void {
    this.computadora.setProcesador('Intel Core i5');
    this.computadora.setRam('16GB');
    this.computadora.setAlmacenamiento('512GB SSD');
    this.computadora.setTarjetaGrafica('Integrada');
    this.computadora.setSistemaOperativo('Windows 10 Pro');
  }
}
