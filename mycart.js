
function addToCart(product, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: product, img: image});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product Added to cart!');
}

function removeFromCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.name !== product);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartList = document.getElementById('items');
  cartList.innerHTML = '';
  cart.forEach(item => {
      let listItem = document.createElement('li');
      listItem.innerHTML = `<img src="${item.img}" alt="Product Image" width="180" > ${item.name}`;
      let removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = function() { removeFromCart(item.name); };
      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);
  });
}

window.onload = function() {
  if (document.getElementById('items')) {
      displayCartItems();
  }
}


