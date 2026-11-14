# Paradise Nursery — Shopping Cart Application

**Paradise Nursery** is a responsive online houseplant shopping application built as a React final project. Customers can browse **18 unique plants in 3 categories**, add favorites to their shopping cart, change quantities, remove items, and see totals update immediately.

## Features

- A welcoming **Paradise Nursery landing page** with a background illustration, company introduction, and **Get Started** button.
- A reusable navigation bar linking **Home**, **Plants**, and **Cart**, including a live cart-item count.
- **Easy-Care Favorites**, **Air-Purifying Greens**, and **Statement Plants**, each with six plant products and thumbnails.
- **Add to Cart** buttons, automatically disabled after each product has been added.
- A **Redux Toolkit slice** to manage cart items, addition, removal, quantities, and totals.
- A shopping cart that displays thumbnails, names, prices, quantities, per-item subtotals, and order total.
- **Increase**, **decrease**, and **remove** controls; **Continue Shopping** navigation and a **Checkout** button showing a “Coming Soon” message.
- Responsive layouts and cart persistence using browser local storage.

## Technologies

React, Vite, JavaScript (JSX), Redux Toolkit, React Redux, React Router, CSS.

## Run locally

Make sure Node.js and npm are installed.

```bash
npm install
npm run dev
```

Open the local URL displayed in your terminal (usually `http://localhost:5173`).

For a production build:

```bash
npm run build
npm run preview
```

## Project files

| File | Purpose |
| --- | --- |
| `src/App.jsx` | Landing page, company name, Get Started button, routes and navigation |
| `src/AboutUs.jsx` | Company introduction and values |
| `src/App.css` | Styling and landing-page background illustration |
| `src/CartSlice.jsx` | Redux shopping-cart slice, actions, and selectors |
| `src/ProductList.jsx` | 18 products divided into three categories, with Add to Cart buttons |
| `src/CartItem.jsx` | Cart details, quantity controls, subtotals, checkout message |
| `src/data/plants.js` | Plant product catalog |
| `src/store.js` | Redux store setup and cart persistence |
| `src/main.jsx` | React root, Redux Provider, and router |
| `public/images/` | Local SVG plant thumbnails and landing illustration |


