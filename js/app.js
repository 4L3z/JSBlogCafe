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
  "Hola Gente";
parrafoLindo.classList.add("parrafoHermoso");

const TextoHeader = document.querySelector(".header__texto");

TextoHeader.appendChild(parrafoLindo);

const btnForm = document.querySelector('.formulario input[type=submit]')
console.log(btnForm)


function imprimirClick(e) {
  e.preventDefault()
  console.log("Hiciste Click");
}

btnForm.addEventListener('click', imprimirClick);


const ContactoPalabra = document.querySelector('#palabraContacto')
ContactoPalabra.classList.add("textohermosoxD")
console.log(ContactoPalabra)


function holaAmigos(){
  alert("Realizaste Click")
  ContactoPalabra.classList.toggle("textohermosoxD")
}



ContactoPalabra.addEventListener('click', holaAmigos)