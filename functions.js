'use strict';

// Functions:
let totalTime = 3;
//Cuenta atrás
function updateClock() {
  document.getElementById('cuenta-atras').innerHTML = totalTime;
  if (!(totalTime === 0)) {
    totalTime--;
  }
}

//reloadPage
function reloadPage() {
  location.reload(true);
}

//overlayClok
function overlayClok() {
  document.getElementById('overlay').style.display = 'block';
  setTimeout(reloadPage, 5000);
  setInterval(updateClock, 1000);
  inputLetra.disabled = true;
}
export { overlayClok };
