#! /usr/bin/env node

import inquirer from "inquirer";

// Initialize exchange rates (example rates)
const Currency: any = {
  USD: 1, // 1 USD = 1 USD (base currency)
  EUR: 0.82, // 1 USD = 0.82 EUR
  GBP: 0.72, // 1 USD = 0.72 GBP
  INR: 83.47, // 1 USD = 74.57 INR
  PKR: 278.55, // 1 USD = 280 PKR
};

let userAnswer = await inquirer.prompt([
  {
    name: "From",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "To",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "Amount",
    message: "Enter Amount of Currency to Convert",
    type: Number,
  },
]);

let fromAmount = Currency[userAnswer.From]; // Exchange Rate
let toAmount = Currency[userAnswer.To]; // Exchange Rate
let Amount = userAnswer.Amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);
