const productImages = document.querySelectorAll(".product-images img"); // selecionar todas las imagenes thumbs
const productImageSlide = document.querySelector(".image-slider"); // selecionar las imagenes de elemento slider

let activeImageSlide = 0; // por defecto slider imagenes

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

// toggle: boton de unidad
const unidadBtns = document.querySelectorAll('.unidad-radio-btn');
let checkedBtn = 0;

unidadBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        unidadBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})