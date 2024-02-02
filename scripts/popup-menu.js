function openMenu() {
    let menuclass = document.getElementsByClassName('popup-menu')[0];
    if (menuclass.classList.contains("popped")) {
      menuclass.classList.remove("popped");
    } else {
      menuclass.classList.add("popped");
    }
  }