# Eat and Chill

[Eat and Chill](https://eat-and-chill.vercel.app/) is a modern web application that processes and summarizes data from food facilities using AI. It provides users with
recommendations and detailed information about mobile food facilities approved by the city. The app also highlights the park green zones near the food points.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Map Integration**: View mobile food facilities on a map.
- **AI Recommendations**: Get AI-generated recommendations for selected food facilities.
- **City-approved Facilities**: Only shows food trucks approved by the city.
- **Real-time Data**: Fetches the latest data from the city’s database.
- **Park Green Zones**: Highlights park green zones near the food points.

## Trade-offs and Future Improvements

Given the time constraints, there are a few areas that could be improved or expanded with more time:

- **Add More Unit and E2E Tests**: Increasing the test coverage for both unit tests and end-to-end tests to ensure robust functionality.
- **Add Storybook for Design System**: Integrate Storybook to develop and test UI components in isolation, improving the design process and component reuse.
- **Debug Stream of OpenAI**: Refine the stream decoding process to handle data more cleanly and efficiently.
- **Improve Error Handling and Logging**: Enhance the application’s error handling and logging mechanisms to make debugging and maintenance easier.
- **Optimize Performance**: Profile and optimize the performance of the application, particularly in data fetching and rendering large datasets.
- **Enhance UI/UX**: Work on the user interface and experience, adding more interactive and user-friendly features.
- **Show Food Items Precisely**: Display food items more accurately for each location (fix overlap for the same coordinates).
- **Add Different Icons for Food Truck and Food Cart**: Use distinct icons to differentiate between food trucks and food carts on the map.
- **Improve Cluster Logic on Map**: Enhance the clustering logic on the map for better visualization and user experience.
- **OpenAI**: Enhance prompts for OpenAI
- **Filtering**: Add more filtering options based on specific properties
- **Social**: Integrate with social network reviews and include images for each food item
- **Google Analytics**: FB Pixel, etc
- **Logs**: Sentry
- **Console errors**: Eliminate hereMap mapInstance.dispose() error and warnings on localhost react strict
- **Store management**: Think about add a redux or mobs store
- **Location**: Add user geo targeting through browser API

## Prerequisites

Make sure you have Node.js 18 installed locally.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, init a husky for pre-commit check:

```bash
  npm run prepare
```

And run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` - Runs the development server.
- `npm run build` - Builds the application for production.
- `npm run start` - Starts the production server.
- `npm run lint` - Runs [ESLint](https://eslint.org/docs/v8.x/use/getting-started) to check for linting errors.
- `npm run prepare` - Installs [Husky](https://typicode.github.io/husky/get-started.html) Git hooks.
- `npm run prettier` - Runs [Prettier](https://prettier.io/docs/en/index.html) for code formatting.
- `npm run stylelint` - Runs [Stylelint](https://stylelint.io/user-guide/get-started) for CSS/SCSS linting.
- `npm run test` - Runs [Jest](https://jestjs.io/docs/getting-started) for testing.
- `npm run tsc` - Runs [TypeScript](https://www.typescriptlang.org/docs/) compiler.

## Pre-commit Hook

The project uses Husky to run a series of checks before each commit:

- TypeScript type checking
- ESLint
- Prettier formatting
- Stylelint
- Jest tests

To manually run these checks without committing, use:

```bash
npm run pre-commit
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

This project is already deployed to Vercel. <https://eat-and-chill.vercel.app/>

Deployments can be triggered automatically by pushing new commits to the main branch.

For other deploy options check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
