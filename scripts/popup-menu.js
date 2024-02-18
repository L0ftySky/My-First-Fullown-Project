function openMenu(){
    let menuclass = document.getElementsByClassName('popup-menu')[0];
    if (menuclass.classList.contains("popped")) {
      menuclass.classList.remove("popped");
    } else {
      menuclass.classList.add("popped");
    }
  }
function ProfilCheckFromIndex(){
  if (localStorage.getItem('userNickname')) {
    window.location.href = 'html/checkprofil.html';
    console.log('Инфа есть!');
  } else {
    window.location.href = 'html/profil.html';
    console.log('Инфы нет!');
}
}
function ProfilCheckFromOtherHTML(){
  if (localStorage.getItem('userNickname')) {
    window.location.href = '../html/checkprofil.html';
    console.log('Инфа есть!');
  } else {
    window.location.href = '../html/profil.html';
    console.log('Инфы нет!');
}
}