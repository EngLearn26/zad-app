<div align="center">
  
  <img src="public/logo.svg" alt="Zad App Logo" width="150"/>

  # 🌙 Zad App 

  **Your ultimate digital companion for Islamic knowledge, Quran reading, and Ramadan planning.**
  
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </p>
</div>

---

## 📖 About The Project

**Zad** is a comprehensive, open-source Islamic web application built to provide a seamless and visually appealing spiritual experience. It offers a live Quran reader, authentic Hadith collections, Islamic books, insightful podcasts, and a dedicated interactive Ramadan planner. 

### 📸 Glimpse of the App

<p align="center">
  <img src="public/landing.png" alt="Light Mode" width="48%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="public/landingDark.png" alt="Dark Mode" width="48%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
</p>
<p align="center"><em>✨ Fully supports Light & Dark Modes ✨</em></p>

---

## 🚀 Features

* ⚡ **Modern Tech Stack**: Built with the absolute latest technologies including **Next.js**, **React 19**, and **Tailwind CSS v4** to ensure lightning-fast performance.
* 📖 **Rich Islamic Content Viewers**: Specialized, distraction-free interfaces for reading **Hadiths** and **Islamic Books** with a focus on readability and spiritual engagement.
* 🕌 **Live Quran Integration**: Real-time integration with the **Quran API** to fetch Surahs and Ayahs smoothly with an optimized caching strategy (ISR).
* 📅 **Interactive Ramadan Planner**: A dedicated daily task checklist with visual progress bars to help users track their spiritual goals and daily *Wird*.
* 🎧 **Islamic Podcasts Library**: Integrated audio/transcript viewers for educational Islamic podcasts (e.g., Dr. Naif, Sahm).
* 🖋️ **Authentic Arabic User Experience**: A fully **RTL (Right-to-Left)** interface utilizing traditional and elegant Arabic typography like **Amiri** and **Aref Ruqaa**.
* 📚 **Professional Content Typography**: Leverages **Tailwind Typography** to provide a clean, book-like reading experience for long-form scholarly content.
* 🔀 **Advanced Dynamic Routing**: Automated generation of content pages via **Static Site Generation (SSG)** for instantaneous navigation (e.g., `/books/[slug]`, `/hadiths/[slug]`).
* 🎨 **Theming & Customization**: Beautiful Light and Dark modes customized for visual comfort during night reading.

---

## 📁 Project Structure

```text
zad-app/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── books/            # Islamic Books Section
│   ├── hadiths/          # Hadith Collections
│   ├── podcast/          # Audio & Transcripts Section
│   ├── quran/            # Live Quran Reader
│   └── plan/             # Interactive Ramadan Planner
├── components/           # Reusable UI Components
│   ├── home/             # Landing page sections
│   ├── viewers/          # Content renderers (Books, Hadiths, etc.)
│   └── quran/            # Quran-specific UI (Sidebar, Surah View)
├── lib/                  # Utilities, API integrations, and Static Content
│   ├── services/         # Quran API fetchers
│   └── content/          # Transcripts and local data
├── public/               # Static assets (Images, Icons, Manifest)
└── providers/            # React Context Providers (e.g., ThemeProvider)

## 🛠️ Getting Started

Follow these easy steps to run the project locally on your machine:

### 1. Prerequisites
Ensure you have **Node.js** (version 20 or higher) and **npm** installed on your system.

### 2. Installation
Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone [https://github.com/EngLearn26/zad-arabic.git](https://github.com/EngLearn26/zad-arabic.git)

# Navigate into the project directory
cd zad-app

# Install dependencies
npm install