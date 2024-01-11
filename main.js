'use strict';

const palabras = ['js', 'javascript', 'hackaboss'];
let letrasPalabraAleatoriaEnGuiones = [];
let letra = '';

const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
console.log('2:palabraAleatoria: ' + palabraAleatoria);

let letrasPalabraAleatoria = palabraAleatoria.split('');
console.log('4.1:letrasPalabraAleatoria: ' + letrasPalabraAleatoria);

letrasPalabraAleatoria.forEach((element) => {
  letrasPalabraAleatoriaEnGuiones.push('_');
});

console.log(
  '4.2:letrasPalabraAleatoriaEnGuiones: ' + letrasPalabraAleatoriaEnGuiones
);

let palabraHtml = document.querySelector('#palabra');

let palabraConGuionesSinComas = letrasPalabraAleatoriaEnGuiones.join(' ');
console.log('3.2 palabraConGuionesSinComas: ' + palabraConGuionesSinComas);

palabraHtml.innerHTML = palabraConGuionesSinComas;

let form = document.querySelector('.my-form');

let localStrg2 = '';
let fallos = 0;
let fallosTotal = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  //*cazando valor del input
  let userInput = form.valueOfAtrNameOfinput.value;
  console.log('LETRA Q INTRODUCE EL USUARIO: ' + userInput);

  let palabraConOcurrencias = '';

  for (const letra of palabraAleatoria) {
    if (letra === userInput || localStrg2.includes(letra)) {
      palabraConOcurrencias += letra;
    } else {
      palabraConOcurrencias += '_';
    }
  }
  console.log('palabraConOcurrencias: ' + palabraConOcurrencias);
  inputLetra.focus();
  form.reset();
  const palabraConOcurrenciasEnDOM = document.querySelector('#palabra');

  let palabraConOcurrenciasArray = palabraConOcurrencias.split('');
  console.log('palabraConOcurrenciasArray: ' + palabraConOcurrenciasArray);

  let palabraConOcurrenciasYespacios = palabraConOcurrenciasArray.join(' ');
  console.log(
    'palabraConOcurrenciasYespacios: ' + palabraConOcurrenciasYespacios
  );

  palabraConOcurrenciasEnDOM.innerHTML = palabraConOcurrenciasYespacios;

  localStorage.setItem(
    'palabraConOcurrenciasEnDOM',
    palabraConOcurrenciasYespacios
  );

  localStrg2 = localStorage.getItem('palabraConOcurrenciasEnDOM');
  console.log('localStrg2: ' + localStrg2);

  if (palabraAleatoria.includes(userInput) || localStrg2.includes(userInput)) {
    console.log('acierto');
  } else {
    console.log('fallo');
    fallos++;
    const fallo1 = document.querySelector('#fallo1');
    const fallo2 = document.querySelector('#fallo2');
    const fallo3 = document.querySelector('#fallo3');
    const fallo4 = document.querySelector('#fallo4');
    const fallo5 = document.querySelector('#fallo5');
    const fallo6 = document.querySelector('#fallo6');
    if (fallos === 1) {
      fallo1.style.visibility = 'visible';
    } else {
      fallo1.style.visibility = 'hidden';
    }
    if (fallos === 2) {
      fallo2.style.visibility = 'visible';
    } else {
      fallo2.style.visibility = 'hidden';
    }

    if (fallos === 3) {
      fallo3.style.visibility = 'visible';
    } else {
      fallo3.style.visibility = 'hidden';
    }
    if (fallos === 4) {
      fallo4.style.visibility = 'visible';
    } else {
      fallo4.style.visibility = 'hidden';
    }

    if (fallos === 5) {
      fallo5.style.visibility = 'visible';
    } else {
      fallo5.style.visibility = 'hidden';
    }

    if (fallos === 6) {
      fallo6.style.visibility = 'visible';
    } else {
      fallo6.style.visibility = 'hidden';
    }
    console.log('fallos: ' + fallos);
  }

  let fallosDOM = document.querySelector('#fallosID');

  fallosDOM.innerHTML = fallos;

  if (fallos >= 6) {
    // fallosDOM.innerHTML = 'Game Over';
    document.getElementById('overlay2').style.display = 'block';
    setTimeout(myFunction, 6000);
    function myFunction() {
      location.reload(true);
    }

    let totalTime = 5;

    function updateClock() {
      document.getElementById('cuenta-atras2').innerHTML = totalTime;

      if (totalTime === 0) {
        console.log('Final');
      } else {
        totalTime--;
        // setInterval(updateClock(), 1000);
        console.log('ok');
      }
    }
    updateClock();
    setInterval(updateClock, 1000);
    inputLetra.disabled = true;

    // const volverAJugar = document.querySelector('#volverAJugar');
    // volverAJugar.style.visibility = 'visible';

    // volverAJugar.addEventListener('click', (e) => {
    //   location.reload();
    //   inputLetra.focus();
    // });
  } else if (!localStrg2.includes('_')) {
    // fallosDOM.innerHTML = 'Ganaste';
    document.getElementById('overlay').style.display = 'block';
    setTimeout(myFunction, 6000);
    function myFunction() {
      location.reload(true);
    }
    let totalTime = 5;

    function updateClock() {
      document.getElementById('cuenta-atras').innerHTML = totalTime;

      if (totalTime === 0) {
        console.log('Final');
      } else {
        totalTime--;
        // setInterval(updateClock(), 1000);
        console.log('ok');
      }
    }
    updateClock();
    setInterval(updateClock, 1000);
    inputLetra.disabled = true;

    // const volverAJugar = document.querySelector('#volverAJugar');
    // volverAJugar.style.visibility = 'visible';

    // volverAJugar.addEventListener('click', (e) => {
    //   location.reload();
    //   inputLetra.focus();
    // });
  }
});
