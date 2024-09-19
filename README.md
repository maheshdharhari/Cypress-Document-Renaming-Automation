# Cypress Document Renaming Automation

This project demonstrates how to automate the process of renaming documents in a Content Server application using Cypress, an end-to-end testing framework. The setup includes custom commands and a structured test suite to efficiently perform document renaming.

![Running Automation](https://res.cloudinary.com/maheshdharhari/image/upload/v1726732988/Blog/contentServerRenamingCypress.png)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Custom Commands](#custom-commands)
- [Running Tests](#running-tests)
- [Contributing](#contributing)

## Prerequisites

Make sure you have the following installed:

- Node.js (version 12 or later)
- npm (Node package manager)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/maheshdharhari/Cypress-Document-Renaming-Automation
   cd Cypress-Document-Renaming-Automation
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Project Structure

```
Cypress-Document-Renaming-Automation/
│
├── cypress/
│     ├── e2e/
│     │    └── ContentServer
│     │	         └── renameContainer.cy.js
│     └── support/
│          ├── e2e.js
│          └── ContentServer
│         		├── beforeEachContentServer.js
│         		└── contentServerLoginCommand.js
│   
│
├── cypress.config.js
└── package.json
```

- **cypress/support/**: Contains custom commands and global configurations.
- **cypress.config.js**: Configuration file for Cypress.

## Custom Commands

Custom commands are defined in `contentServerLoginCommand.js` for reusability across tests. The login command allows users to authenticate before performing actions on the Content Server.

## Running Tests

To run the tests, execute the following command:

```bash
npx cypress open
```

This will open the Cypress Test Runner, allowing you to run the tests interactively. Alternatively, you can run tests in headless mode with:

```bash
npx cypress run
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

Let me know if you need further modifications!
