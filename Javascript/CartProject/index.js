document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('.card .card-actions button');
  const cartContainer = document.querySelector('.cart-container');

  let total = 0;

  buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const title = card.querySelector('.product-title').textContent;
      const stockElement = card.querySelector('.product-stock');
      const priceElement = card.querySelector('.product-price span');

      const price = parseFloat(priceElement.textContent.replace('$', ''));

      if (stockElement) {
        let stock = parseInt(stockElement.textContent.replace('stock:', '').trim(), 10);
        if (stock > 0) {
          stock -= 1;
          stockElement.textContent = `stock: ${stock}`;

          // Update cart container
          const cartItem = document.createElement('p');
          cartItem.textContent = `${title} - $${price}`;
          cartContainer.appendChild(cartItem);

          // Update total
          total += price;
          updateTotal();
        } else {
          alert('Out of stock!');
        }
      } else {
        alert('This product does not manage stock.');
      }
    });
  });

  function updateTotal() {
    let totalElement = document.getElementById('cart-total');
    if (!totalElement) {
      totalElement = document.createElement('p');
      totalElement.id = 'cart-total';
      cartContainer.appendChild(totalElement);
    }
    totalElement.textContent = `Total Cart Value: $${total.toFixed(2)}`;
  }
});
