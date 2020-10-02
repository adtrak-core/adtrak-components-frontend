// --------------------------------------------------------------------------------------------------
// CONCRETE CALCULATOR
// Calculates volume in metres cubed
// --------------------------------------------------------------------------------------------------

// Select all concrete forms on the page (in case more than 1)
var concreteForms = document.querySelectorAll(".concrete-form");

concreteForms.forEach((form) => {
  
  // Do the following when the "Calculate" button is clicked
	form.querySelector('.concrete-calculate').addEventListener("click", function() {

    // Get the length, depth and width values
    var l = parseFloat(form.querySelector('#length').value);
    var d = parseFloat(form.querySelector('#depth').value);
    var w = parseFloat(form.querySelector('#width').value);

    // Select the necessary elements so we can work with them
    var resultContainer = form.parentNode.parentNode.querySelector('.concrete-result-container');
    var resultNode = form.parentNode.parentNode.querySelector('.concrete-result');
    var error = form.parentNode.parentNode.querySelector('.concrete-error');

    // Calculate the result to 2 decimal places
    var result = parseFloat(l*w*d).toFixed(2);

    // Format number with a comma if over 1000 (e.g. 1,000)
    result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Check that each field has a number greater than 0
    if (l > 0 && d > 0 && w > 0) {
      resultContainer.style.display = "block"; // Show the result section
      resultNode.innerHTML = result+'m³'; // Inset the result in .concrete-result
      error.style.display = "none"; // Hide the error message
    } else {
      resultContainer.style.display = "none"; // Hide the result setion
      error.style.display = "block"; // Show the error message
    }

  })

  // Reset the form when the "reset" button is clicked
  form.querySelector('.concrete-reset').addEventListener("click", function() {
    form.reset();
  })
  
});