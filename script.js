// Get the pizza toppings section
const pizzaToppings = document.querySelector('#pizza-toppings');

// Get the checkboxes, crust form, sauce form, and toppings form
const checkboxes = pizzaToppings.querySelectorAll('input[type="checkbox"]');
const crustForm = document.querySelector('#crust-form');
const sauceForm = document.querySelector('#sauce-form');
const toppingsForm = document.querySelector('#toppings-form');

// Define the prices for each item
const crustPrices = {
  'pan': 8,
  'thin': 7,
  'stuffed': 9
};

const saucePrices = {
  'none': 0,
  'white': 1,
  'red': 1
};

const toppingPrices = {
  'pepperoni': 2,
  'mushrooms': 1,
  'onions': 1,
  'sausage': 2,
  'bell-peppers': 1
};

// Listen for changes to the checkboxes, crust form, and sauce form
pizzaToppings.addEventListener('change', (event) => {
  const selectedToppings = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const selectedCrust = crustForm.querySelector('input[name="crust"]:checked');
  const selectedSauce = sauceForm.querySelector('input[name="sauce"]:checked');

  let pizzaPrice = 0;
  if (selectedCrust) {
    pizzaPrice += crustPrices[selectedCrust.value];
  }
  if (selectedSauce) {
    pizzaPrice += saucePrices[selectedSauce.value];
  }
  selectedToppings.forEach((topping) => {
    pizzaPrice += toppingPrices[topping];
  });

  const selectedToppingsElement = pizzaToppings.querySelector('#selected-toppings');
  selectedToppingsElement.textContent = selectedToppings.length > 0
    ? `Toppings: ${selectedToppings.join(', ')}, Crust: ${selectedCrust.value}, Sauce: ${selectedSauce.value}, Price: $${pizzaPrice}`
    : 'No toppings selected.';

  const totalPriceElement = pizzaToppings.querySelector('#total-price');
  totalPriceElement.textContent = `Total: $${pizzaPrice}`;
});
