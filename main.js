'use strict';
//1.La aplicación debe tener una lista interna de palabras:
// Crear un array con las palabras que elijamos.[]

const palabras = ['javascript', 'html', 'css', 'programacion', 'videollamada'];
let palabrasGuiones = [];
let letra = '';
// 2. e inicialmente escoger una aleatoriamente.
// Lo haríamos con un Math.random. Una función.

const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];

console.log(palabraAleatoria);

// 3. Esa palabra se debe mostrar en pantalla
// bebe de javascript

// 4. pero con cada letra sustituida por un guión bajo (_)
// dividir la plabra en letras y sustituir cada una de las letras con un guion

let letrasPalabraAleatoria = palabraAleatoria.split('');
console.log(letrasPalabraAleatoria);

for (let letra of letrasPalabraAleatoria) {
  palabrasGuiones.push('_');
}
console.log(palabrasGuiones);
const palabraHtml = document.querySelector('#palabra');

console.log(palabraHtml);
let palabraConGuionesSinComas = palabrasGuiones.join(' ');
palabraHtml.innerHTML = palabraConGuionesSinComas;
console.log(typeof palabraConGuionesSinComas);
// 6. Si la letra está en la palabra
// hacer un codicional en javascript con un loop que recorra la palabra

//6.1 El usuario introduce una letra.
let letraInput = document.querySelector('#inputLetra').value;
console.log(letraInput);

// 7. deben visualizarse todas sus ocurrencias.
//si la condicion se cumple debe visualizarse esa letra en la posición que corresponda, sustituyendo al guion.

// 8.Si no está en la palabra el jugador acumula un fallo.
// si la condicion no se cumple, no hay sustitucion de guion. Y se resta/suman los fallos.
