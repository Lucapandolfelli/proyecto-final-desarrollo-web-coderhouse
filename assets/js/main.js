let openMenu = document.getElementById('btn-toggle');
let closeMenu = document.getElementById('btn-toggle-close');
let menu = document.getElementById('menu');

openMenu.addEventListener('click', () =>{
    menu.style.display = 'flex';
    menu.classList.remove('move-out');
    menu.classList.add('move-in');
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () =>{
    /* menu.style.display = 'none'; */
    menu.classList.remove('move-in');
    menu.classList.add('move-out');
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
});