
const incrementBtn = document.getElementById('incrementer');
const decrementBtn = document.getElementById('decrementer');
const priceDisplay = document.getElementById('cart-price');

let quantity = 1;
const unitPrice = 299;

function updatePrice() {
  priceDisplay.textContent = `Total: RS ${quantity * unitPrice}`;
}

incrementBtn.addEventListener('click', () => {
  if (quantity < 5) {
    quantity++;
    updatePrice();
  }
});

decrementBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    updatePrice();
  }
});

updatePrice();
