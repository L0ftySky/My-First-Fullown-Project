function openMenu(){
    let menuclass = document.getElementsByClassName('popup-menu')[0];
    
    const menuImage = document.querySelector('.menuImage');

    if (menuclass.classList.contains("popped")) {
      menuImage.src = '../images/safe-opened.png';
      menuclass.classList.remove("popped");
    } else {
      menuImage.src = '../images/safe-closed.png';
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