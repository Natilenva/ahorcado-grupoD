/* HELP:
 /* 
    //*iterate:
    iterate over strings: for or for..of 
    iterate over an array – we can use forEach, for or for..of.
    map- iterate and return the data for each element 
    for/in - iterar sobre todas las propiedades enumerables de un objeto 
 
    //* el input siempre devuelve un string!?
*/

'use strict';
//1.La aplicación debe tener una lista interna de palabras:
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
//But, JavaScript arrays are best described as arrays.
const palabras = ['js', 'javascript'];
let letrasPalabraAleatoriaEnGuiones = [];
let letra = '';

// 2. e inicialmente escoger una aleatoriamente.
const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
console.log('2:palabraAleatoria: ' + palabraAleatoria);

//! 3. Esa palabra se debe mostrar en pantalla
// abajo después del punto 4

//? 4. pero con cada letra sustituida por un guión bajo (_) -------------

//* The split() method splits/divide a string into an array of substrings.
let letrasPalabraAleatoria = palabraAleatoria.split('');
console.log('4.1:letrasPalabraAleatoria: ' + letrasPalabraAleatoria);

//sustituir cada letra por un _
letrasPalabraAleatoria.forEach((element) => {
  letrasPalabraAleatoriaEnGuiones.push('_');
});
/* for (let letra of letrasPalabraAleatoria) {
  letrasPalabraAleatoriaEnGuiones.push('_');
} */
console.log(
  '4.2:letrasPalabraAleatoriaEnGuiones: ' + letrasPalabraAleatoriaEnGuiones
);

//! 3. Esa palabra se debe mostrar en pantalla

//* 3.1 Cazamos <div id="palabra"></div>
let palabraHtml = document.querySelector('#palabra');

//* 3.2 The join() method returns an array as a string. Return: a string,	the array values, separated by the specified separator.
let palabraConGuionesSinComas = letrasPalabraAleatoriaEnGuiones.join(' ');
console.log('3.2 palabraConGuionesSinComas: ' + palabraConGuionesSinComas);

//* 3.3 COLOCAMOS la palabra en document(DOM)
//innerHTML: Sets the HTML content (inner HTML) of an element.
palabraHtml.innerHTML = palabraConGuionesSinComas;

//? 6. Si la letra está en la palabra
// hacer un codicional en javascript con un loop que recorra la palabra

//*6.1 ¿ CAZAR la letra q El usuario introduce en el input:

//* 6.1.1 CAZAR el Formulario
let form = document.querySelector('.my-form');

