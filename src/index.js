const button = document.querySelector('.like-btn');
const buttonText = button.querySelector('.like-text');

let isLiked = false;

button.addEventListener('click', () => {
  isLiked = ! isLiked;
  buttonText.innerHTML = isLiked ? '取消' : '点赞';
}, false);
