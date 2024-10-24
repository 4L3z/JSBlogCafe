// console.log("Hola Mundo");





// let nombre = "Nodo Tecnologico";

// let edad = 18;

// console.log("Hola soy " + nombre + "y tengo " + edad + " años");

// // Definicion de una funcion

// function suma(numero1, numero2){
//  return numero1 + numero2
// }

// // Llamado a la funcion

// let resultado = suma(Infinity, Infinity)

// console.log(resultado)


const persona = {
    nombre: "Alejandro Palacios",
    edad: 17,
    ageDeNacimiento: 2007,

}

console.log("Hola soy " + persona.nombre + ", tengo " + persona.edad + " de edad y naci en el " + persona.ageDeNacimiento)

const textoHeader = document.querySelector("#heading")

console.log(textoHeader)

textoHeader.textContent = "Node.js, React, JavaScript, CSS, HTML 5, Bar"

textoHeader.classList.add('nueva-clase')

const enlaces = document.querySelectorAll('.navegacion a')

console.log(enlaces[0])

enlaces[0].textContent = "hola ajskldjklsajdkl"