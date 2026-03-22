# Salesforce Lightning Automation (Playwright)

## Overview
Automation testing framework for Salesforce Lightning UI.

## Project Structure
salesforce-playwright-framework/
│
├── tests/
│   ├── login.spec.js
│   ├── account.spec.js
│   ├── lead.spec.js
│   ├── opportunity.spec.js
│
├── pages/
│   ├── LoginPage.js
│   ├── AccountPage.js
│   ├── LeadPage.js
│   ├── OpportunityPage.js
│
├── utils/
│   ├── login.js
│
├── .env
├── playwright.config.js
├── package.json
└── README.md

## Features
- Page Object Model
- Environment variables
- End-to-end test scenarios
- Screenshot capture on failure

## Setup
npm install
npx playwright install
cp .env.example .env

## Run Tests
npm test
