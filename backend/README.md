# Backend Core

A simple server to test various functionalities, including wellness profiles and authentication using HiveSigner.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Contributing](#contributing)

## Introduction

This repository contains the backend core functionalities, including smart contracts for managing wellness profiles, authentication using HiveSigner, and database initialization scripts.

## Features

- **Wellness Profiles Smart Contract**: Manage wellness profiles and voting for wellness professionals.
- **Authentication**: Integrate HiveSigner for user authentication.
- **Database Initialization**: SQL scripts to set up the required database tables.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/ryuu000/backend-core.git
    cd backend-core
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory with the following content:
      ```dotenv
      HIVESIGNER_APP=your-app-name
      HIVESIGNER_CALLBACK_URL=your-callback-url
      ```

4. Initialize the database:
    - Run the SQL script located in `db/init.sql` to create the necessary tables.

## Usage

To start the server, run the following command:
```sh
npm start

Environment Variables

The project requires the following environment variables to be set:

    HIVESIGNER_APP: Your HiveSigner app name.
    HIVESIGNER_CALLBACK_URL: The callback URL for HiveSigner.

Ensure these variables are set in the .env file before running the project.
License

This project is licensed under the Unlicense. For more details, see the LICENSE file.
Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
File Descriptions

    .env: Contains environment variables for the HiveSigner app.
    LICENSE: License information for the project.
    README.md: This README file.
    auth.js: JavaScript file for HiveSigner authentication.
    contracts/WellnessProfiles.sol: Solidity smart contract for managing wellness profiles.
    db/init.sql: SQL script to initialize the database with necessary tables.

If you have any questions or need further assistance, please feel free to reach out.
