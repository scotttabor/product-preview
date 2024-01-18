const image = document.querySelector('img');
const width = window.innerWidth;

if (width > 600) {
    image.src = "./images/image-product-desktop.jpg";
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        image.src = "./images/image-product-desktop.jpg";
    } else {
        image.src = "./images/image-product-mobile.jpg";
    }
})