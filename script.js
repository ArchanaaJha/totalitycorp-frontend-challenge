const products = [
    {
      title: 'Product 1',
      price: 19.99,
      image: 'product1.jpg',
    },
    {
      title: 'Product 2',
      price: 24.99,
      image: 'product2.jpg',
    },
    // Add more product items here
  ];
  
  function renderProductCards() {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';
  
    products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      productCard.innerHTML = `
        <img src="images/${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>$${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
      `;
  
      productContainer.appendChild(productCard);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderProductCards);
  