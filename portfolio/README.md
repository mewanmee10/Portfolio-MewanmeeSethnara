# Personal Portfolio

This is a minimal, elegant, feminine personal portfolio built with **React**, **Vite**, and **Tailwind CSS**.

## Prerequisites
- Node.js (>=18) and npm installed
- VS Code (recommended) with the **JavaScript Debugger** extension (comes built‑in)

## Getting Started
1. **Open the project in VS Code**
   ```
   code d:/mewss/portfolio
   ```
2. **Install dependencies**
   ```
   npm install
   ```
3. **Run the development server**
   ```
   npm run dev
   ```
   The app will automatically open in your default browser at `http://localhost:5173`.

## VS Code Debugging
- Press `F5` (or click the Run ▶️ button) to launch Chrome with debugging attached, using the launch configuration we added in `.vscode/launch.json`.
- Breakpoints work in your React components.

## Customisation
- Replace `public/profile.jpg` with your own portrait (the layout expects a circular pastel‑pink background).
- Add your project screenshots to `public/` and update the **Projects** component accordingly.
- Update the placeholder name in `src/App.jsx` and `index.html` with your actual name.
- Drop your CV PDF into `public/CV.pdf` – the **Download CV** button will serve it.

## Folder Structure
```
portfolio/
├─ .vscode/                # VS Code launch config
├─ public/                 # static assets (profile photo, CV, screenshots)
│   └─ CV.pdf
├─ src/
│   ├─ components/         # UI components (Navbar, Sidebar, Hero, …)
│   ├─ App.jsx
│   ├─ main.jsx
│   └─ index.css
├─ index.html
├─ package.json
├─ tailwind.config.cjs
├─ vite.config.js
└─ README.md               # <-- you are reading this
```

---
Feel free to ask if you need any of the missing assets (profile photo, project screenshots, CV) or want to tweak the design further.
