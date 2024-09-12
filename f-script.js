// Array of products
const products = [
    { name: "Men's Clothing",  price: 'Strting from \n Rs.499' },
    { name: "Women's Clothing", price: 'Strting from \n Rs.299' },
    { name: "Kids Clothing", price: 'Strting from \n Rs.349' },
    { name: "Footwear ", price: 'Strting from \n Rs.249' },
    { name: "Essentials", price: 'Strting from \n Rs.49' }
];

// Get the product list container
const productList = document.getElementById('productList');

// Function to create a product card for each product
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const productTitle = document.createElement('h3');
    productTitle.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const productPrice = document.createElement('span');
    productPrice.textContent = product.price;

    // Append elements to the product card
    productCard.appendChild(productTitle);
    productCard.appendChild(productDescription);
    productCard.appendChild(productPrice);

    // Add the product card to the product list
    productList.appendChild(productCard);
}

// Loop through the products array and create a card for each product
products.forEach(product => {
    createProductCard(product);
});
