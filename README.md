<div align="center">

# 🛒 Exclusive — E-Commerce Frontend

A modern, scalable, production-ready e-commerce frontend built with **React 19 + TypeScript + Vite**.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux)](https://redux-toolkit.js.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000?logo=vercel)](https://vercel.com)

</div>

---

## 📌 Overview

Full-featured e-commerce frontend that integrates with a RESTful Node.js/Express backend. Covers the complete shopping experience from browsing to checkout, with JWT-based authentication and protected routes.

---

## ⚡ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| State Management | Redux Toolkit + React Redux |
| Routing | React Router DOM v7 |
| HTTP Client | Axios (with interceptors) |
| Forms | React Hook Form |
| Auth | JWT Decode |
| UI Components | Headless UI, Heroicons, React Icons |
| Slider | Swiper |
| Notifications | React Hot Toast, SweetAlert2 |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── App/
│   ├── slices/cartSlice.ts       # Cart state (add, remove, qty, clear)
│   └── store/index.ts            # Redux store
│
├── components/
│   ├── Home components/          # HeroSlider, Categories, Featured, BestSelling...
│   ├── layout/                   # Root, Navbar, Footer, AuthLayout
│   ├── product/                  # ProductCard, OneCardProd
│   └── ui/                       # Container, ScrollToTop
│
├── Pages/
│   ├── Home/                     # Landing page
│   ├── Products/                 # Listing + ProductDetail
│   ├── Cart/                     # Cart page
│   ├── Checkout/                 # Checkout flow
│   ├── Auth/                     # Login, Register, LoginSuccess
│   ├── Users/                    # Account, Orders
│   ├── wishlist/                 # Wishlist page
│   ├── About/ & Contact/
│   └── Error/                    # 404 NotFound
│
├── routes/
│   ├── AppRoutes.tsx             # All routes definition
│   └── ProtectedRoute.tsx        # Auth guard
│
├── utils/
│   ├── axios.ts                  # Axios instance + Bearer token interceptor
│   ├── auth.ts                   # Token helpers (get/set/remove)
│   └── wishlist.ts               # Wishlist localStorage helpers
│
├── interface/index.ts            # TypeScript interfaces (IProduct, CartItem, User...)
└── types/swiper-css.d.ts
```

---

## ✨ Features

- **Product Browsing** — listing, filtering by category, product detail page
- **Cart** — add/remove, increase/decrease quantity, persistent via `localStorage`
- **Wishlist** — toggle, add/remove, count badge, event-driven updates
- **Authentication** — Login, Register, JWT stored in `localStorage`, auto-attached to requests
- **Protected Routes** — account, orders, cart, checkout, wishlist all require auth
- **Checkout** — billing form with order flow
- **Responsive UI** — mobile-first with Tailwind CSS
- **Notifications** — toast messages + SweetAlert2 confirmations
- **404 Page** — custom not-found route

---

## 🔐 Route Structure

```
/                    → Home
/about               → About
/contact             → Contact
/products            → Products listing
/products/:id        → Product detail

/auth/login          → Login
/auth/register       → Register
/auth/login-success  → OAuth success

/account             → Profile          🔒
/account/orders      → Orders           🔒
/account/Wishlist    → Wishlist         🔒
/account/cart        → Cart             🔒
/account/checkout    → Checkout         🔒

*                    → 404 Not Found
```

---

## ⚙️ Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/rabea-shaban/ecommerce-frontend.git
cd ecommerce-frontend
npm install
```

### 2. Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:5000
VITE_IMAGE_URL=http://localhost:5000/uploads
```

### 3. Run

```bash
npm run dev
```

---

## 🏗️ Scripts

```bash
npm run dev       # Start dev server
npm run build     # TypeScript check + Vite build
npm run preview   # Preview production build
npm run lint      # ESLint
```

---

## 🌐 Deployment

Deployed on **Vercel** with SPA rewrite config (`vercel.json`):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 🧠 State Management

Redux Toolkit manages the cart globally:

| Action | Description |
|---|---|
| `addItem` | Add product or increment quantity |
| `increaswQty` | Increment item quantity |
| `decreaswQty` | Decrement (removes at 0) |
| `removeFromCart` | Remove item by ID |
| `clearCart` | Empty the cart |

Cart state is persisted to `localStorage` on every change.

---

## 🔗 API Integration

`src/utils/axios.ts` — centralized Axios instance:

- `baseURL` points to the backend
- Request interceptor auto-attaches `Authorization: Bearer <token>` on every request

---

## 👨‍💻 Author

**Rabea Shaban**

[![Portfolio](https://img.shields.io/badge/Portfolio-rabea--shaban.com-blue)](https://rabea-shaban.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rabea--sh--elzayat-0A66C2?logo=linkedin)](https://www.linkedin.com/in/rabea-sh-elzayat)
[![GitHub](https://img.shields.io/badge/GitHub-rabea--shaban-181717?logo=github)](https://github.com/rabea-shaban)

---

<div align="center">
  If you found this useful, drop a ⭐ on GitHub!
</div>
