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

//The split() method splits/divide a string into an array of substrings.
let letrasPalabraAleatoria = palabraAleatoria.split('');
console.log('4.1:letrasPalabraAleatoria: '+letrasPalabraAleatoria);

//sustituir cada letra por un _
letrasPalabraAleatoria.forEach(element => {
  letrasPalabraAleatoriaEnGuiones.push('_');
});
/* for (let letra of letrasPalabraAleatoria) {
  letrasPalabraAleatoriaEnGuiones.push('_');
} */
console.log('4.2:letrasPalabraAleatoriaEnGuiones: '+letrasPalabraAleatoriaEnGuiones);


//! 3. Esa palabra se debe mostrar en pantalla

//* 3.1 Cazamos <div id="palabra"></div> 
let palabraHtml = document.querySelector('#palabra');
/* let palabraHtml = document.getElementById('palabra'); */
//console.log(`palabraHtml`+palabraHtml);
//console.log(palabraHtml.innerHTML); 

//mio:
/* const divIdPalabra = document.getElementById('palabra');
console.dir(divIdPalabra);//div#palabra
console.log(divIdPalabra.id);
document.getElementById('palabra').innerHTML = letrasPalabraAleatoriaEnGuiones; */

// 3.2 The join() method returns an array as a string. Return: a string,	the array values, separated by the specified separator.
let palabraConGuionesSinComas = letrasPalabraAleatoriaEnGuiones.join(' ');
console.log('3.2 palabraConGuionesSinComas: '+palabraConGuionesSinComas);

//* 3.3 COLOCAMOS la palabra en document(DOM) 
//innerHTML: Sets the HTML content (inner HTML) of an element.
palabraHtml.innerHTML = palabraConGuionesSinComas;


