export class Computadora {
    private procesador?: string;
    private ram?: string;
    private almacenamiento?: string;
    private tarjetaGrafica?: string;
    private sistemaOperativo?: string;
  
    public setProcesador(procesador: string): void {
      this.procesador = procesador;
    }
  
    public setRam(ram: string): void {
      this.ram = ram;
    }
  
    public setAlmacenamiento(almacenamiento: string): void {
      this.almacenamiento = almacenamiento;
    }
  
    public setTarjetaGrafica(tarjetaGrafica: string): void {
      this.tarjetaGrafica = tarjetaGrafica;
    }
  
    public setSistemaOperativo(sistemaOperativo: string): void {
      this.sistemaOperativo = sistemaOperativo;
    }
  
    public mostrarEspecificaciones(): string {
      return 'Computadora creada:\n' +
        'Procesador: ' + (this.procesador || 'No especificado') + '\n' +
        'RAM: ' + (this.ram || 'No especificado') + '\n' +
        'Almacenamiento: ' + (this.almacenamiento || 'No especificado') + '\n' +
        'Tarjeta gráfica: ' + (this.tarjetaGrafica || 'No especificado') + '\n' +
        'Sistema operativo: ' + (this.sistemaOperativo || 'No especificado');
    }
  }
  