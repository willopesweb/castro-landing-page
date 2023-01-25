import '../scss/style.scss';
import {products, getProductsHTML} from './products';
import {getOffersHTML} from './offers';


document.querySelector('.js-products').innerHTML = getProductsHTML(products);


document.querySelector('.js-offers').innerHTML = getOffersHTML(products);


const colorsProducts = document.querySelectorAll('.js-product-color');

let product;
let color;

colorsProducts.forEach((color) => {
    color.addEventListener('click', ({ target }) => {
        product = target.getAttribute('data-product');
        color = target.getAttribute('data-color');

        let selectedProduct = products.filter((e) => e.name === product)[0];
        let productHTML = document.getElementById(`product-${selectedProduct.name}`);
        selectedProduct.colors.forEach((selectedColor) => {
            if (selectedColor.disponible && selectedColor.color === color) {
                productHTML.querySelector('.js-product-image').src = `assets/build/img/products/${selectedColor.img}`;
                productHTML.querySelectorAll('.js-product-link').forEach(link => link.href = selectedColor.link);
            }
        });
    });
})


const colorsOffers = document.querySelectorAll('.js-offer-color');
let offer;
let colorOffer;

colorsOffers.forEach((color) => {
  color.addEventListener('click', ({ target }) => {
    offer = target.getAttribute('data-product');
    colorOffer = target.getAttribute('data-color');

    let selectedOffer = products.filter((e) => e.name === offer)[0];

    let offerHTML = document.getElementById(`offer-${selectedOffer.name}`);

    selectedOffer.colors.forEach((selectedColor) => {
      if (selectedColor.disponible && selectedColor.color === colorOffer) {
        offerHTML.querySelector('.js-offer-image').src = `assets/build/img/products/${selectedColor.img}`;
        offerHTML.querySelector('.js-offer-price').innerHTML = selectedColor.price.toFixed(2).replace('.', ',');
        offerHTML.querySelector('.js-offer-parcel').innerHTML = `R$ ${selectedColor.parcelsPrice.toFixed(2).replace('.', ',')}`;
        offerHTML.querySelectorAll('.js-offer-link').forEach(link => link.href = selectedColor.link);
      }
    });
  });
}) 