//? 6. Si la letra está en la palabra
// hacer un codicional en javascript con un loop que recorra la palabra

  //*6.1 ¿ CAZAR la letra q El usuario introduce en el input:  
  
  // 6.1.1 CAZAR el Formulario
  let form = document.querySelector(".my-form");

  // 6.1.2 crear EVENTO para cazar los valores del Formulario, en este caso el input del Formulario
  //<input type="text" id="inputLetra" placeholder="Dame una letra" name="valueOfAtrNameOfinput"/>? 
  form.addEventListener("submit", function (e) {
    e.preventDefault() // This prevents the window from reloading


    //!si en palabraConOcurrenciasEnDOM hay algún caracter/substring distinto de _ 
    //!entonces q coloque en el document(DOM) la palabraConOcurrenciasEnDOM
    //!sino     q coloque en el document(DOM) la palabraConGuionesSinComas

    /* palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrenciasYespacios; */

    /* let palabraConOcurrenciasYespacios2 = '';
    palabraConOcurrenciasYespacios2 += palabraConOcurrenciasYespacios;
    console.log(palabraConOcurrenciasYespacios2); */

    
    //cazando valor del input
    let userInput = form.valueOfAtrNameOfinput.value;
    console.log('LETRA Q INTRODUCE EL USUARIO: '+userInput);
    
    //? 7. deben visualizarse todas sus ocurrencias.
    //si la condicion se cumple debe visualizarse esa letra en la posición que corresponda, sustituyendo al guion.
    
    //! la letra recogida está dentro de la palabra?: 
      //*q varible eligimos, palabraAleatoria o letrasPalabraAleatoria ??? 
      //* el input siempre devuelve un string!?
      //palabraAleatoria?
      //palabraConGuionesSinComas?
      /* console.log('2:palabraAleatoria: ' + palabraAleatoria);
      console.log(typeof palabraAleatoria);
      console.log('3.2 palabraConGuionesSinComas: '+palabraConGuionesSinComas);
      console.log(typeof palabraConGuionesSinComas); */

      /* iterar sobre cada letra de la palabra */
      /* 
      iterate over strings: for or for..of 
      iterate over an array – we can use forEach, for or for..of.
      map- iterate and return the data for each element 
      for/in - iterar sobre todas las propiedades enumerables de un objeto 
      */

    //!si la letra está dentro agregarla a la palabra con guiones, 
      //!sustituyendo cada guión por la letra   

      let palabraConOcurrencias = '';

      for (const letra of palabraAleatoria) {   
        console.log('letra de palabraAleatoria: '+letra);
        if (letra === userInput) {
          /* console.log('ok');   */      
          palabraConOcurrencias += letra;
          }else{
          /* console.log('fallo'); */
          palabraConOcurrencias += '_';
          } 
          console.log('palabraConOcurrencias: '+palabraConOcurrencias);     
      }

    //! Ver en pantalla la palabraConOcurrencias

    //* cazar el element del DOM donde está la palabra con guiones para visualizar las ocurrencias: 
    const palabraConOcurrenciasEnDOM = document.querySelector('#palabra');
    /* console.log('palabraConOcurrenciasEnDOM: '+palabraConOcurrenciasEnDOM); */

    //* Colocar en pantalla la palabraConOcurrencias 
    //palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrencias;

    //! Ver en pantalla la palabraConOcurrencias pero con espacios entre las letras???
    //The split() method splits/divide a string into an array of substrings.
    let palabraConOcurrenciasArray = palabraConOcurrencias.split('');
    console.log('palabraConOcurrenciasArray: '+ palabraConOcurrenciasArray);

    // 3.2 The join() method returns an array as a string. Return: a string,	the array values, separated by the specified separator.
    let palabraConOcurrenciasYespacios = palabraConOcurrenciasArray.join(' ') ;
    console.log('palabraConOcurrenciasYespacios: '+palabraConOcurrenciasYespacios);

    //* Colocar en pantalla la palabraConOcurrencias pero con espacios entre las letras
    palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrenciasYespacios;

    //! PERSISTENCIA DE DATOS??
    //! la palabraConOcurrenciasEnDOM como hacerla permanecer al hacer un nuevo submit???

    //si en palabraConOcurrenciasEnDOM hay algún caracter/substring distinto de _ 
    //entonces q coloque en el document(DOM) la palabraConOcurrenciasEnDOM
    //sino     q coloque en el document(DOM) la palabraConGuionesSinComas

    /* let palabraConOcurrenciasYespacios2 = '';
    palabraConOcurrenciasYespacios2 += palabraConOcurrenciasYespacios;
    console.log(palabraConOcurrenciasYespacios2); */


    /* LOCAL STORAGE */
    //localStorage.setItem("nombre", "Jane Doe");
    

    let localStrg = localStorage.setItem(palabraConOcurrenciasEnDOM, palabraConOcurrenciasYespacios);
    /* localStorage.getItem(clave); */
    let localStrg2 = localStorage.getItem(palabraConOcurrenciasEnDOM);

    console.log('localStrg2: '+ localStrg2);


    /* palabraConOcurrenciasEnDOM.innerHTML = localStrg2; */

    /* const misDatosJSON = JSON.parse(misDatos); */
    /* const misDatosJSON = JSON.parse(localStrg);
    console.log(misDatosJSON); */

  });


//? 8.Si no está en la palabra el jugador acumula un fallo.
// si la condicion no se cumple, no hay sustitucion de guion. Y se resta/suman los fallos.

//si la letra NO está dentro de la palabra,
  // crear un acumulador de errores
  // visualizar el error en el DOM
  //cazar el element del DOM donde están los errores/intentos para visualizarlos?





 /* okokok---------------------------------------------------- */
  /* <button id="idButton">Comprobar</button> */
  /* <div id="palabra"></div>  */
  /* const element = document.getElementById("idButton");
  element.addEventListener("click", myFunction);
  function myFunction() {
    document.getElementById("palabra").innerHTML = "Hello World";
  } */

