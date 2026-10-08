# Playwright Automation - Automation Exercise

## Overview

This project contains end-to-end UI automation tests for the [Automation Exercise](https://automationexercise.com/) web application using Playwright with JavaScript.

The project follows the **Page Object Model (POM)** design pattern to improve code reusability, readability, and maintainability.

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- Git
- GitHub

## Automated Test Scenarios

The following end-to-end scenarios have been automated:

- Valid user login
- Invalid login validation
- Search for a product
- Verify product details
- Add a product to the cart
- Remove a product from the cart
- Add multiple products to the cart
- Complete checkout and place an order

## Project Structure

```text
automation-exercise-playwright/
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── Login.spec.js
│   ├── Products.spec.js
│   └── Checkout.spec.js
│
├── test-data/
│   └── testData.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Page Objects

### LoginPage

Handles:

- User login
- Email and password input
- Login validation

### ProductPage

Handles:

- Product search
- Product selection
- Adding products to the cart
- Continuing shopping

### CartPage

Handles:

- Opening the cart
- Removing products
- Validating products in the cart

### CheckoutPage

Handles:

- Proceeding to checkout
- Placing an order
- Entering payment details
- Verifying successful order confirmation

## Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

Install Playwright browsers if required:

```bash
npx playwright install
```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/Login.spec.js
```

### Run tests with a specific browser

```bash
npx playwright test --project=chromium
```

## Test Reports

Playwright generates an HTML test report after test execution.

To open the report:

```bash
npx playwright show-report
```

## Key Playwright Concepts Demonstrated

This project demonstrates practical usage of:

- Playwright locators
- Role-based and attribute-based locators
- Assertions
- Auto-waiting
- Page Object Model
- Reusable page methods
- Browser and page handling
- Form interactions
- Product search
- Cart workflows
- Checkout workflows
- Test data management
- HTML test reporting

## Test Data

Non-sensitive test data used by the automation tests is maintained separately in the `test-data` directory.

Sensitive credentials should not be committed to the repository. Environment variables can be used for credentials when required.

## Learning Objective

The goal of this project is to demonstrate practical Playwright automation skills by automating real-world user workflows using JavaScript and the Page Object Model design pattern.

## Application Under Test

[Automation Exercise](https://automationexercise.com/)

## Author

**Kathy Mutyala**

QA Engineer | Manual & Automation Testing | Playwright
