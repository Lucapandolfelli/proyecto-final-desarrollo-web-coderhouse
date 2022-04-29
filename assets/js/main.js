let openMenu = document.getElementById('btn-toggle');
let closeMenu = document.getElementById('btn-toggle-close');
let menu = document.getElementById('menu');

openMenu.addEventListener('click', () =>{
    menu.style.display = 'flex';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () =>{
    menu.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
});