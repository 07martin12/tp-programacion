export class Electrodomestico {
    private marca: string; private modelo: string;
    private encendido: boolean;

    constructor (marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }

    public setMarca (marca: string) {
        this.marca = marca;
    }

    public setModelo (modelo: string) {
        this.modelo = modelo;
    }

    public getModelo () {
        return this.modelo;
    }

    public getMarca () {
        return this.marca;
    }

    public encender () {
        this.encendido = true;
    }

    public apagar () {
        this.encendido = false;
    }
    
    public estadoActual () {
        let estadoActual: string = (!this.encendido) ? "apagado" : "encendido";
        return estadoActual;
    }

    public toString () {
        return "Marca: " + this.getMarca + "\nModelo: " + this.getModelo + "\nEstado actual: " + this.estadoActual;
    }
}