function getDataFromLocalStorage() {
    const nickname = localStorage.getItem('userNickname');
    const avatarUrl = localStorage.getItem('userAvatarUrl');
    const otherDataString = localStorage.getItem('userOtherData');


    document.getElementById('nickname').innerHTML = nickname;

    const avatarImage = document.createElement('img');
    avatarImage.src = avatarUrl || '';
    avatarImage.alt = 'User Avatar';
    document.getElementById('avatar').appendChild(avatarImage);
}

getDataFromLocalStorage();