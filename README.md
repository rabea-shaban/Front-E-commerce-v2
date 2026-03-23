# 🛒 E-Commerce Frontend Application

A modern, scalable, and production-ready **E-Commerce frontend** built with **React 19 + TypeScript + Vite**, focusing on performance, clean architecture, and exceptional user experience.

---

## 🚀 Overview

This project is a complete frontend solution for an e-commerce platform that includes:

- Product browsing
- Cart & wishlist management
- Authentication system
- Checkout flow
- Fully structured scalable architecture

Designed to integrate seamlessly with a RESTful backend API.

---

## 🌍 Live Demo

👉 https://your-live-demo-link.com

---

## 📦 Tech Stack

### 🧠 Core
- React 19
- TypeScript
- Vite

### 🎨 UI & Styling
- Tailwind CSS
- Headless UI
- Heroicons
- React Icons
- Swiper

### ⚙️ State Management
- Redux Toolkit
- React Redux

### 🌐 API & Networking
- Axios

### 🔐 Authentication
- JWT Decode

### 🧩 Forms & UX
- React Hook Form
- React Hot Toast
- SweetAlert2

---

## 📁 Project Structure

```

src/
│
├── App/
│   ├── store/
│   │   └── index.ts
│   └── slices/
│       └── cartSlice.ts
│
├── components/
│   ├── layout/
│   ├── Home components/
│   ├── product/
│   └── ui/
│
├── Pages/
│   ├── Home/
│   ├── Products/
│   ├── Cart/
│   ├── Checkout/
│   ├── Auth/
│   ├── About/
│   ├── Contact/
│   ├── Users/
│   ├── Wishlist/
│   └── Error/
│
├── routes/
│   ├── AppRoutes.tsx
│   └── ProtectedRoute.tsx
│
├── utils/
│   ├── axios.ts
│   ├── auth.ts
│   └── wishlist.ts
│
├── interface/
├── styles/
├── types/
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts

````

---

## ✨ Features

### 🏠 Home Page
- Hero slider
- Categories section
- Featured products
- Best selling section

### 🛍️ Products
- Product listing
- Product details page
- Reusable components

### 🛒 Cart (Redux)
- Add / remove products
- Update quantity
- Persistent state

### ❤️ Wishlist
- Add/remove items
- Simple state logic

### 🔐 Authentication
- Login / Register
- JWT handling
- Protected routes

### 💳 Checkout
- Billing form
- Order flow

### 📄 Pages
- About
- Contact
- 404 Page

---

## 🔐 Protected Routes

```tsx
<ProtectedRoute>
  <Checkout />
</ProtectedRoute>
````

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-frontend.git
cd ecommerce-frontend
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run development server

```bash
npm run dev
```

---

## 🏗️ Build & Preview

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

---

## 🌐 Environment Variables

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
VITE_IMAGE_URL=http://localhost:5000/uploads
```

---

## 🔗 API Configuration

Located in:

```
src/utils/axios.ts
```

* Centralized API setup
* Token handling
* Interceptors ready

---

## 🧠 State Management

Redux Toolkit is used for:

* Cart management
* Global state handling
* Scalable architecture

---

## 🎨 UI & UX

* Responsive design
* Clean layout
* Reusable components
* Optimized user experience

---

## ⚡ Performance

* Vite fast build
* Lazy loading ready
* Optimized rendering

---

## 🧪 Linting

```bash
npm run lint
```

---

## 📸 Pages Included

* Home
* Products
* Product Details
* Cart
* Checkout
* Login / Register
* Account
* Wishlist
* About
* Contact
* 404 Page

---

## 🧩 Future Improvements

* Advanced filtering
* Product reviews
* Order history
* Payment integration
* Multi-language support

---

## 👨‍💻 Author

**Rabea Shaban**

* 🌐 [https://rabea-shaban.com](https://rabea-shaban.com)
* 💼 [https://www.linkedin.com/in/rabea-sh-elzayat](https://www.linkedin.com/in/rabea-sh-elzayat)
* 💻 [https://github.com/rabea-shaban](https://github.com/rabea-shaban)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!


