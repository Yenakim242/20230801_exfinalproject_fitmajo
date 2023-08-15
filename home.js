const productContainers = [...document.querySelectorAll('.product-container')]; // '...document' : Spread operator - expands an array into a list
const preBtn = [...document.querySelectorAll('.pre-btn')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;  
    })

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
})


// calcula el margen que hay que añadiren la primera página
// cuando no modifique la variable => usa 'const'
// firstPageResize();
// SCROLL
// const navLinks = document.querySelectorAll("li");
// for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener("click", ()=>{
//         const pageNum = navLinks[i].getAttribute("data-page");
//         console.log(window.innerHeight);
//         scrollEffect("smooth", window.innerHeight * pageNum);
//     });
// }


// function scrollEffect(behavior, top) {
//     // console.log(behavior, pageName);
//     // quiere que envie un objeto , effecto de scroll que contiene algunos comportamientos
//     // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
//     window.scrollTo({ 
//         behavior: behavior,
//         top: top 
//     });
//     // window.alert(); // un metodo accionar dentro del navegador
// }

// function firstPageResize() {
//     const headerHeight = document.querySelector("header").offsetHeight; // PROPIEDAD que devuelve la altura (px) de un elemento.
//     // console.log(header_height);
//     const firstPage = document.querySelector(".home");
//     firstPage.style.marginTop = headerHeight + "px";
// }