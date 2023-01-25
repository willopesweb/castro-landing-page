export const products = [
    {
        name: "Baby",
        desc: "Purificador de água Soft Baby sem refrigeração",
        mainOffer: false,
        serve: "",
        colors: [
            {
                color: "white",
                img: "baby-white.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificador-de-agua-soft-baby-branco",
                price: 415,
                parcelsPrice: 69.17,
                disponible: true
            },
            {
                color: "red",
                img: "baby-white.png",
                link: "",
                price: 415,
                parcelsPrice: 69.17,
                disponible: false
            },
            {
                color: "black",
                img: "baby-white.png",
                link: "",
                price: 415,
                parcelsPrice: 69.17,
                disponible: false
            }
        ]
    },
    {
        name: "Fit",
        desc: "Purificador de água refrigerado por compressor Soft Fit",
        mainOffer: true,
        serve: "15 pessoas",
        colors: [
            {
                color: "white",
                img: "fit-white.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-fit-branco",
                price: 1185,
                parcelsPrice: 197.5,
                disponible: true
            },
            {
                color: "red",
                img: "fit-red.png",
                link: "",
                price: 1226,
                parcelsPrice: 204.33,
                disponible: false
            },
            {
                color: "black",
                img: "fit-black.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-fit-new-black",
                price: 1226,
                parcelsPrice: 204.33,
                disponible: true
            },
            {
                color: "gray",
                img: "fit-gray.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-fit-prata",
                price: 1226,
                parcelsPrice: 204.33,
                disponible: true
            }
        ]
    },
    {
        name: "Slim",
        desc: "Purificador de água refrigerado por compressor Soft Slim",
        mainOffer: false,
        serve: "15 pessoas",
        colors: [
            {
                color: "black",
                img: "slim-black.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-slim-new-black",
                price: 1226,
                parcelsPrice: 204.33,
                disponible: true,
            },
            {
                color: "red",
                img: "slim-red.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-slim-cereja",
                price: 1185,
                parcelsPrice: 197.50,
                disponible: true,
            },
            {
                color: "white",
                img: "slim-white.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-slim-branco",
                price: 1226,
                parcelsPrice: 204.33,
                disponible: true,
            },
            {
                color: "gray",
                img: "slim-gray.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-slim-prata",
                price: 1226,
                parcelsPrice: 204.33,
                disponible: true,
            },
        ]

    },
    {
        name: "Star",
        desc: "Purificador de água refrigerado por compressor Soft Star",
        mainOffer: false,
        serve: "15 pessoas",
        colors: [
            {
                color: "gray",
                img: "star-gray.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-star-prata",
                price: 1226,
                parcelsPrice: 204.33,
                disponible: true,
            },
            {
                color: "red",
                img: "star-red.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-star-cereja",
                price: 1226,
                parcelsPrice: 204.33,
                disponible: true,
            },
            {
                color: "black",
                img: "star-black.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-star-new-black",
                price: 1226,
                parcelsPrice: 204.33,
                disponible: true,
            },
            {
                color: "white",
                img: "star-white.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-star-branco",
                price: 1185,
                parcelsPrice: 197.50,
                disponible: true,
            }
        ]

    },
    {
        name: "Plus",
        desc: "Purificador de água refrigerado por compressor Soft Plus - Uso Comercial",
        mainOffer: false,
        serve: "30 pessoas",
        colors: [
            {
                color: "red",
                img: "plus-red.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-plus-cereja",
                price: 1410,
                parcelsPrice: 235,
                disponible: true,
            },
            {
                color: "black",
                img: "plus-black.png",
                link: "",
                price: 1410,
                parcelsPrice: 235,
                disponible: false,
            },
            {
                color: "white",
                img: "plus-white.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-plus-branco",
                price: 1361,
                parcelsPrice: 226.83,
                disponible: true,
            },
            {
                color: "gray",
                img: "plus-gray.png",
                link: "https://www.solucoescastro.com.br/purificadores-e-filtros-de-agua/purificadores-soft/purificador-agua-soft-plus-prata",
                price: 1410,
                parcelsPrice: 235,
                disponible: true,
            }
        ]
    },
];

export function getProductsHTML(products) {
    let html = "";
    products.forEach((product) => {
        html += `<article class="l-product" id="product-${product.name}">`;
        html += `<h3 class="l-product__title">${product.name}</h3>`;
        html += `<img loading="lazy" class="l-product__image js-product-image" src="assets/src/img/products/${product.colors[0].img}" alt="${product.name}">`;
        html += `<div class="l-product__colors"><span>Cores</span>`;
        product.colors.forEach(({ color, disponible }) => {
            html += `<span data-product="${product.name}" data-color="${color}" class="l-product__color js-product-color ${color} ${disponible ? 'is-disponible' : ''}"></span>`;
        });
        html += `</div><div class="l-product__actions">`;
        html += `<h4 class="l-product__actions-desc">${product.desc}</h4>`;
        html += `<a target="_blank" href="${product.colors[0].link}" class="c-button l-product__actions-button js-product-link">Saiba mais</a>`;
        html += `<a target="_blank" href="${product.colors[0].link}" class="c-button c-button--secondary js-product-link">Comprar agora!</a>`;
        html += `</div></article>`;
    });

    return html;
}



