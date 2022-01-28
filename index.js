// Elementos del DOM
const iconMenuMobile = document.querySelector("#icon-menu-mobile")
const menuOpenMobile = document.querySelector(".content-menu-mobile")
const iconCloseMenuMobile = document.querySelector(".fa-times")
const idBtnMinus = document.getElementById("id-btn-minus")
const idBtnPlus = document.getElementById("id-btn-plus")
let numberCount = document.getElementById("number-count")
const btnAddToCart = document.getElementById("btn-add-to-cart")
const priceProduct = document.querySelector("#price-product")
const spanPriceModal = document.querySelector(".price-modal")
const totalPrice = document.querySelector(".total-price")
//abrir y cerrar menu mobile
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

//Carrousel imagenes mobile//

window.onload = ()=>{
    const imagenes = [
        `./img/image-product-1.jpg`,
        `./img/image-product-2.jpg`,
        `./img/image-product-3.jpg`,
        `./img/image-product-4.jpg`
    ];

    const tiempoIntervaloMilSeg = 1000;
    let posicionActual = 0;
    let botonRetroceder = document.querySelector("#retroceder");
    let botonAvanzar = document.querySelector("#avanzar");
    let imagen = document.querySelector("#imagen");

/*** Funcion que cambia la imagen en la siguiente posicion (next)*/

    const pasarImagen = ()=>{
        if(posicionActual >= imagenes.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
/*** Funcion que cambia la imagen en posicion anterior (back)*/

    const retrocederImagen = ()=>{
        if(posicionActual <= 0) {
            posicionActual = imagenes.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }
 /*** Funcion que actualiza la imagen de imagen dependiendo de posicionActual*/   
    const renderizarImagen = ()=>{
        imagen.style.backgroundImage = `url(${imagenes[posicionActual]})`;
    }

    // Eventos
    botonAvanzar.addEventListener('click', pasarImagen);
    botonRetroceder.addEventListener('click', retrocederImagen);
    

    // Iniciar
    renderizarImagen();

}

/***Funcion add unit */
numberCount = 0;

let spanNumberCount = document.querySelector(".span-number-count")
idBtnMinus.onclick = ()=>{
    numberCount = numberCount-1
    spanNumberCount.innerHTML =`${numberCount}`
    console.log(numberCount,"minus")
    if(numberCount === 0){
        idBtnMinus.disabled =true
    }else{
        idBtnMinus.disabled = false
    }
}

idBtnPlus.onclick = ()=>{
    numberCount = numberCount+ 1
    spanNumberCount.innerHTML =`${numberCount}`
    console.log(numberCount, "plus")
    if(numberCount >0){
        idBtnMinus.disabled = false
    }
}

//text modal el p se muestra si no hay productos
// maquetar seccion que muestra cuando se agrega producto
// hacer funcion 
const spanUnit = document.querySelector(".span-unit")
let resultado = 0
btnAddToCart.onclick= ()=>{
    spanUnit.innerHTML = `${numberCount}`
   let resultado = numberCount * 125
    totalPrice.innerHTML = `$ ${resultado}`
}




