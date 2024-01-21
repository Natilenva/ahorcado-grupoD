'use strict';
import { overlayClok } from './functions.js';
const palabras = [
  'checkbox',
  'flexbox',
  'padding',
  'javascript',
  'booleanos',
  'debugger',
  'programacion',
  'codear',
  'pseudocodigo',
];

let localStrg2 = '';
let fallos = 0;

let form = document.querySelector('.my-form');

document.querySelector('#inputLetra').focus();

//  palabraAleatoria
const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
console.log('2:palabraAleatoria: ' + palabraAleatoria);

let palabraConGuionesSinComas = '';

for (let char of palabraAleatoria) {
  palabraConGuionesSinComas += '_ ';
}

let palabraHtml = document.querySelector('#palabra');
palabraHtml.innerHTML = palabraConGuionesSinComas;

//  Event
form.addEventListener('submit', function (e) {
  e.preventDefault();

  //*cazando valor del input
  let userInput = form.valueOfAtrNameOfinput.value.toLowerCase();

  form.reset();
  inputLetra.focus();

  let palabraConOcurrencias = '';

  for (const letra of palabraAleatoria) {
    if (letra === userInput || localStrg2.includes(letra)) {
      palabraConOcurrencias += letra;
    } else {
      palabraConOcurrencias += '_';
    }
  }

  let palabraConOcurrenciasArray = palabraConOcurrencias.split('');
  let palabraConOcurrenciasYespacios = palabraConOcurrenciasArray.join(' ');

  const palabraConOcurrenciasEnDOM = document.querySelector('#palabra');
  palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrenciasYespacios;

  // PERSISTENCIA DE DATOS
  localStorage.setItem(
    'palabraConOcurrenciasEnDOM',
    palabraConOcurrenciasYespacios
  );
  localStrg2 = localStorage.getItem('palabraConOcurrenciasEnDOM');

  if (!palabraAleatoria.includes(userInput)) {
    fallos++;
    for (let i = 1; i <= 6; i++) {
      const fallo = document.querySelector(`#fallo${i}`);
      fallo.style.visibility = fallos === i ? 'visible' : 'hidden';
    }
  }
  //FALLOS
  let fallosDOM = document.querySelector('#fallosID');
  fallosDOM.innerHTML = fallos;

  // PERDER ***
  if (fallos >= 6) {
    document.querySelector('#text').innerHTML = 'GAME OVER';
    overlayClok();
  }
  // GANAR ***
  else if (!palabraConOcurrenciasYespacios.includes('_')) {
    document.querySelector('#text').innerHTML = 'WINNER';
    overlayClok();
  }
});
