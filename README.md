# The American Energy — TheAmericanEnergy.com

An all-of-the-above American energy website, built from the same architecture as
TheAmericanBattery.com but with a distinct **Patriot Navy + Electric Cyan** theme,
**Sora + IBM Plex Sans** typography, and an energy-first focus that marries batteries
to solar, nuclear, natural gas, wind, hydro, and geothermal.

## Structure (35 pages)

```
/
├── index.html                         ← Energy-focused home (hero slider, 7-pillar Energy Sources grid)
├── energy-sources/                    ← NEW section
│   ├── index.html                     ← All energy sources overview
│   ├── solar.html  nuclear.html  natural-gas.html
│   ├── wind.html   hydro.html    geothermal.html
│   └── storage.html                   ← Battery storage (ties cell technology in)
├── critical-minerals/                 ← Unchanged content (10 minerals + index)
├── cell-technology/                   ← Battery chemistries (BMLMP, LFP, NMC, solid-state),
│                                        American BMS, Digital DNA, cell-to-container
├── applications/                      ← AI data centers, EV, grid/BESS, defense, homes, portable
├── assets/css/tae.css                 ← Theme (navy/cyan, Sora/IBM Plex), all shared styles
├── assets/js/tae.js                   ← Nav (with Energy Sources dropdown), footer, slider, form
├── api/contact.js                     ← Vercel serverless contact form (Resend)
├── sitemap.xml  robots.txt  site.webmanifest  404.html
```

## Theme

- Colors: navy base `#0A1326`, electric-cyan accent `#38BDF8`, amber "spark" `#FBBF24`.
  Dark (default) + light, toggled via `<html data-theme>`; preference stored in `localStorage['tae-theme']`.
- Fonts: **Sora** (display) + **IBM Plex Sans** (body), loaded from Google Fonts in `tae.css`.

## What was kept from the battery site

- All critical-minerals and cell-technology pages (batteries remain part of the story).
- Cross-references intact: **C4V / Digital DNA**, **American BMS**, **Near Prime Technologies**,
  the **SEI** reference on the solid-state page, and **Shailesh Upreti** as founder.

## Contact form

Submissions POST to `/api/contact` → Resend → `shailupreti@gmail.com`.
Env vars on Vercel: `RESEND_API_KEY` (required), optional `MAIL_FROM`, `CONTACT_TO`.

## Deploy (Vercel)

This folder has no `.vercel` link yet — deploy as a **new** Vercel project (do not reuse the
battery project). Set the custom domain to `www.theamericanenergy.com` and add the
`RESEND_API_KEY` env var so the contact form works.

## Known follow-up

- `assets/og.png` (social share image) still shows battery branding. The source
  `assets/og.svg` has been updated to the energy brand/colors, but no SVG→PNG rasterizer
  was available locally — regenerate `og.png` from `og.svg` at 1200×630 before launch.

## Local preview

```
python3 -m http.server 8124 --directory tae-site
```
