
class Celular {
    private marca: string;
    private modelo: string;
    private sistemaOperativo: string;
    private memoriaRAM: number;
    private almacenamientoInterno: number;
    private encendido: boolean;

    constructor( marca: string, modelo: string, sistemaOperativo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.sistemaOperativo = sistemaOperativo;
        this.memoriaRAM = 4;
        this.almacenamientoInterno = 64;
        this.encendido = false;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getSistemaOperativo(): string {
        return this.sistemaOperativo;
    }

    public setSistemaOperativo(sistemaOperativo: string): void {
        this.sistemaOperativo = sistemaOperativo;
    }

    public getMemoriaRAM(): number {
        return this.memoriaRAM;
    }

    public setMemoriaRAM(memoriaRAM: number): void {
        this.memoriaRAM = memoriaRAM;
    }

    public getAlmacenamientoInterno(): number {
        return this.almacenamientoInterno;
    }

    public setAlmacenamientoInterno(almacenamientoInterno: number): void {
        this.almacenamientoInterno = almacenamientoInterno;
    }

    public encenderApagar (encenderApagar: boolean): void {
        if (!this.encendido && encenderApagar) {
             console.log ("Iniciando...");
            this.encendido = encenderApagar;
        } else if (this.encendido && !encenderApagar) {
            console.log ("Apagando...");
            this.encendido = encenderApagar;
        }
    }

    public mostrarInfo(): string {
        return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", SO: " + this.sistemaOperativo + ", RAM: " + this.memoriaRAM + "GB, Almacenamiento: " + this.almacenamientoInterno + "GB, Estado: " + (this.encendido ? "Encendido" : "Apagado");
    }
}

const celularSamung = new Celular("Samsung", "Galaxy S21", "Android");
console.log(celularSamung.mostrarInfo()); 
celularSamung.setAlmacenamientoInterno (120);
celularSamung.setMemoriaRAM (8);
celularSamung.encenderApagar(false);
console.log(celularSamung.mostrarInfo()); 
