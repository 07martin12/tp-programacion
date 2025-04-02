import  Alumno  from './Alumno';
import  Profesor  from './Profesor';
import  Escuela  from './Escuela';

const escuela = new Escuela("Escuela Central");

const alumno1 = new Alumno("Juan", "Pérez", "12345678", 8);
const alumno2 = new Alumno("María", "Gómez", "87654321", 6);

const profesor1 = new Profesor("Carlos", "Rodríguez", "11223344");

escuela.addAlumno(alumno1);
escuela.addAlumno(alumno2);
escuela.addProfesor(profesor1);

profesor1.addAlumno(alumno1);
profesor1.addAlumno(alumno2);

console.log("Escuela: " + escuela.getNombre());

escuela.imprimirAlumnos(); 
escuela.imprimirProfesores(); 

console.log("Profesor: " + profesor1.getNombre());
profesor1.imprimirAlumnos();

console.log("El alumno " + alumno1.getNombre() + " está aprobado: " + alumno1.estaAprobado());
console.log("El alumno " + alumno2.getNombre() + " está aprobado: " + alumno2.estaAprobado());
