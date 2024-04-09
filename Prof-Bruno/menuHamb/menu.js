const menuHamb = document.getElementById('menuHamb');
const menuResponsive = document.getElementById('menu-responsive');
const icon = document.querySelector('#iconMenu');

menuHamb.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu-responsive-active');

    if (icon.className === 'fa-solid fa-bars') {
        icon.className = icon.className.replace('fa-solid fa-bars', 'fa-sharp fa-solid fa-xmark');
    }else{
        icon.className = icon.className.replace('fa-sharp fa-solid fa-xmark', 'fa-solid fa-bars');
    }
})