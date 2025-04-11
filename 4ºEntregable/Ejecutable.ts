import { SmartHeladera } from './SmartHeladera';
import { ModuloWifi } from './ModuloWifi';

const wifi = new ModuloWifi(100, 5);
const smartHeladera = new SmartHeladera('Samsung', 'CoolMax5000', 4, wifi);
smartHeladera.encender();

smartHeladera.setTemperatura(2);
smartHeladera.conectarInternet();

console.log("📦 Información de la SmartHeladera:");
console.log("Marca: " + smartHeladera.getMarca());
console.log("Modelo: " + smartHeladera.getModelo());
console.log("Temperatura: " + smartHeladera.getTemperatura() + "°C");
console.log("Estado del electrodoméstico: " + smartHeladera.estadoActual());
console.log("Estado del WiFi: " + wifi.estadoActual());
console.log("Velocidad: " + wifi.getVelocidadMbps() + " Mbps");
console.log("Frecuencia: " + wifi.getFrecuenciaGHz() + " GHz");
