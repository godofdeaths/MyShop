// Array of products
const products = [
    { name: 'Smartphone', description: 'High-performance phone', price: 'Rs.15,999' },
    { name: 'Laptop', description: 'Lightweight and powerful', price: 'Rs.45,999' },
    { name: 'Tablet', description: 'Portable and versatile', price: 'Rs.11,999' },
    { name: 'Smartwatch', description: 'Track your fitness', price: 'Rs.1,699' },
    { name: 'Headphones', description: 'Noise-cancelling', price: 'Rs.1,899' }
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
