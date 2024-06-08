// Function to create product cards
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    `;
    return productCard;
}

// Function to display products on the UI
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    });
}




// Event listener to display products when the "Products" link is clicked
document.getElementById('products-link').addEventListener('click', function(event) {
    event.preventDefault();
    
    const products = [
        { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10 },
        { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20 },
        { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 30 },
        { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 40 },
        { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 50 }
    ];
    displayProducts(products);
    productList.innerHTML = ''; // Clear existing content
});

// Display products when the page loads
window.onload = function() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
};


// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToTop();


});


// Function to display home content
function displayHomeContent() {
   
    const productList = document.getElementById('product-list');
    productList.innerHTML = '<h2>Welcome to our Futuristic Shop!</h2><p>Explore our amazing products...</p>';
}

// Event listener for the "Home" link
document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    displayHomeContent();
});

