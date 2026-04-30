# Nilansh Garg — Portfolio

> ML Engineer & Data Scientist · Graph Neural Networks · Production MLOps

## 📁 File Structure

```
portfolio/
├── index.html               ← Main HTML (entry point)
├── styles.css               ← All CSS styles
├── script.js                ← All JavaScript
├── Capture.PNG              ← Your profile photo  ← ADD THIS
├── research_certificate.jpg ← Your IJRASET cert   ← ADD THIS
└── README.md                ← This file
```

> **Before deploying:** Drop `Capture.PNG` and `research_certificate.jpg`
> into the same folder. They load automatically — no code changes needed.

---

## 🚀 Deployment Options

### Option 1 — GitHub Pages (Free, Recommended)

1. Create a new GitHub repo named `nilansh-garg.github.io` (or any name)
2. Upload all files (`index.html`, `styles.css`, `script.js`, your images)
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Your site will be live at `https://nilansh-garg.github.io`

```bash
# Or via Git CLI
git init
git add .
git commit -m "Initial portfolio deploy"
git remote add origin https://github.com/Nilansh-garg/nilansh-garg.github.io.git
git push -u origin main
```

---

### Option 2 — Netlify (Free, Drag & Drop)

1. Go to [netlify.com](https://netlify.com) → Sign up / Log in
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop your entire portfolio folder
4. Done — you'll get a URL like `https://nilansh-garg.netlify.app`

To use a custom domain later: **Site settings → Domain management → Add custom domain**

---

### Option 3 — Vercel (Free, GitHub Integration)

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"New Project" → Import your GitHub repo**
3. Vercel auto-detects static HTML — just click **Deploy**
4. Live at `https://your-repo.vercel.app`

---

### Option 4 — Local Preview

No server needed for basic viewing. Just open `index.html` in any browser.

For a local dev server (avoids any CORS issues with fonts):

```bash
# Python (usually pre-installed)
python -m http.server 3000
# Then open http://localhost:3000

# Or with Node.js
npx serve .
```

---

## ✏️ Common Edits

| What to change | Where |
|---|---|
| Add live demo link to a project | `index.html` → find `btn-live`, add `class="btn-live active"` and set `href="your-url"` |
| Update skill percentages | `index.html` → `style="--w:XX%"` on each `.skill-bar` |
| Add a new project card | Copy any `.proj-card` block in `index.html` |
| Change colors | `styles.css` → `:root` variables at the top |
| Update contact info | `index.html` → Contact section |

---

## 🌐 Recommended Hosting: GitHub Pages

Since you're already on GitHub, Pages is the fastest path — free, reliable, and your portfolio URL will match your GitHub profile.
