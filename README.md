# Angular Senior Showcase

### ✨ Demo

- 🔗 <a href="https://6814cf1e0d75156d4a6a680d-fesbhleusg.chromatic.com/" target="_blank">See Storybook on Chromatic</a>
- 🔗 <a href="https://progmativ.github.io/angular-senior-showcase/" target="_blank">Application Demo (GitHub Pages)</a>

Welcome to my repository! 

Thank you for your interest in my job application.

I invite you to review the code. The repository includes:

- Design System project with:
  - Configured Storybook
  - One design-system component - Badge
  - CSS Variables
- Main project with configured angular.json

TODO: https://github.com/progmativ/angular-senior-showcase/issues

## Project setup
```bash
nvm use
npm i 
```

## Development server

To start a local development server, run:

```bash
ng serve
```
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Storybook

```bash
ng run design-system:storybook
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

## Build
```bash
ng build --base-href /angular-senior-showcase/
```

## Deploy

### Application
```bash
npm run deploy
```

### Storybook
```bash
npx chromatic --project-token={project_token}
```
