# WWB Data Automation

Public business website for WWB Data Automation, focused on practical smart-factory installation for small manufacturers.

## Run the website locally

Install Node.js 22.13 or newer, open a terminal in this folder, and run:

```text
npm install
npm run dev
```

Open the local address printed in the terminal. Press `Ctrl+C` in the terminal to stop the site.

The package intentionally excludes `node_modules` and generated build files. `npm install` recreates everything required to run it.

## Production identity

The production domain is `https://wwbdataautomation.com` and the default public contact address is `hello@wwbdataautomation.com`.

For a different local URL or contact inbox, copy `.env.example` to `.env.local` and replace:

- `NEXT_PUBLIC_SITE_URL` with the final canonical domain.
- `NEXT_PUBLIC_CONTACT_EMAIL` with the approved public inbox.

## Deployment

Pushes to `main` are deployed automatically to GitHub Pages by `.github/workflows/deploy-pages.yml`.

## Required checks

```text
npm run lint
npm run build
```

Engineering constraints are documented in `docs/ENGINEERING_STANDARDS.md` and enforced by ESLint where possible.
