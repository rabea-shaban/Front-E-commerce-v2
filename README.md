🛒 E-Commerce Frontend Application

A modern, scalable, and production-ready E-Commerce frontend built with React 19 + TypeScript + Vite, focusing on performance, clean architecture, and exceptional user experience.

🚀 Overview

This project is a complete frontend solution for an e-commerce platform that includes:

Product browsing
Cart & wishlist management
Authentication system
Checkout flow
Fully structured scalable architecture

Designed to integrate seamlessly with a RESTful backend API.

🌍 Live Demo
https://your-live-demo-link.com
📦 Tech Stack
🧠 Core
React 19
TypeScript
Vite
🎨 UI & Styling
Tailwind CSS
Headless UI
Heroicons
React Icons
Swiper (for sliders)
⚙️ State Management
Redux Toolkit
React Redux
🌐 API & Networking
Axios
🔐 Authentication
JWT Decode
🧩 Forms & UX
React Hook Form
React Hot Toast
SweetAlert2
📁 Project Structure
src/
│
├── App/
│   ├── store/
│   │   └── index.ts          # Redux store configuration
│   └── slices/
│       └── cartSlice.ts      # Cart state management
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Root.tsx
│   │   └── AuthLayout.tsx
│   │
│   ├── Home components/
│   │   ├── HeroSlider.tsx
│   │   ├── Categories.tsx
│   │   ├── BestSelling.tsx
│   │   ├── Featured.tsx
│   │   ├── OurProducts.tsx
│   │   └── Services.tsx
│   │
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   └── OneCardProd.tsx
│   │
│   └── ui/
│       └── Shared UI components
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
│   ├── axios.ts          # Axios instance & interceptors
│   ├── auth.ts           # Authentication helpers
│   └── wishlist.ts       # Wishlist logic
│
├── interface/
│   └── index.ts          # TypeScript interfaces
│
├── styles/
│   └── global.css
│
├── types/
│   └── custom types
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts
✨ Features
🏠 Home Page
Dynamic hero slider
Categories section
Featured & best-selling products
Promotional sections
Responsive design
🛍️ Products Module
Product listing page
Product details page
Reusable product components
Image handling
🛒 Cart System (Redux)
Add to cart
Remove from cart
Update quantity
Persistent state
❤️ Wishlist
Add/remove products
Local or API-based storage
Easy integration
🔐 Authentication System
Login / Register
JWT-based authentication
Protected routes
Auto token handling
💳 Checkout Flow
Billing form
Order submission
UX optimized flow
📄 Static Pages
About
Contact
Error (404)
🔐 Protected Routes
<ProtectedRoute>
  <Checkout />
</ProtectedRoute>
Blocks unauthorized users
Redirects to login if needed
⚙️ Installation
1️⃣ Clone Project
git clone https://github.com/your-username/ecommerce-frontend.git
cd ecommerce-frontend
2️⃣ Install Dependencies
npm install
# or
yarn install
3️⃣ Run Development Server
npm run dev
🏗️ Build & Deployment
Build
npm run build
Preview
npm run preview
🌐 Environment Variables

Create a .env file in root:

VITE_API_URL=http://localhost:5000/api
VITE_IMAGE_URL=http://localhost:5000/uploads
🔗 API Handling

All API requests are centralized in:

src/utils/axios.ts

Features:

Base URL configuration
Token injection
Error handling
Interceptors ready
🧠 State Management (Redux Toolkit)

Example:

cartSlice.ts

Handles:

Cart items
Quantity updates
Total calculation
🎨 UI Principles
Fully responsive design
Clean & modern UI
Reusable components
Accessibility-friendly structure
⚡ Performance Optimizations
Vite fast bundling
Lazy loading (routes/components)
Optimized re-renders with Redux
Component reusability
🧪 Linting
npm run lint

Uses:

ESLint
TypeScript ESLint rules
📸 Pages Included
Home
Products
Product Details
Cart
Checkout
Login / Register
Account
Wishlist
About
Contact
404 Page
🧩 Future Improvements
🔍 Advanced filtering & search
⭐ Reviews & ratings system
📦 Order history
💳 Payment integration (Stripe / Paymob)
🌍 Multi-language support (i18n)
📱 PWA support
👨‍💻 Author

Rabea Shaban
Frontend Developer (React.js | Next.js | TypeScript)

🌐 Portfolio: https://rabea-shaban.com
💼 LinkedIn: https://www.linkedin.com/in/rabea-sh-elzayat
💻 GitHub: https://github.com/rabea-shaban
⭐ Contributing

Contributions are welcome!

Fork the project
Create your feature branch
Commit your changes
Push to branch
Open a Pull Request
📄 License

This project is licensed under the MIT License.

💬 Support

If you like this project, give it a ⭐ on GitHub — it really helps!
