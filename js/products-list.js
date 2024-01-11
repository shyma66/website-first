const responce = await fetch("api/products-list.json");
const products = await responce.json();

function renderProducts(products) {
    let productsDomString = "";
    for (const product of products) {
        productsDomString += `
        <article class="products__card-item">
            <div class="card__image">
                <img src="${product.image}" alt="${product.alt}">
            </div>
            <h3 class="card__title">${product.title}</h3>
            <p class="card__description">${product.description}</p>
            <a class="button" href="single-product.html">Lern More</a>
        </article>`;
    }
    const productsContainer = document.querySelector(".products__cards");
    productsContainer.innerHTML = productsDomString;
}

renderProducts(products);