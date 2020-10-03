// --------------------------------------------------------------------------------------------------
// SKIP SIZE CALCULATOR
// Calculates the skip size based on number of bin bags entered
// --------------------------------------------------------------------------------------------------

// Hide all the skip size cards in the results section to start with
document.querySelectorAll(".skip-calc-result .skip-size-card").forEach((card) => {
  card.style.display = "none";
});

// Select all skip size calculator forms on the page (in case more than 1)
var skipCalcForms = document.querySelectorAll(".skip-calc-form");

skipCalcForms.forEach((form) => {
  
  // Do the following when the Skip Calculator form is submitted
	form.addEventListener("submit", function(e) {

    e.preventDefault();

    // Get the number of bin bags entered
    var bags = parseFloat(form.querySelector('#skip-amount').value);

    // Select the necessary elements so we can work with them
    var resultContainer = form.parentNode.parentNode.nextElementSibling;
    var error = form.parentNode.parentNode.querySelector('.skip-calc-error');

    // Hide the cards in case we have any showing from a previous calculation
    resultContainer.querySelectorAll('.skip-size-card').forEach((card) => {
      card.style.display = "none";
    });

    // Show in case this is hidden from a previous calculation that had no results
    resultContainer.querySelectorAll('.hide-if-no-results').forEach((el) => {
      el.style.display = "block";
    });

    // Check the field value is a number greater than 0
    if(bags > 0) {
      resultContainer.style.display = "block"; // Show the result section
      error.style.display = "none"; // Hide the error message

      // Display the appropriate skip size card based on number of bags
      if(bags > 0 && bags < 21) { resultContainer.querySelector('.card-2-yard-skip').style.display = "block"; }
      else if(bags > 20 && bags < 41) { resultContainer.querySelector('.card-4-yard-skip').style.display = "block"; }
      else if(bags > 40 && bags < 61) { resultContainer.querySelector('.card-6-yard-skip').style.display = "block"; }
      else if(bags > 60 && bags < 81) { resultContainer.querySelector('.card-8-yard-skip').style.display = "block"; }
      else if(bags > 80 && bags < 101) { resultContainer.querySelector('.card-10-yard-skip').style.display = "block"; }
      else if(bags > 100 && bags < 121) { resultContainer.querySelector('.card-12-yard-skip').style.display = "block"; }
      else if(bags > 120 && bags < 141) { resultContainer.querySelector('.card-14-yard-skip').style.display = "block"; }
      else if(bags > 140 && bags < 201) { resultContainer.querySelector('.card-20-yard-skip').style.display = "block"; }
      else if(bags > 200) {
        resultContainer.querySelector('.card-sorry').style.display = "block";
        resultContainer.querySelectorAll('.hide-if-no-results').forEach((el) => {
          el.style.display = "none";
        });
      }

    } else {
      resultContainer.style.display = "none"; // Hide the result section
      error.style.display = "block"; // Show the error message
    }

  })
  
});


