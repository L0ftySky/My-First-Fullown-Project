function acceptChanges() {
    const NewNickNameInpt = document.querySelector(".NewNick");
    const NewAvatarUrlInpt = document.querySelector('.NewAvaUrl');

    const NewNickValue = NewNickNameInpt.value;
    const NewAvaUrlValue = NewAvatarUrlInpt.value;

    
    if (localStorage.getItem('userNickname') && localStorage.getItem('userAvatarUrl')) {
        console.log('Оба набора данных найдены в локальном хранилище, запускается функция.');
            if (NewNickValue.trim() !== "" || NewAvaUrlValue.trim() !== "") {
                if (NewNickValue.trim() !== "") {
                    localStorage.setItem("userNickname", NewNickValue);
                    console.log("Значение userNickname успешно обновлено в localStorage.");
                }
            
                if (NewAvaUrlValue.trim() !== "") {
                    localStorage.setItem("userAvatarUrl", NewAvaUrlValue);
                    console.log("Значение userAvatarUrl успешно обновлено в localStorage.");
                }
            
                alert("Данные успешно обновлены!");
            } else {
                console.log("Оба поля пустые. Данные не изменены.");
            }
    } else {
        console.log('Один или оба набора данных отсутствуют в локальном хранилище.');
        alert('У вас нет аккаунта. Создайте его!');
        window.location.href = '../html/profil.html';
    }

    
}

function clearLocalStorage() {
    const isConfirmed = confirm("Вы уверены, что хотите удалить аккаунт?");
    if (localStorage.getItem('userNickname') && localStorage.getItem('userAvatarUrl')) {
        if (isConfirmed) {
            localStorage.removeItem("userNickname");
            localStorage.removeItem("userAvatarUrl");

            console.log("Данные успешно удалены из localStorage.");
            console.log("Аккаунт успешно удален.");
        } else {
            console.log("Удаление аккаунта отменено.");
            alert("Отмена удаления аккаунта успешна!");
        }
    }else{
        console.log('Один или оба набора данных отсутствуют в локальном хранилище.');
        alert('У вас нет аккаунта. Прежде чем удалять аккаунт, его нужно создать. Вперёд!!');
        window.location.href = '../html/profil.html';
    }

}