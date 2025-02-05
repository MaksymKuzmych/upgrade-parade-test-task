# Upgrade Parade Test Task

A single-page React application that displays a table of products fetched from an external API. Users can search for products and navigate through paginated results.

## Table of Contents

- [Overview](#overview)
- [Architecture and Design Choices](#architecture-and-design-choices)
- [Installation and Running](#installation-and-running)
- [Project Structure](#project-structure)
- [Additional Libraries and Tools](#additional-libraries-and-tools)

## Overview

The **Upgrade Parade Test Task** is a single-page React application that displays a list of products in a table format. The app provides:

- **Product Table:** Displaying data fetched from the provided API.
- **Pagination:** Allows users to navigate through different product pages.
- **Search Functionality:** Enables users to search for products using a query string.

## Architecture and Design Choices

- **Vite:** Used as the build tool for a fast and optimized development experience.
- **React & TypeScript:** Provides a robust framework with type safety for building the UI.
- **@tanstack/react-query:** Manages data fetching, caching, and state, simplifying API interactions.
- **@tanstack/react-table:** Used to render and manage the product table efficiently.
- **React Router:** Implements client-side routing for SPA functionality.
- **Tailwind CSS:** Utilized for styling.
- **Axios:** Handles HTTP requests to the external API.

## Installation and Running

1. **Clone the Repository:**

```bash
git clone https://github.com/MaksymKuzmych/upgrade-parade-test-task.git
```

```bash
cd upgrade-parade-test-task
```

2. **Install Dependencies:**

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
pnpm install
```

3. **Run the Development Server:**

- **Prebuild:**

```bash
pnpm dev
```

## Project Structure

A simplified view of the project’s folder structure:

```
upgrade-parade-test-task/
├── .github                # GitHub Action workflows for CI/CD
├── .husky                 # Husky configuration for Git hooks
└── src
    ├── assets           # Images and icons
    ├── components       # Reusable UI components (e.g., Table, Pagination, Search)
    ├── hooks            # Custom hooks (e.g., for data fetching with react-query)
    ├── router           # Holds the configuration for React Router to manage SPA navigation.
    ├── pages            # Page components (e.g., ProductList)
    ├── services         # API calls and data fetching logic
    └── types            # TypeScript type definitions
```

## Additional Libraries and Tools

- **ESLint & Prettier:** Ensure code quality and formatting.
- **Husky & lint-staged:** Help enforce code quality standards before commits.
