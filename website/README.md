# Lokmangal Bio-Tech website

English + मराठी company website. Built with Astro, TypeScript and modern CSS. There is no React, and the site is plain static HTML that can be hosted anywhere.

## See it on your computer

Double-click `preview-website.bat`, or run:

```
npm install
npm run build
npm run preview
```

Then open http://localhost:4321 (English) and http://localhost:4321/mr/ (Marathi).

For editing with live reload, use `npm run dev`.

## Change the content

All company data lives in `src/data`, with English and Marathi side by side:

| File | What it holds |
|---|---|
| `site.ts` | Phones, email, addresses, plants, stats, journey, founder message, FAQs |
| `products.ts` | Every product: contents, benefits, dose, packing, crops |
| `crops.ts` | Crop pages and their photos |
| `nutrients.ts` | The nutrient table |
| `i18n.ts` | Buttons and labels |

To add a product photo, put a transparent PNG in `src/assets/packs/` and set `img: 'file-name'` on the product in `products.ts`.

## Publish

1. `npm run build:full` builds the site and regenerates the 72 PDF data sheets (Chrome must be installed).
2. Upload the `dist` folder to any static host (Render, Netlify, Cloudflare Pages, or normal web hosting).
3. The site address is set in `astro.config.mjs`. It is currently `https://www.lokmangalbiotech.com`.

## Enquiry forms

Forms open a ready-to-send message in WhatsApp or the visitor's email app, because a static site has no server of its own. To also receive form entries directly, set `PUBLIC_FORM_ENDPOINT` to a form service URL when building.

## Before going live

See `REVIEW-NOTES.md` for the data the company needs to confirm.
