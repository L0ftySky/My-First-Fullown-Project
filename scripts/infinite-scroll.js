/*const block = document.getElementByClass('feed-container');

  function loadMoreItems() {
    block.innerHTML += `
    <div class="feed-block">
            <div class="feed-etc"> 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXB2ytNJYEaaLXWJCQLZgj9Q1MdqrxBwrRQ&usqp=CAU" alt="" class="user-avatar"> 
                <span class="user-name">nickname</span> 
            </div>
            <div class="feed-comment"> 
                <span class="feed-comment-text">comment</span>
            </div>
            <div class="feed-img">
                <img src="https://www.ixbt.com/img/n1/news/2023/5/4/2023-06-15%2011.55.09_large.jpg" alt="img">
            </div>
        </div>
    `;    
  }
 block.addEventListener('scroll', () => {
 loadMoreItems();
 console.log("Скролл выполнен");
 });
*/
 const container = document.getElementById('feed-container');

container.addEventListener('scroll', () => {
    // Ваш код для добавления новых блоков
    // Например, создание нового элемента и добавление его в контейнер
    const newBlock = document.createElement('div');
    newBlock.textContent = 'Новый блок';
    newBlock.innerHTML += `
    <div class="feed-block">
            <div class="feed-etc"> 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXB2ytNJYEaaLXWJCQLZgj9Q1MdqrxBwrRQ&usqp=CAU" alt="" class="user-avatar"> 
                <span class="user-name">nickname</span> 
            </div>
            <div class="feed-comment"> 
                <span class="feed-comment-text">comment</span>
            </div>
            <div class="feed-img">
                <img src="https://www.ixbt.com/img/n1/news/2023/5/4/2023-06-15%2011.55.09_large.jpg" alt="img">
            </div>
        </div>
    `;
    container.appendChild(newBlock);
});