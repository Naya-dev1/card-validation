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
   git clone <your-github-url>

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

This API uses the Luhn Algorithm to validate card numbers.

[You will fill this section in tomorrow after you read about it]

## Design Decisions

[We will fill this in tomorrow]

## Running Tests

[We will add this tomorrow after writing the tests]