# Ayamal Next.js export

A Vercel-ready Next.js App Router project recreated from the rendered Ayam Al-Sabah website at https://ayamal-8kp4z9ek.manus.space/. The Arabic page content, styles, and image assets are included locally.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` and then `npm start`.

## Languages

- `/` is the Arabic (RTL) site; `/en` is the English (LTR) site.
- The language switch is available in the header on desktop and mobile and keeps the current section when possible.
- Edit the Arabic source in `app/site-content.html`. English copy is maintained in `scripts/generate_english.py`; run `python scripts/generate_english.py` after changing either file to regenerate `app/site-content.en.html`. The script reports any Arabic text without an English translation.
- Each route has its own document language, direction, and page metadata.

## Deploy to Vercel

1. Extract this project and push the folder to a GitHub repository, or import it with the Vercel CLI.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the framework preset as **Next.js**, the root directory as the project root, and the build command as `npm run build`.
4. Select Node.js 22 or newer, then deploy. No environment variables are needed for this static export.

## Important limitations

- This is a frontend export. It does not include the original Manus project history or source project configuration.
- The contact form is presentational only and is intentionally blocked from submitting. Connect it to an API route or a form provider before collecting customer inquiries.
- Custom fonts are requested from Google Fonts; system fallbacks are defined by the original stylesheet.
- If you use a custom domain on Vercel, add it in the Vercel project’s **Settings → Domains** and follow the DNS values Vercel displays. Do not reuse Manus DNS targets for Vercel.
