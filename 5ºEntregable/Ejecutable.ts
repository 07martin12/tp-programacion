import { Escuela } from './Escuela';
import { Curso } from './Curso';
import { Profesor } from './Profesor';
import { Ayudante } from './Ayudante';
import { Alumno } from './Alumno';


const escuela = new Escuela("Escuela de Arte");

const profe1 = new Profesor("Martín", "Lorenzi", "43865783", 45); 
const ayudante1 = new Ayudante("Lucas", "Fernández", "23456789", 30);
const alumno1 = new Alumno("Valentina", "López", "23865783", 22);
const alumno2 = new Alumno("Martín", "Gómez", "43865784", 25);

escuela.addMiembro(profe1);
escuela.addMiembro(ayudante1);
escuela.addMiembro(alumno1);
escuela.addMiembro(alumno2);

const curso1 = new Curso("Pintura Contemporánea", 1, 40);

curso1.addMiembro(profe1);     
curso1.addMiembro(ayudante1); 
curso1.addMiembro(alumno1);   
curso1.addMiembro(alumno2);   

curso1.addTematica("Acrílico");
curso1.addTematica("Collage");

escuela.addCurso(curso1);

console.log("\n=========== ESCUELA ===========");
console.log("Nombre: " + escuela.getNombre());

console.log("\n=========== MIEMBROS POR ROL ===========");
console.log("\n Profesores Titulares:");
escuela.listarMiembroXRol("Titular");

console.log("\n Ayudantes:");
escuela.listarMiembroXRol("Ayudante");

console.log("\n Estudiantes:");
escuela.listarMiembroXRol("Estudiante");

console.log("\n=========== CURSOS DISPONIBLES ===========");
escuela.listarCursos();

console.log("\n=========== DETALLE DEL CURSO ===========");
curso1.listarMiembros();
curso1.listarTematicas();
