"use strict";

function calculateAnnuity() {
    // retrieve the input values from the form
    let payout = parseFloat(document.getElementById("payout").value);
    let interestRate = parseFloat(document.getElementById("interest-rate").value) / 1200; // convert to monthly rate
    let years = parseInt(document.getElementById("years").value);
    
    // calculate the present value of the annuity
    let presentValue = payout * ((1 - Math.pow(1 + interestRate, -years * 12)) / interestRate);
    
    // display the result on the page
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `To fund an annuity that pays $${payout.toFixed(2)} monthly for ${years} years and earns an expected ${interestRate*1200}% interest, you would need to invest $${presentValue.toFixed(2)} today.`;
  }
  
  // attach an event listener to the form submission
  let formElement = document.getElementById("annuity-form");
  formElement.addEventListener("submit", function(event) {
    // prevent the default form submission behavior
    event.preventDefault();
    // call the calculateAnnuity function
    calculateAnnuity();
  });