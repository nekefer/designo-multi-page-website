const hambugerButton = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');


hambugerButton.addEventListener('click', () => {
    // nav.classList.toggle('open');

    const isNavOpened = hambugerButton.getAttribute('aria-expanded') ;
    
    if(isNavOpened === 'true') {
        nav.classList.add('open');
        hambugerButton.setAttribute('aria-expanded', 'false');
        hambugerButton.setAttribute('src', './assets/shared/mobile/icon-close.svg')
    }else {
        nav.classList.remove('open');
        hambugerButton.setAttribute('aria-expanded', 'true');
        hambugerButton.setAttribute('src', './assets/shared/mobile/icon-hamburger.svg')
    }


});