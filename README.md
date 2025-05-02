# Angular Senior Showcase

Welcome to my repository! Thank you for your interest in my job application.

I invite you to review the code. The repository includes:

- Design System project with:
  - Configured Storybook
  - One design-system component - Badge
  - CSS Variables
- Main project with configured angular.json

TODO: https://github.com/progmativ/angular-senior-showcase/issues

You can see deployed project here: https://progmativ.github.io/angular-senior-showcase/


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
```bash
npx angular-cli-ghpages --dir=dist/angular-senior-showcase/browser
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
