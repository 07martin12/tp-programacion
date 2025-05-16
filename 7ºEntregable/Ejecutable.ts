import { Fabrica } from './Fabrica';
import { PC_Gamer } from './PC_Gamer';
import { PC_Oficina } from './PC_Oficina';
import { Computadora } from './Computadora';

export class Ejecutable {
  public static main(): void {
    const fabricaGamer = new Fabrica(new PC_Gamer());
    const pcGamer: Computadora = fabricaGamer.construir();

    const fabricaOficina = new Fabrica(new PC_Oficina());
    const pcOficina: Computadora = fabricaOficina.construir();

    console.log(pcGamer.mostrarEspecificaciones());
    console.log('\n------------------------\n');
    console.log(pcOficina.mostrarEspecificaciones());
  }
}

Ejecutable.main(); 