const products = [
    { // const tipusu tomb letrehozasa
        name : "Margharita",
        img : "img/001.jpg",
        prices : 3300,
        ingredients : ["szalámi", "kukorica", "sonka", "sajt", "fokhagyma"]
    },
    { // const tipusu tomb letrehozasa
        name : "Magyaros",
        img : "img/002.jpg",
        prices : 17980,
        ingredients : ["szalámi", "kukorica", "sonka", "sajt", "fokhagyma"]
    },
    { // const tipusu tomb letrehozasa
        name : "Songoku",
        img : "img/003.jpg",
        prices : 1670,
        ingredients : ["kukorica", "sonka", "sajt", "fokhagyma"]
    },
    { // const tipusu tomb letrehozasa
        name : "Chilis babos",
        img : "img/004.jpg",
        prices : 7400,
        ingredients : ["bab", "chili", "sonka", "sajt", "fokhagyma"]
    }
]; 

// egy valtozoba elmentjuk az elemeket
const productContainer = document.getElementById("product-container");
console.log(productContainer);

for (const product of products) 
{
    const cardHTML = `
    <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <h2>${product.name}</h2>
                <h3>${product.prices}</h3>
                <p>Összetevők: ${product.ingredients.join(", ")}</p>
                <button class="order-button">Megrendelés</button>
            </div>
    `;
    productContainer.innerHTML += cardHTML;
}

const orderButtons = document.querySelectorAll('.order-button');
console.log(orderButtons);

