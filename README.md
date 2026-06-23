# VibeStay

**Discover and share unique places to stay — a community-driven travel listing platform.**

---

## 📌 About the Project

VibeStay is a full-stack web application where users can explore, add, and review travel destinations and stay listings. Any registered user can create a listing for a place, while other users can browse listings, leave reviews, and manage their own contributions.

---

## ✨ Features

- 🔐 **User Authentication** — Register and log in to manage your listings
- 🔑 **User Authorization** - Listings owner only can edit and delete their listings
- 🏠 **Create Listings** — Add places with title, description, location, price, and images
- 📷 **Image Uploads** — Images stored securely via Cloudinary
- ☑️ **Validation** - Implemented Server side validation for ensuring malformed data cannot compromise the application's database, even if frontend checks are completely bypassed
- ⭐ **Reviews** — Logged-in users can post reviews on any listing
- ✏️ **Edit & Delete** — Full CRUD support for listings and reviews (owner-only)
- 📱 **Responsive UI** — Clean views rendered with EJS templating
- ☁️ **Cloud Deployment** — Hosted on Render with MongoDB Atlas as the database

---

## 🛠️ Tech Stack

- Frontend (EJS, HTML, CSS)
- Backend (Node.js, Express.js)
- Database (MongoDB, Mongoose)
- Cloud DB (MongoDB Atlas)
- File Storage (Cloudinary)
- Auth (Express-session/passport.js)
- Deployment (Render)

---

## 📁 Project Structure

```
VibeStay/
| controllers/        # Route handler logic
├── init/               # Database initialization / seed data
├── models/             # Mongoose schemas (User, Listing, Review)
├── public/             # Static assets (CSS, JS, images)
├── routes/             # Express route definitions
├── utils/              # Helper functions & error handling
├── views/              # EJS templates
├── .gitignore
├── .npmrc
├── cloudConfig.js      # Cloudinary configuration
├── index.js            # App entry point
├── middleware.js        # Custom middleware (auth, validation, etc.)
├── schema.js            # Joi validation schemas
└── package.json
```

## 🌐 Live Demo

[VibeStay on Render](https://vibestay-app.onrender.com)
> ⏳ **Note on Loading Time:** This application is hosted on Render's free tier. If the app has been inactive for a while, it may take **50–60 seconds** to "wake up" and load. Please give it a minute—it will load shortly!

---

## ⚙️ Getting Started 

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas URI)
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jayash4075/VibeStay.git
   cd VibeStay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Seed the database** *(optional)*
   ```bash
   node init/index.js
   ```

5. **Start the server**
   ```bash
   node index.js
   ```

   Visit `http://localhost:8080` in your browser.

---

## 🚀 Deployment

This project is deployed on **Render** with **MongoDB Atlas** as the cloud database and **Cloudinary** for image storage.

To deploy your own instance:
1. Push your code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Add all environment variables in the Render dashboard
4. Set the build command to `npm install` and start command to `node index.js`
5. Add the IP address from Render to MongoDB Atlas

---




