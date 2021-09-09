
/* ============ Menu Show/Hidden ============ */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



/* ============ Menu Show ============ */
/* Validade if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ============ Menu Hidden ============ */
/* Validade if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ============ Remove Menu Mobile ============ */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Quando clicamos em cada nav__link, nós removemos a classe do menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))