# RFL PRO Landing Page

Landing page for RFL PRO CS2 esports ecosystem. Built for Cloudflare Pages deployment and Xsolla payment verification.

## Project Overview

**RFL PRO** is a CS2 (Counter-Strike 2) esports ecosystem with:
- 2M+ active players
- 300K+ Telegram community members
- 30+ tournaments completed
- 40+ unique cases

### Core Features
- **Weekly Tournaments** — 1v1, 2v2, 5v5 formats on FACEIT/FASTCUP platforms
- **Cases & Skins** — Open cases with crystals, win real CS2 skins
- **Community** — Active Telegram community with live streams on Twitch

## Business Details

| Field | Value |
|-------|-------|
| Company | PIXEL RAINBOW Inc. |
| Country | USA |
| Contact Email | legal@appsign.me |
| Age Rating | 16+ |

### Monetization
- **Virtual Currency (Crystals)** — Can be earned or purchased
- **Subscription** — Premium features
- **Cases** — Opened with crystals (earned and purchased)

### Refund Policy
- 14-day refund for EU users
- Only for unused/unspent crystals

## Tech Stack

- **Framework**: Plain HTML/CSS/JS (no build step)
- **Hosting**: Cloudflare Pages
- **Payment**: Xsolla

## File Structure

```
/
├── index.html          # Main landing page
├── terms.html          # Terms of Service
├── privacy.html        # Privacy Policy
├── styles/
│   └── main.css        # All styles
├── scripts/
│   └── main.js         # Interactivity
├── assets/
│   └── images/         # Logo, icons (if needed)
├── description.md      # Project description (Russian)
└── README.md           # This file
```

## Pages

### Landing Page (index.html)
- Hero section with stats and CTA
- Features grid (Tournaments, Cases, Community)
- How It Works flow
- FAQ accordion
- Footer with legal links and disclaimers

### Terms of Service (terms.html)
Covers:
- Eligibility (16+)
- Virtual Currency (Crystals)
- Cases/Lootbox disclosure
- Refund policy (14-day EU)
- Third-party disclaimers

### Privacy Policy (privacy.html)
GDPR/CCPA compliant, covers:
- Data collection
- Data usage
- Third-party sharing (Xsolla, Steam, FACEIT)
- User rights
- Children's privacy (16+)

## Xsolla Verification Checklist

- [x] Company details visible (footer)
- [x] Contact information (legal@appsign.me)
- [x] Terms of Service page
- [x] Privacy Policy page
- [x] Refund policy clearly stated
- [x] Age restriction notice (16+)
- [x] Virtual currency disclaimers
- [x] Lootbox/case probability notice
- [x] Third-party disclaimers (not affiliated with Valve, etc.)
- [x] GDPR/CCPA compliance in Privacy Policy

## Links

### Product
- **Telegram Bot**: https://t.me/rfl_pro_bot/join?startapp=ref6324354572
- **Web App**: https://rfl-webapp.vercel.app/

### Community
- **Telegram**: https://t.me/+DbLMKwrGjII1YmRi
- **Twitch**: https://www.twitch.tv/rfl_pro_cs2
- **YouTube**: https://www.youtube.com/@RFLPROCS2
- **Twitter/X**: https://x.com/RFL_pro
- **TikTok**: https://tiktok.com/@rfl_pro_cs2

### Partners (Integration)
- Steam
- FACEIT
- FASTCUP
- Twitch
- YouTube

## Deployment

### Cloudflare Pages

1. Push to GitHub repository
2. Connect to Cloudflare Pages
3. Settings:
   - Build command: (none)
   - Build output directory: `/`
   - Root directory: `/`

### Local Development

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using Cloudflare Wrangler
npx wrangler pages dev .
```

## Design

### Color Palette
- Background: `#050507` (void), `#0a0a0f` (deep)
- Card: `#111118`
- Primary Accent: `#a855f7` (purple)
- Secondary Accent: `#22d3ee` (cyan)
- Text: `#ffffff`, `#e2e8f0`, `#94a3b8`

### Typography
- Display: **Bebas Neue** (headings)
- Body: **Plus Jakarta Sans**

### Style
- Dark theme, cyber-tactical aesthetic
- Gradient accents (purple → cyan)
- Subtle grid background
- Smooth animations

## Critical Disclaimers

Footer includes required disclaimers:

> RFL PRO is not affiliated with, endorsed by, or connected to Valve Corporation, FACEIT, Fastcup, Twitch, YouTube, or any other third-party companies. Counter-Strike 2 and related properties are trademarks of Valve Corporation.

> Virtual items obtained through cases are randomized. Drop probabilities are disclosed for each case. Virtual currency (Crystals) has no real-world monetary value and cannot be exchanged for cash.

## Future Plans

From description.md (handle with care in public communications):
- Web version (WebApp) with unified profile
- CS2 Wiki with item pages
- Direct skin purchases in Telegram
