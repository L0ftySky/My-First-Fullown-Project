    
    function openAddContentMenu() {
        let menuclass = document.getElementsByClassName('addContentMenu')[0];
        if (menuclass.classList.contains("invisible")) {
            menuclass.classList.remove("invisible");
        }else{
            menuclass.classList.add("invisible");
        }
    }

    const button = document.querySelector('.addContentButton');
    button.addEventListener('click', openAddContentMenu);

    document.addEventListener('click', (event) => {
        const menu = document.querySelector('.addContentMenu'); // Замените '.your-menu-class' на ваш класс меню
        const button = document.querySelector('.addContentButton'); // Замените '.your-button-class' на ваш класс кнопки
    
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            menu.classList.add('invisible'); // Добавляем класс "invisible"
        }
    });
    
    function saveToLocalStorage(){
            const field1Value = document.getElementById('field1').value;
            const field2Value = document.getElementById('field2').value;
            const field3Value = document.getElementById('field3').value;

            localStorage.setItem('field1', field1Value);
            localStorage.setItem('field2', field2Value);
            localStorage.setItem('field3', field3Value);

            alert('Values saved to localStorage!');
    }

    