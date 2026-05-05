# 🚀 Yuvraj Mangutkar — Portfolio

<div align="center">


[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-yuvraj--portfolio-00f5ff?style=for-the-badge&logo=vercel&logoColor=white)](https://yuvraj-portfolio-5s2r.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-YuvrajMangutkar-bf5fff?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YuvrajMangutkar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yuvraj_Mangutkar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yuvraj-mangutkar/)

</div>

---

## 👨‍💻 About

A high-performance, visually stunning personal portfolio website built with **React** and **Vite**. Features advanced animations, a cyberpunk-inspired dark theme, and a fully functional contact form.

> Third-year AI & Data Science student at SPPU — building intelligent web apps and seeking Full Stack & AI Engineering roles.

---

## ✨ Features

- 🎨 **Cyberpunk Dark Theme** — Neon colors, glassmorphism, gradient effects
- ⚡ **Blazing Fast** — Vite build, lazy-loaded sections, vendor chunk splitting
- 🖼️ **Animated Profile Picture** — Rotating conic-gradient ring with neon glow
- 💻 **Glitch Text Effect** — Custom CSS glitch animation on hero name
- 🌊 **Particle Background** — Interactive tsParticles canvas
- 📱 **Fully Responsive** — Works on all screen sizes
- 📧 **Working Contact Form** — EmailJS integration for real email delivery
- 🔐 **Security Headers** — XSS, clickjacking & content-sniffing protection via Vercel
- 🤖 **Full SEO** — Open Graph, Twitter Card, robots, canonical tags
- 📜 **Scroll Progress Bar** — Animated top progress indicator
- 🖱️ **Custom Cursor** — Glowing neon cursor follower (desktop only)
- 🛡️ **Error Boundary** — Crash protection with branded fallback UI

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React 18, Vite 5 |
| **Styling** | Tailwind CSS v3, Vanilla CSS |
| **Animations** | Framer Motion, GSAP |
| **Particles** | tsParticles |
| **Icons** | Lucide React |
| **Email** | EmailJS |
| **Deployment** | Vercel |
| **Fonts** | Inter, JetBrains Mono (Google Fonts) |

---

## 📁 Project Structure

```
yuvraj-portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf          # Downloadable resume
│   └── yuvraj2.png         # Profile photo
├── src/
│   ├── components/
│   │   ├── About.jsx       # About section with timeline
│   │   ├── Contact.jsx     # Contact form (EmailJS)
│   │   ├── ErrorBoundary.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx        # Hero with animated profile pic
│   │   ├── Loader.jsx      # Intro loading screen
│   │   ├── Navbar.jsx
│   │   ├── Particles.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx             # Root app with lazy loading
│   ├── index.css           # Global styles & animations
│   └── main.jsx
├── .env                    # EmailJS keys (never push this!)
├── .gitignore
├── index.html              # SEO meta tags
├── vercel.json             # Security headers & routing
├── vite.config.js          # Build optimization
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YuvrajMangutkar/yuvraj-portfolio.git

# Navigate into the project
cd yuvraj-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get these from [emailjs.com](https://www.emailjs.com/) — it's free!

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📧 EmailJS Setup

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add Gmail as an Email Service → copy **Service ID**
3. Create an Email Template with `{{from_name}}`, `{{from_email}}`, `{{message}}` variables → copy **Template ID**
4. Go to Account → General → copy **Public Key**
5. Add all three to your `.env` file

---

## 🌐 Deployment

This project is deployed on **Vercel** with:
- Automatic deployments on every `git push`
- Security headers via `vercel.json`
- Environment variables stored securely in Vercel Dashboard

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YuvrajMangutkar/yuvraj-portfolio)

---

## 📬 Contact

**Yuvraj Mangutkar**

- 📧 Email: [mangutkaryuvraj@gmail.com](mailto:mangutkaryuvraj@gmail.com)
- 💼 LinkedIn: [yuvraj-mangutkar](https://www.linkedin.com/in/yuvraj-mangutkar/)
- 🐙 GitHub: [YuvrajMangutkar](https://github.com/YuvrajMangutkar)
- 💻 LeetCode: [yuvraj_1961](https://leetcode.com/u/yuvraj_1961/)

---

<div align="center">

**Made with ❤️ & ☕ by Yuvraj Mangutkar**

⭐ Star this repo if you liked it!

</div>
