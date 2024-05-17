    
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
        const menu = document.querySelector('.addContentMenu');
        const button = document.querySelector('.addContentButton');
    
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            menu.classList.add('invisible');
        }
    });
    
    function saveToLocalStorage() {
        const commentValue = document.getElementById('field1').value;
        const urlValue = document.getElementById('field2').value;
        const formatRadios = document.querySelectorAll('input[name="contact"]');

        const commentField = document.getElementById('field1');
        const urlField = document.getElementById('field2');

        const userNickname = localStorage.getItem("userNickname");
        const userUrlAvatar = localStorage.getItem("userAvatarUrl");
        
        if (userNickname && userUrlAvatar) {
            
            console.log(`Данные найдены в локальном хранилище:\nНикнейм: ${userNickname}\nАватар: ${userUrlAvatar}`);
            let selectedFormat;
    
            if (commentField.value && urlField.value) {
                console.log('Оба поля заполнены');

                if (!urlField.value.match(/\.(jpg|jpeg|png|gif)$/i)) {
                    alert('Вы вставили ссылку на что-то иное, а не картинку')
                } else {
                    formatRadios.forEach(radio => {
                        if (radio.checked) {
                            selectedFormat = radio.value;
                        }
                    });
            
                    const data = `${commentValue}|${urlValue}|${selectedFormat}`;
                    localStorage.setItem('userFormData', data);
                    console.log('Значения сохранены в локальное хранилище!');
                    addNewBlock(commentValue, urlValue, formatRadios);
                    commentField.value = '';
                    urlField.value = '';
                }
                
            } else {
                alert('Одно из полей не заполнено.');
            }

        }else{
            alert("Вам необходимо зарегистрироваться для загрузки контента!")
        }
        
    }
    
    function addNewBlock(comment, url, format) {
        let userAvatarUrl = localStorage.getItem('userAvatarUrl');
        let userNickname = localStorage.getItem('userNickname');

        console.log(userAvatarUrl);
        console.log(userNickname);

        const newBlock = document.createElement('div');
        newBlock.className = 'feed-block';
    
        newBlock.innerHTML = `
            <div class="feed-etc"> 
                <img src="${userAvatarUrl}" alt="" class="user-avatar"> 
                <span class="user-name">${userNickname}</span> 
            </div>
            <div class="feed-comment"> 
                <span class="feed-comment-text">${comment}</span>
            </div>
            <div class="feed-img">
                <img src="${url}" alt="${format}">
            </div>
        `;
        
        const container = document.querySelector('.feed-container'); 
    
        container.appendChild(newBlock);
    }