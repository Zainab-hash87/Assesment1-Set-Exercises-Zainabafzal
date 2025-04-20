function calculateTotal() {
  // Get the value entered in the "cost" input field and convert it to a floating-point number.
  // If the field is empty or invalid, default to 0.
  const cost = parseFloat(document.getElementById('cost').value) || 0;

  // Get the value entered in the "liters" input field and convert it to a floating-point number.
  // If the field is empty or invalid, default to 0.
  const liters = parseFloat(document.getElementById('liters').value) || 0;

  // Calculate the total cost by multiplying cost per liter by the number of liters.
  const total = cost * liters;

  // Display the result in the element with ID "result", formatting the total to 2 decimal places.
  document.getElementById('result').textContent = `Total Cost: £${total.toFixed(2)}`;
}
