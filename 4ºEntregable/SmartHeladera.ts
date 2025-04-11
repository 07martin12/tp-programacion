import {Heladera} from './Heladera';
import { ModuloWifi } from './ModuloWifi'; 

export class SmartHeladera extends Heladera {
    private moduloWifi: ModuloWifi;

    constructor (marca: string, modelo: string, temperatura: number, moduloWifi: ModuloWifi) {
        super (marca, modelo, temperatura);
        this.moduloWifi = moduloWifi;
    }

    public getModuloWifi () {
        return this.moduloWifi;
    }

    public setModuloWifi (moduloWifi: ModuloWifi) {
        this.moduloWifi = moduloWifi;
    }

    public conectarInternet () {
        this.moduloWifi.encender();
    }

    public desconectarInternet () {
        this.moduloWifi.apagar();
    }

    public mostrarVelocidad () {
        this.moduloWifi.toString();
    }
}

