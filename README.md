# Khalid Alhajj’s portfolio

A Next.js portfolio covering work in logistics, software development, and education.

## Run locally

Use Node.js 20.9 or later and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build`, then `npm start`.

## Update the portfolio

- Edit project, career, education, and contact details in `src/app/portfolio.ts`.
- Edit the biography and page sections in `src/app/page.tsx`.
- Replace the portrait and downloadable résumé in `public/`, keeping their filenames.
- Update the Formspree endpoint in `src/app/contact-form.tsx` if the contact form changes accounts.
