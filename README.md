## Overview

This project is a **UI automation testing framework built with Cypress** using the **Page Object Model (POM)** architecture.

The framework demonstrates how to structure Cypress automation tests in a **scalable, maintainable, and professional way** by separating test logic, page interactions, reusable commands, and UI selectors.

The automated tests run against the demo application:

[https://www.saucedemo.com](https://www.saucedemo.com)

This repository serves as a **portfolio project showcasing Cypress automation best practices and modern test architecture**.

---

# Technology Stack

* Cypress
* JavaScript
* Node.js
* Mocha
* Chai
* Page Object Model (POM)

---

# Framework Architecture

The framework follows a **layered design pattern** where responsibilities are separated between different components.


### Test Specs

Located in:

```
cypress/e2e
```

Test specification files contain the **test scenarios and assertions**.
They interact only with **Page Objects** and do not contain selectors or direct Cypress UI logic.

This keeps test cases focused on **user behavior and business logic**.

---

### Page Objects

Located in:

```
cypress/pages
```

Page Object classes encapsulate:

* UI interactions
* Page-level actions
* Page assertions
* Navigation logic

Each page in the application is represented by a separate class.

This approach improves maintainability and keeps test files clean.

---

### Custom Commands

Located in:

```
cypress/support/commands.js
```

Reusable Cypress commands are centralized in this file.

These commands abstract common operations used across tests such as:

* authentication
* cart interactions
* logout functionality
* reusable UI actions

Centralizing commands reduces duplication and improves framework scalability.

---

### Selectors

Located in:

```
cypress/support/objects.js
```

All UI selectors are stored in one place.

This approach provides several benefits:

* easy maintenance when UI changes
* cleaner page objects
* consistent selector usage
* reduced duplication

---

# Test Data

Test data is stored in:

```
cypress/fixtures
```

Credentials and other reusable data are maintained separately from test logic to improve maintainability and readability.

---

# Installation

Clone the repository.

```
git clone <repository-url>
```

Navigate to the project directory.

```
cd ui-cypress-framework
```

Install dependencies.

```
npm install
```

---

# Running Tests

Open Cypress Test Runner.

```
npx cypress open
```

Run tests in headless mode.

```
npx cypress run
```

Run a specific test file.

```
npx cypress run --spec "cypress/e2e/<spec-file>"
```

---

# Why Page Object Model?

The Page Object Model improves test automation by:

* separating test logic from UI interaction
* improving readability of test cases
* reducing code duplication
* simplifying maintenance
* enabling scalable test architecture

When UI changes occur, updates are typically required only in the **Page Object layer**, not across the entire test suite.

---

