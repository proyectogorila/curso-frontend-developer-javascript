const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarriotAside);


/* MENU EMERGENTE ASIDE */
function toggleCarriotAside() {
    /*  se conoce el estado de inactivo o activo de los menus deplegables .mobilMenu y .desktopMenu  */

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    /* se aplica una condicional que si se verifica que los menus   .mobilMenu y .desktopMenu estan activos se los desactiva*/
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    }

    /* activa o desactiva el menu */
    aside.classList.toggle('inactive');
}

/* MENU EMERGENTE DESKTOP EMAIL */
function toggleDesktopMenu() {

    /*  se conoce el estado de inactivo o activo de los menus deplegables .mobilMenu y .aside  */

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isAsideClose = aside.classList.contains('inactive');

    /* se aplica una condicional que si se verifica que los menus   .mobilMenu y .aside estan activos se los desactiva*/
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }
    if (!isAsideClose) {
        aside.classList.add('inactive');
    }

    /* activa o desactiva el menu */
    desktopMenu.classList.toggle('inactive');
}

/* MENU EMERGENTE MOBIL VERSION */
function toggleMobileMenu() {

    /*  se conoce el estado de inactivo o activo de los menus deplegables .descktopMenu y .aside  */

    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isAsideClose = aside.classList.contains('inactive');

    /* se aplica una condicional que si se verifica que los menus   .desktopMenu y .aside estan activos se los desactiva*/
    if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    }
    if (!isAsideClose) {
        aside.classList.add('inactive');
    }

    /* activa o desactiva el menu */
    mobileMenu.classList.toggle('inactive');
}


/* CREAR LA LISTA DE PRODUCTOS */
const productLIst = [];
productLIst.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productLIst.push({
    name: 'pantalla',
    price: 240,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productLIst.push({
    name: 'laptop',
    price: 1300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productLIst.push({
    name: 'Microhonas',
    price: 260,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productLIst.push({
    name: 'lavaplatos',
    price: 160,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts(arr) {

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // product = {name, price, image} --> product.image

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInforDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInforDiv.appendChild(productPrice);
        productInforDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInforDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }

}

renderProducts(productLIst);