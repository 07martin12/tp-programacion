import { Perro } from "./Perro";
import { Gato } from "./Gato";

const miPerro = new Perro("Marley");
miPerro.emitirSonido();
miPerro.moverse();
miPerro.tipoDeDieta();

console.log("---------------");

const miGato = new Gato("Garfield");
miGato.emitirSonido();
miGato.moverse();
miGato.tipoDeDieta();
