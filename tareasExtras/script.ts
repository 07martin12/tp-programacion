const paragraph: string =
    'Urania. Qué nombre.\n' +
    'A la gente le gusta, le parece sonoro, original, raro.\n' +
    'A ella también, aunque le evoca sólo cosas tristes.\n' +
    'Todo le evoca cosas tristes, ahora que ha vuelto.\n' +
    'Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca?\n' +
    '¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos,\n' +
    'que adoraban a la Virgen del Rosario y a la Virgen de Altagracia?\n' +
    'Su padre le contó que su madre era quien escogió su nombre.\n' +
    'Urania: la musa de la astronomía. Nadie se atrevió a contradecirla.\n' +
    'A él le parecía bien; se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia.\n' +
    'En aquellos días no había problemas en la casa.\n' +
    'Las cosas cambiaron después, claro. Cambiaron tanto.';


//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
    return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number { 
    //cargo todas las palabras de la cadena en un arreglo 
    let listaDeConcursantes: number[] = cargarArreglo (fullText).toLowerCase(); 

   
    let pos: number = 0;

    while (pos < fullText.length) {

    pos++;
   }
   
    let palabraOriginal: string = buscarPalabra (fullText).toLowerCase(); 
   let palabraBuscada: string = searchTerm.toLowerCase (); 
   
   
    let contador: number = 0;
    if (isTextInPara(fullText, searchTerm)) { 
        //si el metodo booleano devuelve true la variable cont se incrementa
        contador++; 
    }
    return contador;
}

