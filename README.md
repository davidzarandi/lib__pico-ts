# Pico-TS

Pico-TS is a tiny ui library without any 3rd party dependency (for building the examples the project uses
[`esbuild`](https://esbuild.github.io)).

[!WARNING]
Please note that the library is currently under active development and not yet stable. It may have breaking changes or
incomplete functionality. Strongly recommended using it only for experimental purposes and not in production
environments!!

## Key Features

- **Tiny:** Tiny size, making it an ideal choice for developers looking to minimize their project's footprint.
- **TypeScript:** Pre-configured TypeScript setup for strict type checking and optimal developer experience.
- **SonarLint & Prettier:** Integrated code analysis and formatting tools to maintain code quality and consistency.
- **Node.js Testing:** Integrated Node.js testing utilities for writing comprehensive and reliable unit tests.

## Getting Started

### Prerequisites

- Node.js 20.9 or higher
- NPM 10.2.4 or higher

### Development Setup and Usage

1. Local setup:
   - Clone this repository to your machine.
   - Navigate to the repository folder in your terminal.
   - Run `npm install` to install all development dependencies.
2. Development workflow:
   - `npm run build:lib` - Compiles the TypeScript code for the library.
   - `npm run clean:lib` - Clears the build directory for the library.
   - `npm run test:lib` - Runs unit tests to ensure code reliability for the library.
   - `npm run sonar` - Performs code analysis for potential issues.
   - `npm run format` - Formats the code using Prettier.
   - `npm run build:example:<name of the example>` - Builds the selected example.
   - `npm run clean:example:<name of the example>` - Clears the build directory for the selected example.

## License

This project is licensed under the [BSD-3-Clause](LICENSE).
