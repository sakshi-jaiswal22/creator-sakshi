# Sakshi Jaiswal — Career & Tech Creator

Independent Vite/React version of the website captured from the Emergent preview.

## Run locally

```bash
npm install
npm run dev
```

## Build for hosting

```bash
npm run build
```

The production files are generated in `dist/`.

## GitHub / Cloudflare Pages

Push this folder to the `creator-sakshi` GitHub repository. For a Vite deployment, use:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: use a current LTS release

## Important asset note

`public/portrait.jpeg` is a localized copy made from the available site preview screenshot so the site does not depend on an Emergent-hosted image URL. Replace it with the original high-resolution portrait whenever you have that file.

`MEDIA_KIT.pdf` is intentionally not fabricated here. The current site code still points to `/MEDIA_KIT.pdf`; add your final media kit PDF at `public/MEDIA_KIT.pdf` before publishing the Media Kit button.

`reference/emergent-bundle.js` is the original compiled bundle extracted from the supplied DevTools file. It is kept only as a reference and is not used by the Vite app.
