const createFooter = () => {
    let footer = document.querySelector('footer');
    
    footer.innerHTML = `
    <div class="footer-content">
    <img src="imagen/logo/Fit Majo Barcelona-1.jpg" alt="fit majo barcelona logo image" class="logo">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">proteína</li>
            <li><a href="#" class="footer-link">proteína whey</a></li>
            <li><a href="#" class="footer-link">aislado de whey</a></li>
            <li><a href="#" class="footer-link">proteína vegetal</a></li>
            <li><a href="#" class="footer-link">barritas proteicas</a></li>
            <li><a href="#" class="footer-link">galletas proteicas</a></li>
            <li><a href="#" class="footer-link">snacks proteicos</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">nutrición</li>
            <li><a href="#" class="footer-link">creatina</a></li>
            <li><a href="#" class="footer-link">bcaa</a></li>
            <li><a href="#" class="footer-link">barritas energéticas</a></li>
            <li><a href="#" class="footer-link">bebidas isotónicas</a></li>
            <li><a href="#" class="footer-link">geles energéticos</a></li>
            <li><a href="#" class="footer-link">avena y cereales</a></li>
            <li><a href="#" class="footer-link">cremas de frutos secos</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">ropa para hombre</li>
            <li><a href="#" class="footer-link">chaquetas</a></li>
            <li><a href="#" class="footer-link">chalecos</a></li>
            <li><a href="#" class="footer-link">sudaderas</a></li>
            <li><a href="#" class="footer-link">pantalones</a></li>
            <li><a href="#" class="footer-link">pantalones cortos</a></li>
            <li><a href="#" class="footer-link">camisetas</a></li>
            <li><a href="#" class="footer-link">tirantes</a></li>
            <li><a href="#" class="footer-link">ropa interior</a></li>
            <li><a href="#" class="footer-link">calcetines</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">ropa para mujer</li>
            <li><a href="#" class="footer-link">top</a></li>
            <li><a href="#" class="footer-link">camisetas</a></li>
            <li><a href="#" class="footer-link">sudaderas</a></li>
            <li><a href="#" class="footer-link">leggings</a></li>
            <li><a href="#" class="footer-link">pantalones cortos</a></li>
            <li><a href="#" class="footer-link">pantalones</a></li>
            <li><a href="#" class="footer-link">chaquetas</a></li>
            <li><a href="#" class="footer-link">chalecos</a></li>
            <li><a href="#" class="footer-link">sujetadores</a></li>
            <li><a href="#" class="footer-link">calcetines</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">sobre nosotros</p>
<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum?</p>
<p class="info">support emails - info@fitmajo.com</p>
<p class="info">teléfono - (+34) 634 967 498</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" class="social-link"><i class="fa-solid fa-xmark"></i></a>
        <a href="#" class="social-link"><i class="fa-brands fa-tiktok"></i></a>
    </div>
</div>
<p class="footer-credit">FitMajo - Tienda online de nutrición y ropa para fitness y deporte</p>
    `;
}

createFooter();