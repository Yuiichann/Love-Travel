const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


// hover item packages
const itemHover = $('.euro-packages__main-content')

itemHover.onmouseenter = function(e) {
    this.style.opacity = 1 

    this.onmouseleave = function(e) {
        this.style.opacity = 0
    }
}


// active menu on PC
const buttonMenuPc = $('.header__button') 
const menuOnPc = $('.header__menu-packages')
const buttonCloseMenuPc = $('.header__menu-packages-close')
const overlayMenu = $('.header__menu-overlay')

buttonMenuPc.onclick = function(e) {
    menuOnPc.style.transform = 'translateX(0)'
    menuOnPc.style.opacity = 1
    overlayMenu.style.display = 'block'
}
buttonCloseMenuPc.onclick = function(e) {
    menuOnPc.style.transform = 'translateX(100%)'
    menuOnPc.style.opacity = 0
    overlayMenu.style.display = 'none'
}
overlayMenu.onclick = () => {
    menuOnPc.style.transform = 'translateX(100%)'
    menuOnPc.style.opacity = 0
    overlayMenu.style.display = 'none'
}


