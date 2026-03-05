## Overview

This project is a **UI automation testing framework built with Cypress** using the **Page Object Model (POM)** architecture.

The framework demonstrates how to structure Cypress automation tests in a **scalable, maintainable, and professional way** by separating test logic, page interactions, reusable commands, and UI selectors.

The automated tests run against the demo application:

[https://www.saucedemo.com](https://www.saucedemo.com)

This repository serves as a **portfolio project showcasing Cypress automation best practices and modern test architecture**.

---

# Tech Stack

* JavaScript
* Node.js
* Cypress
* Mochawesome Reporter
* Cypress Grep (test filtering)
* GitHub Actions (CI/CD ready)

---

# Framework Architecture

The framework follows the **Page Object Model (POM)** to separate concerns and improve maintainability.

```
cypress
 ├── e2e
 │   Test specifications
 │
 ├── pages
 │   Page Object classes containing reusable UI actions
 │
 ├── support
 │   Global commands, selectors, and test utilities
 │
 ├── fixtures
 │   Static test data
 │
 ├── reports
 │   Mochawesome reports, screenshots, and videos
```

### Folder Responsibilities

**e2e**

Contains test specifications. Tests focus on user behavior and business flows while delegating UI interactions to page objects.

**pages**

Contains Page Object classes that encapsulate UI logic, element interactions, and reusable workflows.

**support**

Contains shared utilities used across the framework:

* global commands
* element selectors
* reporting hooks
* Cypress configuration extensions

**fixtures**

Stores test data used during execution.

**reports**

Stores generated artifacts such as:

* Mochawesome JSON reports
* HTML dashboards
* screenshots
* videos

---

# Key Features

### Page Object Model (POM)

Encapsulates UI interactions within page classes to promote reusable, maintainable test code.

---

### Test Tagging and Filtering

Tests can be tagged and selectively executed using Cypress Grep.

Example tags used within the framework:

* `@smoke`
* `@regression`
* `@auth`

This allows targeted execution of specific test suites during development or CI runs.

---

### Mochawesome Reporting

Test execution generates detailed reports including:

* test results
* execution duration
* suite hierarchy
* failure screenshots
* logs

Reports are produced as JSON files and merged into a single HTML dashboard.

---

### Test Artifacts

The framework automatically stores debugging artifacts:

* screenshots on failure
* execution videos
* HTML reports

These artifacts are useful for CI pipelines and failure analysis.

---

# Running Tests

Install dependencies

```
npm install
```

Run all tests

```
npm run cy:run
```

Run smoke tests

```
npm run cy:run:smoke
```

Run regression tests

```
npm run cy:run:regression
```

---

# Generating Reports

After test execution, generate the final HTML report:

```
npm run report:merge
npm run report:html
```

The report will be available in:

```
cypress/reports/html/cypress-report.html
```

---

# Continuous Integration

This project is designed to integrate easily with CI pipelines such as:

* GitHub Actions
* Jenkins
* GitLab CI

CI pipelines can automatically:

* install dependencies
* run Cypress tests
* generate reports
* upload artifacts

---

# Goals of This Framework

This project demonstrates best practices for:

* scalable UI automation
* maintainable test architecture
* reusable Page Object patterns
* professional test reporting
* CI/CD integration readiness

---
