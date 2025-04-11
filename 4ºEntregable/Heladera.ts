import {Electrodomestico} from './Electrodomestico';

export class Heladera extends Electrodomestico {
    private temperatura: number;

    constructor (marca: string, modelo: string, temperatura: number) {
        super (marca, modelo);
        this.temperatura = temperatura;
    }

    public setTemperatura (temperatura: number) {
        this.temperatura = temperatura;
    }

    public getTemperatura () {
        return this.temperatura;
    }
}