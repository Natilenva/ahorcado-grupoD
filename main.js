'use strict';

import { overlayClok } from './functions.js';



const imagesArray = ["./assets/ahorcadito0.png", "./assets/design6.png", "./assets/Diseño5.png", 
                 "./assets/Diseño4.png", "./assets/Diseño3.png", "./assets/Diseño2.png", "./assets/Diseño1.png"];
//design6

const palabras = ['checkbox','flexbox','padding','javascript','booleanos','debugger','programacion','codear','pseudocodigo'];
/* const palabras = ['js','css']; */

let localStrg2 = '';
let fallos = 0;

let form = document.querySelector('.section3');  
document.querySelector('#inputLetra').focus();


//? palabraAleatoria 
const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
console.log('palabraAleatoria: ' + palabraAleatoria);

//? innerHTML palabraConGuiones --------------------
let palabraConGuionesSinComas = '';

for (let char of palabraAleatoria) {
  palabraConGuionesSinComas += '_ ';
}

let palabraHtml = document.querySelector('#palabra');
palabraHtml.innerHTML = palabraConGuionesSinComas;

//?  Event ============================================================================================================= 
form.addEventListener('submit', function (e) {
  e.preventDefault();

  //*cazando valor del input
  let userInput = form.atrNameOfInput.value.toLowerCase();
  console.log('userInput: '+userInput);

  form.reset();
  inputLetra.focus();

  //? palabraConOcurrencias --------------------------------------------------------------------------------------
  let palabraConOcurrencias = '';

  for (const letra of palabraAleatoria) {
    //si la letra no está en palabraAleatoria q se cree palabraConOcurrencias con localStorage
    if (letra === userInput || localStrg2.includes(letra)) {
      palabraConOcurrencias += letra;
    } else {
      palabraConOcurrencias += '_';
    }
  }
  //? palabraConOcurrencias (innerHTML) -------------------------------------------------------------------------
  // split() method splits/divide a string into an array of substrings.
  let palabraConOcurrenciasArray = palabraConOcurrencias.split(''); // divide a string into characters
  // join() - une todos los elementos de una matriz (o un objeto similar a una matriz) en un string y lo devuelve 
  //   Return: a string, the array values, separated by the specified separator 
  let palabraConOcurrenciasYespacios = palabraConOcurrenciasArray.join(' ');

  const palabraConOcurrenciasEnDOM = document.querySelector('#palabra');
  palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrenciasYespacios;

  //? PERSISTENCIA DE DATOS --------------------------------------------------------------------------------------------
  localStorage.setItem('palabraConOcurrenciasEnDOM',palabraConOcurrenciasYespacios);
  localStrg2 = localStorage.getItem('palabraConOcurrenciasEnDOM');
  console.log('localStorage: '+localStrg2);

  //? FALLOS ------------------------------------------------------------------------------------------------------------
    if ( !(palabraAleatoria.includes(userInput)) ) {
    fallos++;
      const imgHtml = document.getElementById('mainImage');
      imgHtml.src = imagesArray[fallos];
  }

  //? PERDER ----------------------------------------------
  if (fallos >= 6) {
    document.querySelector('#text').innerHTML = 'GAME OVER';
    overlayClok();
  }
  //? GANAR ----------------------------------------------
  else if (!palabraConOcurrenciasYespacios.includes('_')) {
    document.querySelector('#text').innerHTML = 'WINNER';
    overlayClok();
  }
}
);
