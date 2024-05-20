# Eat and Chill

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project is already deployed to Vercel.

Deployments can be triggered automatically by pushing new commits to the main branch.

For other deploy options check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
