# Card Number Validation API

A REST API built with Node.js, TypeScript, and Express that validates card numbers using the Luhn Algorithm.

## Tech Stack

- Node.js
- TypeScript
- Express.js

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Installation

1. Clone the repository
   git clone https://github.com/Naya-dev1/card-validation.git

2. Install dependencies
   npm install

3. Run the development server
   npm run dev

The server will start on http://localhost:3000

## API Endpoint

### Validate Card Number

POST /api/validate-card

Request body:
{
"cardNumber": "4532015112830366"
}

Response:
{
"success": true,
"cardNumber": "4532015112830366",
"isValid": true,
"message": "Card number is valid"
}

## Validation Logic

This API uses the Luhn Algorithm to validate card numbers. The Luhn Algorithm is a simple checksum formula used by major card networks like Visa and Mastercard to validate card numbers.

How it works:

1. Starting from the second to last digit, double every second digit going right to left
2. If doubling a digit gives a result greater than 9, subtract 9 from it
3. Add all the digits together
4. If the total is divisible by 10, the card number is valid

## Design Decisions

-Card number accepted as a string: Card numbers are identifiers, not mathematical values. Accepting them as numbers risks losing leading zeros and precision errors with long digit sequences in JavaScript.

-Express over NestJS: Chosen for simplicity and familiarity. Express gives full control over the request/response cycle without the overhead of a full framework for a single endpoint.

-Separate service layer: The Luhn logic lives in its own file rather than inside the controller. This keeps the controller focused on handling requests and makes the validation logic independently testable.

-200 for invalid cards: An invalid card is not an error, it is a successful response to a valid request. 400 is reserved for malformed or missing input.

## Running Tests

Run the test suite with:

npm test

Tests cover:

- Valid card number returns true
- Invalid card number returns false
- Empty string returns false
- Card numbers with spaces are handled correctly
- Single digit returns false
