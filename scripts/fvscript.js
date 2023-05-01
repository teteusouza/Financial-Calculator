"use strict";

function calculateFutureValue() {
    // retrieve the input values from the form
    let deposit = parseFloat(document.getElementById("deposit").value);
    let interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
    let years = parseInt(document.getElementById("years").value);
    
    // calculate the future value and total interest
    let futureValue = deposit * Math.pow(1 + interestRate, years);
    let totalInterest = futureValue - deposit;
    
    // display the result on the page
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `Future Value: $${futureValue.toFixed(2)}<br>Total Interest Earned: $${totalInterest.toFixed(2)}`;
  }
  
  // attach an event listener to the form submission
    let formElement = document.getElementById("future-value-form");
    formElement.addEventListener("submit", function(event) {
    // prevent the default form submission behavior
    event.preventDefault();
    // call the calculateFutureValue function
    calculateFutureValue();
  });