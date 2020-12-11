const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
   if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
   } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
   }
});

document.querySelector('.menu-btn').addEventListener('click', () => {
   document.querySelector('.menu').classList.toggle('change');
});

document.querySelector('.menu').addEventListener('click', () => {
   document.querySelector('.menu').classList.toggle('change');
});