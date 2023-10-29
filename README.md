## About This Project

This repository contains end-to-end web automation tests using Cypress for CURA Healthcare Service. These tests ensure the functionality and reliability of healthcare services regarding logging in and making an appointment.

## Prerequisites

Before getting started, make sure to have the following software and tools installed on your machine:

- [Node.js](https://nodejs.org/): JavaScript runtime environment
- [npm](https://www.npmjs.com/): Node.js package manager

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd cypress-web-automation
2. project dependencies:
   npm install

## How to Use

Writing Tests

You can write your test cases in the cypress directory. Each .cy.js file contains test cases. You can use custom commands defined in cypress/support/ to improve test readability and maintainability.

## Running Tests

To run the tests, use the Cypress Test Runner:

npx cypress open

This will open the Cypress Test Runner, where you can select and run your test files.

## Customizing Configuration

You can customize Cypress configurations by editing the cypress.json or cypress.config.js files. These configurations include browser settings, environment variables, and more.

## Generating Test Reports

This project uses the Mochawesome reporter to generate test reports. The reports are saved in the cypress/reports directory. You can customize the report filename and directory in cypress.config.js.

To generate HTML reports manually, use the following commands:
npx mochawesome-merge cypress/reports/*.json > merged-report.json
npx mochawesome-report-generator merged-report.json

![image](https://github.com/Fayrose96/Cypress-web-Automation-Cura/assets/143695839/f6c76c1f-7438-41bd-a8fd-d9e8a2a156eb)
