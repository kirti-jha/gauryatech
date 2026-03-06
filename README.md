# Gaurya Technologies

A modern, responsive MERN stack web application replicating the robust design and structure of `codegraphi.com`. Built with a focus on high-performance animations, clean UI/UX, and modern development tools.

## 🚀 Tech Stack

### Frontend
*   **React 18** (via Vite)
*   **Tailwind CSS v4** (Custom themed)
*   **Framer Motion** (for fluid animations and page transitions)
*   **React Router Dom** (for client-side routing)
*   **React Icons**

### Backend
*   **Node.js** & **Express.js**
*   **MongoDB** (via Mongoose)
*   **CORS & Dotenv** for configuration

## 🌟 Implemented Features

*   **Global Theme Toggle**: Light/Dark mode switcher built into the navigation bar (defaults to Light mode).
*   **Responsive Navigation**: Sticky header with dropdown menus for Desktop and a hamburger menu for Mobile.
*   **Home Page**: Dynamic landing section with a Hero component, Services grid, interactive Portfolio/Partner slider, and Testimonials carousel.
*   **About Us Page**: Features the Digital Excellence Banner, Tailored Digital Solutions segment, core Mission & Values, and a Company timeline grid.
*   **Services Page**: Extensive services listing with detailed grid cards for Website Development, Software Solutions, E-Commerce Platforms, and Digital Marketing, all with hover effects.
*   **Contact Page**: Fully functional Contact layout featuring an interactive grid, an embedded Google Map, and a working contact form.
*   **Backend Integration**: API endpoints for storing Newsletter Subscriptions (`/api/subscribe`) and Contact Form submissions (`/api/contact`) in MongoDB.

## 🛠️ Local Development Setup

To run this project locally, you will need two terminal tabs open—one for the frontend client and one for the backend server.

### 1. Backend Setup
Navigate to the `server` directory, install dependencies, and start the server:
```bash
cd server
npm install
# Ensure you have a .env file with PORT=5000 and MONGODB_URI set
node index.js
```
The backend Server runs on `http://localhost:5000`.

### 2. Frontend Setup
Navigate to the `client` directory, install dependencies, and start the Vite development server:
```bash
cd client
npm install
npm run dev
```
The frontend application runs on `http://localhost:5173`.

---

## 📝 Development Log / Changelog

*   **Initial Setup**: Scaffolded MERN structure (Vite/React frontend, Express/Mongo backend).
*   **Core UI Built**: Implemented Navbar, Footer, and theme toggling.
*   **Home Page Developed**: Built out Hero, Services, Portfolio, Pricing (later removed per request), and Testimonials sections.
*   **Backend Endpoints**: Created Mongoose models and endpoints for contact messages and newsletter emails.
*   **About Us & Services Pages Developed**: Assembled comprehensive static pages matching target layout.
*   **Contact Page Developed**: Integrated forms, maps, and information grids.
*   **UI Tweaks**: Removed rigid background highlights from text and "Company" dropdown from the navbar; enforced light theme default.
*   **Component Cleanup**: Removed unused/unwanted visual elements like Flexible Pricing Plans & Contact "Reach Out" banners.
*   **Repository Created**: Pushed project to GitHub.

*(This log will be continuously updated as new features are added)*
