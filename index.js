//abrir y cerrar menu mobile
const iconMenuMobile = document.querySelector("#icon-menu-mobile")
const menuOpenMobile = document.querySelector(".content-menu-mobile")
const iconCloseMenuMobile = document.querySelector(".fa-times")

iconMenuMobile.onclick = ()=>{
    menuOpenMobile.style.display = "block"
}
iconCloseMenuMobile.onclick = ()=> {
    menuOpenMobile.style.display = "none"
}
// abrir modal carrito

const iconShoppingCart = document.querySelector("#icon-shopping-cart")
const modalShoppingCart = document.querySelector(".content-modal-shopping-cart")

iconShoppingCart.onclick = ()=>{
    modalShoppingCart.classList.toggle("ocultar")
    
}


/*
const desktop = window.matchMedia('(max-width: 1025px)');

function desktop_responsive(){ 
     if(desktop.matches){ 
         $('body').css('background','darkblue'); } 
} 
desktop_responsive(desktop); 
desktop.addEventListener(desktop_responsive); 

const mobile = window.matchMedia('(max-width: 375px)'); 
function mobile_responsive(){ 
    if (mobile.matches){
         $('body').css('background','darkorange'); } 
} 
mobile_responsive(mobile); 
mobile.addEventListener(mobile_responsive);*/