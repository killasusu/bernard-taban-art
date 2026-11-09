# BeRRo Art

Portfolio website for **BeRRo Art**, the work of **Bernard Taban**, a pencil portrait artist from Wau, South Sudan, studying art in Kampala, Uganda.

**Live site:** https://bernard-taban-art.vercel.app

Built with Next.js 16, React 19 and Tailwind CSS 4. Every push to `main` redeploys automatically on Vercel.

## Editing the content

Almost everything lives in two files:

| File | What it holds |
| --- | --- |
| `src/data/artist.ts` | Bio, WhatsApp number, social links, **prices**, the "How to order" steps |
| `src/data/artworks.ts` | Every artwork: title, medium, series, description, which ones are featured on the home page |

### Add an artwork

1. Put the photo in `public/artworks/`, for example `public/artworks/sunset.jpg` (about 1600px on the long side is plenty).
2. Add an entry to the list in `src/data/artworks.ts` with `slug: "sunset"`, `image: img("sunset")` and its `ratio` (width ÷ height).
3. Set `featured: true` to show it in "Selected work" on the home page.

### Set prices

In `src/data/artist.ts`, `priceGroups` lists every option (pencil portrait by size and number of people, framing, engraved glass). Fill in each `price`, for example `"150,000 UGX"`. While a price is empty, that row shows an "Ask" link that opens WhatsApp about that exact option; use `"On request"` for things priced case by case.

`priceTerms` holds the short facts under the prices. Fill in `turnaround` (for example `"Usually 1 to 2 weeks"`) and `delivery` when known; empty ones are hidden.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deployment

Hosted on Vercel (team Kill75). The environment variable `NEXT_PUBLIC_SITE_URL` must be set to the site's public address so link previews, the sitemap and canonical URLs point to it. Update it if a custom domain is added.
