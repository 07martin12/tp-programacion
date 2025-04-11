export class ModuloWifi {
    private velocidadMbps: number;
    private frecuenciaGHz: number;
    private encendido: boolean;

    constructor (velocidadMbps: number, frecuenciaGHz: number) {
        this.velocidadMbps = velocidadMbps;
        this.frecuenciaGHz = frecuenciaGHz;
        this.encendido = false;
    }

    public getVelocidadMbps () {
        return this.velocidadMbps;
    }

    public getFrecuenciaGHz () {
        return this.frecuenciaGHz;
    }

    public setVelocidadMbps (velocidadMbps: number) {
        this.velocidadMbps = velocidadMbps;
    }

    public setFrecuenciaGHz () {
        this.frecuenciaGHz = this.frecuenciaGHz;
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
        return "Velocidad: " + this.velocidadMbps + "\nFrecuencia: " + this.frecuenciaGHz + "\nEstado actual: " + this.estadoActual;
    }
}

	
