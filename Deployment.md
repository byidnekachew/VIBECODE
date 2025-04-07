# Deployment Document: Vibe Oracle

## Project Overview
**Project Name:** Vibe Oracle  
**Description:** A quirky and mysterious web-based experience featuring services like Magic 8 Ball, Lucky Numbers, Fortune Generator, and Passive-Aggressive Astrology insights.  
**Tech Stack:**  
- HTML5  
- CSS3  
- JavaScript (Vanilla)

---

## Folder Structure
```
vibe-oracle/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── 8-Ball.png
├── README.md
```

---

## Deployment Options
This project is static and can be deployed on any platform that supports static hosting:

### Recommended Platforms
| Platform         | Features                                         |
|------------------|--------------------------------------------------|
| GitHub Pages     | Free, easy for GitHub users                      |
| Netlify          | Free tier, drag-and-drop or Git integration     |
| Vercel           | Easy CI/CD and preview URLs                     |
| Firebase Hosting | Fast CDN delivery with CLI deployment           |

---

## Deployment Steps

### ✅ Option 1: Deploying with GitHub Pages
1. Push your project to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Source**, select the branch (`main` or `master`) and the root directory.
4. Click **Save**.  
5. Your site will be live at: `https://your-username.github.io/vibe-oracle/`

---

### ✅ Option 2: Deploying with Netlify
1. Go to [Netlify](https://netlify.com) and sign in.
2. Click **Add new site** > **Deploy manually**.
3. Drag the **entire project folder** (`vibe-oracle`) into the drop zone.
4. Netlify will upload and host your site.
5. You'll get a live link like `https://vibe-oracle.netlify.app`

---

### ✅ Option 3: Deploying with Vercel
1. Go to [Vercel](https://vercel.com) and sign in with GitHub.
2. Click **Add New Project**.
3. Select your repo and confirm the settings.
4. Click **Deploy**.
5. Live site will be deployed and accessible immediately.

---

## Post-Deployment Checklist
- [ ] ✅ Verify all services (8 Ball, Lucky Numbers, etc.) work.
- [ ] ✅ Test on both mobile and desktop.
- [ ] ✅ Optimize image size (e.g., `8-Ball.png`) for faster load.
- [ ] ✅ Confirm assets are loading via relative paths.
- [ ] ✅ Add a favicon (optional).
- [ ] ✅ Add meta tags for description, author, and social sharing (optional).

---

## Future Suggestions
- Add PWA support to allow offline use.
- Integrate with APIs (e.g., actual astrology data).
- Add sound effects or subtle background music.
- Improve accessibility (ARIA labels, keyboard nav).
- SEO enhancements (titles, structured data).