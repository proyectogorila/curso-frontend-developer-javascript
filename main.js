const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarriotAside);

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