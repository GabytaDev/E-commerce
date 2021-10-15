// abrir modal carrito

const iconShoppingCart = document.querySelector("#icon-shopping-cart")
const modalShoppingCart = document.querySelector(".content-modal-shopping-cart")

iconShoppingCart.onclick = ()=>{
    modalShoppingCart.classList.toggle("ocultar")
}