//! variable q recupera los valores de localStorage
let localStrg2 = '';
let fallos = 0;
let fallos1 = 0;
let fallosTotal = 0;
//* 6.1.2 crear EVENTO para cazar los valores del Formulario, en este caso el input del Formulario:
//<input type="text" id="inputLetra" placeholder="Dame una letra" name="valueOfAtrNameOfinput"/>?
form.addEventListener('submit', function (e) {
  e.preventDefault(); // This prevents the window from reloading

  //*cazando valor del input
  let userInput = form.valueOfAtrNameOfinput.value;
  console.log('LETRA Q INTRODUCE EL USUARIO: ' + userInput);

  //? 7. deben visualizarse todas sus ocurrencias.
  //si la condicion se cumple debe visualizarse esa letra en la posición que corresponda, sustituyendo al guion.

  // la letra recogida está dentro de la palabra?:
  //q varible eligimos de todas las q tenemos, palabraAleatoria?

  //si la letra está dentro agregarla a la palabra con guiones,
  //sustituyendo cada guión por la letra

  //creamos una variable para construir la palabra con ocurrencias = palabraConOcurrencias
  //la inicializamos siempre a un String vacío, cada vez q lanzamos el evento, para construirla de nuevo
  let palabraConOcurrencias = '';

  for (const letra of palabraAleatoria) {
    //console.log('letra de palabraAleatoria: '+letra);
    //si la letra de la palabra Aleatoria es igual a la q introduce el usuario
    // o está incluida en el el localStorage, la guardamos en palabraConOcurrencias
    if (letra === userInput || localStrg2.includes(letra)) {
      /* console.log('ok');   */
      palabraConOcurrencias += letra;
      fallos = 0;

      console.log('if ' + fallos);
    } else {
      /* console.log('fallo'); */
      palabraConOcurrencias += '_';
      //si tenemos un unico guion bajo entonces fallo

      // si no no hagas nada
    }
    // aumentarContadorFallos();
    //console.log('palabraConOcurrencias: '+palabraConOcurrencias);
  }

  //Si la letra que introduce el usuario está dentro de la palabra aleatoria OR está incluida dentro del localStorage

  if (palabraAleatoria.includes(userInput) || localStrg2.includes(userInput)) {
    console.log('acierto');
  } else {
    fallos++;
  }
  console.log('fallosTotal ' + fallos);
  // fallosTotal = fallos1 + 1;
  // console.log('fallos fuera de for: ' + fallosTotal);
  // function aumentarContadorFallos() {
  //   fallos++;
  //   document.getElementById('Intentos').textContent = fallos;
  // }

  // console.log('numero de ' + fallos);
  form.reset();

  //* Ver en pantalla la palabraConOcurrencias -------------------------------------------------

  //* cazar el element del DOM donde colocamos la palabraConOcurrencias
  const palabraConOcurrenciasEnDOM = document.querySelector('#palabra');
  /* console.log('palabraConOcurrenciasEnDOM: '+palabraConOcurrenciasEnDOM); */

  //* Colocar en document la palabraConOcurrencias
  //palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrencias;

  //* Colocar en document la palabraConOcurrencias pero con espacios entre las letras?
  //The split() method splits/divide a string into an array of substrings.
  let palabraConOcurrenciasArray = palabraConOcurrencias.split('');
  console.log('palabraConOcurrenciasArray: ' + palabraConOcurrenciasArray);

  // 3.2 The join() method returns an array as a string. Return: a string,	the array values, separated by the specified separator.
  let palabraConOcurrenciasYespacios = palabraConOcurrenciasArray.join(' ');
  console.log(
    'palabraConOcurrenciasYespacios: ' + palabraConOcurrenciasYespacios
  );

  //* Colocar en pantalla la palabraConOcurrencias pero con espacios entre las letras
  palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrenciasYespacios;

  //* PERSISTENCIA DE DATOS? ----------------------------------------------------------------------------
  // ¿la palabraConOcurrenciasEnDOM como hacerla permanecer en el document al pulsar de nuevo el botón
  //(y lanzar de nuevo el evento)???

  //* Guardar datos en el localStorage:
  // sintaxis: localStorage.setItem(clave, valor);
  localStorage.setItem(
    'palabraConOcurrenciasEnDOM',
    palabraConOcurrenciasYespacios
  ); //! la clave entre ''

  //* Leer datos del localStorage:
  //! localStrg2 declarada fuera del evento
  // sintaxis: localStorage.getItem(clave);
  localStrg2 = localStorage.getItem('palabraConOcurrenciasEnDOM');
  console.log('localStrg2: ' + localStrg2);
});

//? 8.Si no está en la palabra el jugador acumula un fallo.
// si la condicion no se cumple, no hay sustitucion de guion. Y se resta/suman los fallos.

//si la letra NO está dentro de la palabra,
// visualizar el error en el DOM
//cazar el element del DOM donde están los errores/intentos para visualizarlos?

//? 9.Se pueden tener hasta 6 fallos.
// si tiene 7 falos Game Over
// crear un sumatorio/acumulador de errores

/* okokok---------------------------------------------------- */
/* <button id="idButton">Comprobar</button> */
/* <div id="palabra"></div>  */
/* const element = document.getElementById("idButton");
  element.addEventListener("click", myFunction);
  function myFunction() {
    document.getElementById("palabra").innerHTML = "Hello World";
  } */
