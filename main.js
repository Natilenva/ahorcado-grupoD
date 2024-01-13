'use strict';

/* const palabras = ['js', 'javascript', 'hackaboss']; */
const palabras = ['js', 'css'];
let letrasPalabraAleatoriaEnGuiones = [];
//let letra = '';

let form = document.querySelector('.my-form');

let localStrg2 = '';
let fallos = 0;
//let fallosTotal = 0;
//document.querySelector('#inputLetra').focus();//ir al foco

const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
//console.log('2:palabraAleatoria: ' + palabraAleatoria);


let letrasPalabraAleatoria = palabraAleatoria.split('');
//console.log('4.1:letrasPalabraAleatoria: ' + letrasPalabraAleatoria);

letrasPalabraAleatoria.forEach((element) => {
  letrasPalabraAleatoriaEnGuiones.push('_');
});
//console.log('letrasPalabraAleatoriaEnGuiones: ' + letrasPalabraAleatoriaEnGuiones);

let palabraConGuionesSinComas = letrasPalabraAleatoriaEnGuiones.join(' ');
//console.log('3.2 palabraConGuionesSinComas: ' + palabraConGuionesSinComas);


/* let palabraConGuionesSinComas = '';
// ! 
for (let char of letrasPalabraAleatoria) {
   palabraConGuionesSinComas = '_ '; // replace 
  console.log(palabraConGuionesSinComas);
} */



let palabraHtml = document.querySelector('#palabra');
palabraHtml.innerHTML = palabraConGuionesSinComas;



// ? ================================================
form.addEventListener('submit', function (e) {
  e.preventDefault();

  //*cazando valor del input
  let userInput = form.valueOfAtrNameOfinput.value.toLowerCase();
  //console.log('LETRA Q INTRODUCE EL USUARIO: ' + userInput);

  let palabraConOcurrencias = '';

  for (const letra of palabraAleatoria) {
    if (letra === userInput || localStrg2.includes(letra)) {
      palabraConOcurrencias += letra;
    } else {
      palabraConOcurrencias += '_';
    }
  }
  //console.log('palabraConOcurrencias: ' + palabraConOcurrencias);
  inputLetra.focus();
  form.reset();

  const palabraConOcurrenciasEnDOM = document.querySelector('#palabra');

  let palabraConOcurrenciasArray = palabraConOcurrencias.split('');
  //console.log('palabraConOcurrenciasArray: ' + palabraConOcurrenciasArray);

  let palabraConOcurrenciasYespacios = palabraConOcurrenciasArray.join(' ');
  //console.log('palabraConOcurrenciasYespacios: ' + palabraConOcurrenciasYespacios);

  palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrenciasYespacios;

//* PERSISTENCIA DE DATOS? ---------------------------------------------------
  localStorage.setItem('palabraConOcurrenciasEnDOM',palabraConOcurrenciasYespacios);
  localStrg2 = localStorage.getItem('palabraConOcurrenciasEnDOM');
  //console.log('localStrg2: ' + localStrg2);


  //? fallo ==================================================================
  if (! palabraAleatoria.includes(userInput) || localStrg2.includes(userInput)) {
    //console.log('fallo');
    fallos++;

    for (let i = 1; i <= 6; i++) {
      const fallo = document.querySelector(`#fallo${i}`);
      fallo.style.visibility = fallos === i ? 'visible' : 'hidden';
    }
    //console.log('Número de Fallos: ' + fallos);
  }


  //? =============================================
  let fallosDOM = document.querySelector('#fallosID');
  fallosDOM.innerHTML = fallos;

  //Cuenta atrás -----------------------------------------------
  let totalTime = 5;
  function updateClock() {
    document.getElementById('cuenta-atras').innerHTML = totalTime;
    if (!(totalTime === 0)) {totalTime--;}
  }

  //
  function reloadPage() {
    location.reload(true);
  }

  function overlayClok() {
    document.getElementById('overlay').style.display = 'block';
    setTimeout(reloadPage, 6000);
    setInterval(updateClock, 1000);
    inputLetra.disabled = true;
    
  }

//! PERDER ****** MIENTRAS NO GANA,solo agregar imágenes y dibujar palabra +(overlay, reload)
  if (fallos >= 6) {
    document.querySelector('#text').innerHTML = 'GAME OVER';//!  ESTO CAMBIA
    overlayClok()

  //! GANAR ********************** solo overlay, reload
  } else if (!localStrg2.includes('_')) {
    document.querySelector('#text').innerHTML = 'WINNER'; //!  ESTO CAMBIA
    overlayClok()
  }

});
