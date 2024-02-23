function validateAvatarUrl() {
    const avatarInput = document.getElementById('avatar');
    const avatarError = document.getElementById('avatar-error');
    const avatarUrl = avatarInput.value;

    if (!avatarUrl.match(/\.(jpg|jpeg|png|gif)$/i)) {
        avatarError.textContent = 'Пожалуйста, введите корректную ссылку на изображение.';
        avatarError.style.color = 'red'; // Устанавливаем красный цвет текста
    } else {
        avatarError.textContent = 'Изображение успешно загружено!';
        avatarError.style.color = 'green'; // Устанавливаем зеленый цвет текста
    }
}
function saveUserData() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const nickname = document.getElementById('nickname').value;
    const avatarUrl = document.getElementById('avatar').value;

    if (!firstName || !lastName || !email || !nickname || !avatarUrl) {
        alert('Пожалуйста, заполните все поля.');
        return; 
    }

    // Сохраняем данные о никнейме и URL аватара в локальном хранилище
    localStorage.setItem('userNickname', nickname);
    localStorage.setItem('userAvatarUrl', avatarUrl);

    // Сохраняем остальные данные в одной переменной
    const otherUserDataString = `${firstName}|${lastName}|${email}`;

    console.log('Данные успешно сохранены в локальном хранилище.');

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('nickname').value = '';
    document.getElementById('avatar').value = '';

    console.log(`Регистрация успешно завершена, добро пожаловать, ${nickname}`);

    window.location.href = '../html/checkprofil.html';

}
