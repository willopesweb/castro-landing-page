
export function getOffersHTML(products) {
    let offersHtml = '';

    products.forEach(({ name, desc, mainOffer, serve, colors }) => {
        offersHtml += `<article class="l-offer ${mainOffer ? 'l-offer--main' : ''}" id="offer-${name}">`;
        offersHtml += serve ? `<span class="l-offer__serve">Atende <br> até ${serve}</span>` : '';
        offersHtml += `<img loading="lazy" class="l-offer__freight" src="assets/src/img/frete.png" alt="Frete grátis para ${desc}">`;
        offersHtml += `<img loading="lazy" class="l-offer__image js-offer-image" src="assets/src/img/products/${colors[0].img}" alt="${desc}">`;
        offersHtml += `<h2 class="l-offer__title">${name}</h2>`;
        offersHtml += `<div class="l-product__colors"><span>Escolha uma<br> cor</span>`;
        colors.forEach(({ color, disponible }) => {
            offersHtml += `<span data-product="${name}" data-color="${color}" class="l-product__color js-offer-color ${color} ${disponible ? 'is-disponible' : ''}"></span>`;
        });
        offersHtml += `</div>`;
        offersHtml += `<div class="l-offer__price">`;
        offersHtml += `<b>por R$ <span class="js-offer-price">${colors[0].price.toFixed(2).replace('.', ',')}</span> à vista</b></div>`;
        offersHtml += `<h3 class="l-offer__parcels">Ou até 6x de <br><span class="js-offer-parcel">R$ ${colors[0].parcelsPrice.toFixed(2).replace('.', ',')}</span><br> sem juros!</h3>`;
        offersHtml += `<a href="${colors[0].link}" target="_blank" class="c-button c-button--secondary js-offer-link">Comprar agora!</a>`;
        offersHtml += `</article>`;
    });

    return offersHtml;
}

