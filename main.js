'use strict';

//? Functions: ===================================================
let totalTime = 3;
//Cuenta atrás --------------------------------------------------
  function updateClock() {
    document.getElementById('cuenta-atras').innerHTML = totalTime;
    if (!(totalTime === 0)) {totalTime--;}
  }

  //reloadPage ----------
  function reloadPage() {
    location.reload(true);
  }
  
  //overlayClok() --------------------------------------------
  function overlayClok() {
    document.getElementById('overlay').style.display = 'block';
    setTimeout(reloadPage, 4000);
    setInterval(updateClock, 1000);
    inputLetra.disabled = true;
  }
//? fin Functions: ===============================================


/* const palabras = ['js', 'javascript', 'hackaboss']; */
const palabras = ['js', 'css'];
let letrasPalabraAleatoriaEnGuiones = [];
let localStrg2 = '';
let fallos = 0;

let form = document.querySelector('.my-form');

document.querySelector('#inputLetra').focus(); //ir al foco


// ? palabraAleatoria
const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
console.log('2:palabraAleatoria: ' + palabraAleatoria);


/* let letrasPalabraAleatoria = palabraAleatoria.split('');
//console.log('4.1:letrasPalabraAleatoria: ' + letrasPalabraAleatoria);

letrasPalabraAleatoria.forEach((element) => {
  letrasPalabraAleatoriaEnGuiones.push('_');
});
//console.log('letrasPalabraAleatoriaEnGuiones: ' + letrasPalabraAleatoriaEnGuiones);

let palabraConGuionesSinComas = letrasPalabraAleatoriaEnGuiones.join(' ');
//console.log('3.2 palabraConGuionesSinComas: ' + palabraConGuionesSinComas); */


let palabraConGuionesSinComas = '';

for (let char of palabraAleatoria) {
   palabraConGuionesSinComas += '_ '; // replace 
}
//console.log(palabraConGuionesSinComas);

// ? innerHTML = palabraConGuionesSinComas ---------
let palabraHtml = document.querySelector('#palabra');
palabraHtml.innerHTML = palabraConGuionesSinComas;


// ? Event ======================================================
form.addEventListener('submit', function (e) {
  e.preventDefault();

  //*cazando valor del input
  let userInput = form.valueOfAtrNameOfinput.value.toLowerCase();
  //console.log('LETRA Q INTRODUCE EL USUARIO: ' + userInput);
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
  //console.log('palabraConOcurrencias: ' + palabraConOcurrencias);
  
  //? innerHTML = palabraConOcurrenciasYespacios =================================
  let palabraConOcurrenciasArray = palabraConOcurrencias.split('');
  let palabraConOcurrenciasYespacios = palabraConOcurrenciasArray.join(' ');

  const palabraConOcurrenciasEnDOM = document.querySelector('#palabra');
  palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrenciasYespacios;


  //? PERSISTENCIA DE DATOS? =======================================================
  localStorage.setItem('palabraConOcurrenciasEnDOM',palabraConOcurrenciasYespacios);
  localStrg2 = localStorage.getItem('palabraConOcurrenciasEnDOM');
  //console.log('localStrg2: ' + localStrg2);


  //? fallos ==================================================================
  if (!(palabraAleatoria.includes(userInput) || localStrg2.includes(userInput))) {//! cambio
    //console.log('fallo');
    fallos++;
    for (let i = 1; i <= 6; i++) {
      const fallo = document.querySelector(`#fallo${i}`);
      fallo.style.visibility = fallos === i ? 'visible' : 'hidden';
    }
    //console.log('Número de Fallos: ' + fallos);
    /* //! PERDER ******
    if (fallos >= 3) {
      document.querySelector('#text').innerHTML = 'GAME OVER';    
      overlayClok()
  
    }  */
  }
  //? innerHTML = fallos ----------------------------
  let fallosDOM = document.querySelector('#fallosID');
  fallosDOM.innerHTML = fallos;


  //! PERDER *** innerHTML = 'GAME OVER' + overlay + reload 
  if (fallos >= 6) {
    document.querySelector('#text').innerHTML = 'GAME OVER';
    overlayClok()
  } 
  //! GANAR *** innerHTML = 'WINNER' + overlay + reload
  else if (!palabraConOcurrenciasYespacios.includes('_')) {
    document.querySelector('#text').innerHTML = 'WINNER';
    overlayClok()
  }

});
