# DataLabs Pro | Data Analytics Learning Hub & Portfolio Hub

**DataLabs Pro** is a premium, production-ready, client-side interactive Data Analytics Learning Hub and Portfolio Platform. This application is designed as a prototype for investor pitches and resume presentations by **Afzal Ehsan**.

The platform is fully contained, modular, and designed to run entirely on the client side—meaning **no external databases**, **no paid API keys**, and **no server-side requirements** are necessary. It is ready for one-click deployment on Vercel or GitHub Pages.

---

## 🚀 Key Interactive Features

1. **Premium Dark Mode & Glassmorphic UI**:
   - Modern dashboard interface designed with deep slate backdrops (`#0B0F19`), vibrant neon accents (Cyan and Indigo), glowing cards, and smooth micro-animations.
   
2. **Student Portal & Progress Dashboard**:
   - Interactive Login modal (mock validation using email `student@datalabs.pro`).
   - Upon logging in, the UI transitions to reveal a customized **Student Dashboard**, showing learning progress paths, submitted projects status, active virtual internships, and metrics.

3. **Curated Resource Hub (Filterable tabs)**:
   - Dynamic Javascript-based cards grid where users can filter resources by categories: *SQL Practice*, *Data Dashboards*, and *Virtual Internships*.
   - Connects to renowned external resources (LeetCode Top SQL 50, SQLZoo Tutorials, Maven Analytics, Kaggle, Forage KPMG, and Forage Accenture).

4. **Visual Analytics Canvas (Chart.js)**:
   - Live analytics panel with visual charts toggling dynamically between two schemas: *E-Commerce Sales* and *Zomato Analysis*.
   - Interacts in real-time, refreshing metrics card averages, percentages, and growth rates.

5. **Sandbox SQL Query Playground**:
   - A client-side SQL parser simulation. Write queries (e.g. `SELECT * FROM sales;`, `SELECT name, rating FROM restaurants WHERE rating >= 4.6;`, etc.) directly inside the terminal query box.
   - Interactive **Schema Explorer** detailing available tables (`sales`, `customers`, `restaurants`) and data types.
   - Output terminal renders query result tables dynamically.

6. **Dataset Repository**:
   - Mock download dashboard that generates and compiles real CSV files on the fly via the browser's `Blob` API, alongside interactive toast notification alerts.

7. **Project Submission Portal**:
   - Fully functional form validation. Submitting a GitHub repository trigger simulates code checking, loading progress status, and shows a custom animated confetti success popup.

---

## 🛠️ Technology Stack
- **Core Structure**: HTML5 (semantic layout)
- **Styling & Theme**: Tailwind CSS (CDN implementation)
- **Custom Enhancements**: Custom Vanilla CSS (glassmorphic styling, neon glows, responsive layouts, toast animations)
- **Logic & Execution Engine**: Vanilla JavaScript ES6
- **Data Visualizations**: Chart.js (CDN implementation)

---

## 💻 Local Development Setup

Because the platform is client-side, you do not need complex local server setups or database installations.

### Option A: Direct Launch
1. Clone or download the repository.
2. Locate the [index.html](file:///d:/data%20analystic%20site/index.html) file.
3. Double-click to open it directly in any modern web browser (Chrome, Safari, Firefox, Edge).

### Option B: Local Static Server (Recommended)
To prevent potential CORS queries on specific CDNs, serve using a lightweight node server or python command:
- **Node.js**: Run `npx serve .` inside the folder.
- **Python**: Run `python -m http.server 8000` inside the folder.

---

## ⚡ Deployment to Vercel (One-Click)

This project is completely modular and ready to deploy to Vercel:
1. Push this directory to your GitHub account (e.g., repository named `datalabs-pro`).
2. Log into your [Vercel Dashboard](https://vercel.com).
3. Click **Add New Project** &rarr; Select `datalabs-pro` from your GitHub import list.
4. Keep the default settings (Vercel automatically detects the static HTML project).
5. Click **Deploy**. Your live prototype will be ready in under 10 seconds.

---

### Credits
* **Design and Idea by**: Afzal Ehsan | All Rights Reserved
* **Platform Title**: DataLabs Pro
