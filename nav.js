// Nav function
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="imagen/logo/fitmajobarcelona_banner.png" alt="Logotipo de fitmajo" class="brand-logo">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" name="search-box" id="buscador" placeholder="Buscar...">
            <button class="search-btn">buscar</button>
        </div>
        <a href="#"><img src="imagen/navbar/user-icon.jpg" alt="user-icon image"></a>
        <a href="#"><img src="imagen/navbar/cart-icon.jpg" alt="cart-icon image"></a>
    </div>
</div>
<ul class="lists-container">
    <li class="list-item"><a href="#" class="link">inicio</a></li>
    <li class="list-item"><a href="#" class="link">proteína</a></li>
    <li class="list-item"><a href="#" class="link">nutrición</a></li>
    <li class="list-item"><a href="#" class="link">ropa para hombre</a></li>
    <li class="list-item"><a href="#" class="link">ropa para mujer</a></li>
    <li class="list-item"><a href="#" class="link">sobre nosotros</a></li>
    <li class="list-item"><a href="#" class="link">contacto</a></li>
</ul>
    `;
}

createNav();    