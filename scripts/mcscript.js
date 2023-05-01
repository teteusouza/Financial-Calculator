"use strict";

// define the function to calculate the mortgage
function calculateMortgage() {
  // take the input values from the form
  let principal = parseFloat(document.getElementById("principal").value);
  let interestRate = parseFloat(document.getElementById("interest-rate").value) / 1200;
  let loanLength = parseFloat(document.getElementById("loan-length").value) * 12;
  
  // mortgage formula is M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
  let monthlyPayment = (principal * interestRate * Math.pow(1 + interestRate, loanLength)) / (Math.pow(1 + interestRate, loanLength) - 1);
  let totalInterest = (monthlyPayment * loanLength) - principal;
  
  // display the result on the page
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = "Monthly Payment: $" + monthlyPayment.toFixed(2) + "<br>Total Interest Paid: $" + totalInterest.toFixed(2);

}

// attach an event listener to the form submission
let mortgageCalculate = document.getElementById("mortgage-form");
mortgageCalculate.addEventListener("submit", function(event) {
  // prevent the default form submission behavior
  event.preventDefault();
  // call the calculateMortgage function
  calculateMortgage();
});
