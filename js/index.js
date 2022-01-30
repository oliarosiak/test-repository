const headerRef = document.querySelector('.header__main-page');

const randomImg = document.createElement('img');
randomImg.src = "https://picsum.photos/600/200";
randomImg.alt = 'main page picture';
randomImg.height = '200';

headerRef.before(randomImg);