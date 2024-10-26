/* console.log("Hola")

let nombre = "Nodo Tecnologico";

let edad = 18 

console.log("Hola soy " + nombre + "y tengo" + edad + "años")

// Definicion de una función 
function suma(numero1 , numero2){
    return numero1 + numero2
}

//Llamado a la función

let resultado = suma("5","8")

console.log(resultado) */

const persona = {
  nombre: "Nodo Tecnologico",
  edad: 5,
  anioDeNacimiento: 2020,
};

console.log(" hola soy el " + persona.edad);

// const textoHeader = document.querySelector("#heading");

// console.log(textoHeader);

// textoHeader.textContent = "Nuevo Texto";

// textoHeader.classList.add("nueva-clase");

const enlaces = document.querySelectorAll(".navegacion a");

console.log(enlaces[0]);

enlaces[1].textContent = "Nuevo enlace";

const nuevoEnlace = document.createElement("A");
nuevoEnlace.textContent = "Ver Mas";
nuevoEnlace.href = "https://paletadecolores.com.ar/";
nuevoEnlace.classList.add("nueva-clase");

const navegacion = document.querySelector(".navegacion");

navegacion.appendChild(nuevoEnlace);

console.log(navegacion);

const parrafoLindo = document.createElement("p");
parrafoLindo.textContent =
  "La va a tocar para Diego, ahí la tiene Maradona, lo marcan dos, pisa la pelota Maradona, arranca por la derecha el genio del fútbol mundial, deja el tendal y va a tocar para Burruchaga… ¡Siempre Maradona! ¡Genio! ¡Genio! ¡Genio! Ta-ta-ta-ta-ta-ta-ta-ta… Gooooool… Gooooool… ¡Quiero llorar! ¡Dios Santo, viva el fútbol! ¡Golaaazooo! ¡Diegoooool! ¡Maradona! Es para llorar, perdónenme… Maradona, en recorrida memorable, en la jugada de todos los tiempos… Barrilete cósmico… ¿De qué planeta viniste para dejar en el camino a tanto inglés, para que el país sea un puño apretado gritando por Argentina? Argentina 2 – Inglaterra 0. Diegol, Diegol, Diego Armando Maradona… Gracias, Dios, por el fútbol, por Maradona, por estas lágrimas, por este Argentina 2-Inglaterra 0.";
parrafoLindo.classList.add('parrafoHermoso')

const TextoHeader = document.querySelector(".header__texto");

TextoHeader.appendChild(parrafoLindo);
