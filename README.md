# Garima Shrestha — Portfolio

A hand-built, multi-page portfolio website. Pure HTML/CSS/JS — no build step, no
dependencies. Open `index.html` in a browser to view.

## Pages
| File | Page |
|------|------|
| `index.html` | Home |
| `work.html` | Work (links to all case studies) |
| `pints-of-joy.html` | Pints of Joy — inventory web app (anchor case study) |
| `fittrack.html` | FitTrack — AI fitness app |
| `teesa.html` | Teesa — luxury jewelry brand |
| `about.html` | About + skills |
| `contact.html` | Contact |

Shared files: `styles.css` (design system) · `main.js` (mobile nav + scroll reveal).

## Before you publish — finish these
1. **Swap images.** See `assets/README.md`. Every placeholder has an HTML comment
   showing the exact `<img>` to paste.
2. **Replace the highlighted placeholders.** Anything wrapped in
   `<span class="todo">[…]</span>` shows up gold-highlighted on the page — that's a
   reminder to fill in a real detail (company name, dates, LinkedIn URL, etc.).
   Search the project for `todo` to find them all.
3. **Pints of Joy "Phase 2".** Only keep the "Building it for real" section if a real
   business actually uses the app. If not, delete that block (it's marked with a comment).
4. **Add your resume** as `assets/resume.pdf` and point the Resume links at it.

## Run locally
Just double-click `index.html`, or serve it:
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy (free options)
- **GitHub Pages** — push this repo, then Settings → Pages → deploy from `main` / root.
- **Netlify / Vercel** — drag the folder in, or connect the GitHub repo.
