    
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
        let selectedFormat;
    
        formatRadios.forEach(radio => {
            if (radio.checked) {
                selectedFormat = radio.value;
            }
        });
    
        const data = `${commentValue}|${urlValue}|${selectedFormat}`;
        localStorage.setItem('userFormData', data);
        console.log('Значения сохранены в локальное хранилище!');
    
        // Вызываем функцию для добавления нового блока и передаем ей параметры
        addNewBlock(commentValue, urlValue, formatRadios);
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