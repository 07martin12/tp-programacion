class Auto {
    marca: string;
    modelo: string;
    año: number;
    velocidad: number;

    constructor (marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidad = 0;
    }

    setMarca (marca: string): void {
        this.marca = marca;
    }

    getMarca (): string {
        return this.marca; 
    }

    setModelo (modelo: string): void {
        this.modelo = modelo;
    }

    getModelo (): string {
        return this.modelo;
    }

    setAño (año: number): void {
        this.año = año;
    }

    getAño (): number {
        return this.año;
    }

    acelerar (velocidad: number) : void {
        this.velocidad += velocidad;
    }

    frenar (velocidad : number) {
        this.velocidad = (this.velocidad - velocidad) > 0 ? this.velocidad - velocidad : 0;
    }

    toString(): string {
        return "Auto: " + this.marca + "\n" + this.modelo + "\nAño: " + this.año + "\nVelocidad: " + this.velocidad + " km/h";
    }
}

const auto1 = new Auto("Toyota", "Corolla", 2022);
const auto2 = new Auto("Ford", "Focus", 2020);

auto1.acelerar(40); 
auto1.frenar(20);  
auto1.toString ();

auto2.acelerar(100); 
auto2.frenar(100);   
auto2.toString ();