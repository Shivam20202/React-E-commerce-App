# ShoppyGlobe — Premium React E-commerce

A polished e-commerce application built with **React + Vite + Tailwind CSS**, using **Redux Toolkit** for state and **React Router (createBrowserRouter)** for dynamic routing. Lazy-loaded routes, lazy-loaded images, and a curated motion/animation pass give the app a premium feel.

> 🔗 **GitHub Repository:** (https://github.com/Shivam20202/React-E-commerce-App)

---

## ✨ Features

- 🛍️ Product catalog fetched from `https://dummyjson.com/products`
- 🔎 Live search (powered by Redux state) to filter products
- 📦 Product detail page with dynamic route params (`/product/:id`)
- 🛒 Cart with add / remove / quantity controls (min quantity = 1)
- 💳 Checkout dummy form → "Order placed" → cart cleared → redirect home
- 🚫 Custom 404 NotFound page for unknown routes
- ⚡ Code-splitting & lazy loading for every route via `React.lazy` + `Suspense`
- 🖼️ Lazy-loaded product images (`loading="lazy"`)
- 🎨 Tailwind CSS styling with gradients, glass header, and smooth animations
- 📱 Fully responsive across mobile / tablet / desktop

---

## 🧱 Component Structure

```
src/shoppy/
├── App.jsx              # Root: Redux Provider + createBrowserRouter + lazy routes
├── hooks/
│   └── useProducts.js   # Custom hook: fetch products with useEffect
├── redux/
│   ├── store.js         # Configured Redux store
│   ├── cartSlice.js     # Cart actions, reducer, selectors
│   └── searchSlice.js   # Global search query state
└── components/
    ├── Header.jsx       # Nav + animated cart icon + search
    ├── ProductList.jsx  # Grid of products, filtered by Redux search
    ├── ProductItem.jsx  # Single product card + "Add to Cart"
    ├── ProductDetail.jsx# Product details fetched by route param
    ├── Cart.jsx         # Cart page with totals
    ├── CartItem.jsx     # Single cart line item + qty controls + remove
    ├── Checkout.jsx     # Dummy form + summary + Place Order flow
    └── NotFound.jsx     # 404 page
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the URL shown in the terminal).

### 3. Build for production

```bash
npm run build
npm run preview
```

---

## 🗺️ Routes

| Path             | Component       | Notes                             |
| ---------------- | --------------- | --------------------------------- |
| `/`              | `ProductList`   | Home / catalog                    |
| `/product/:id`   | `ProductDetail` | Dynamic route param               |
| `/cart`          | `Cart`          | Cart contents + totals            |
| `/checkout`      | `Checkout`      | Dummy form + Place Order          |
| `*` (any other)  | `NotFound`      | 404 page                          |

---

## 🧠 State Management (Redux Toolkit)

- **`cartSlice`** — `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `clearCart` + selectors (`selectCartItems`, `selectCartCount`, `selectCartTotal`).
- **`searchSlice`** — `setSearchQuery` + `selectSearchQuery`. The `ProductList` filters its rendered products from this Redux state.

Quantity controls guard against going below `1` (per assignment spec).

---

## 🌐 Data Fetching

- `useProducts()` custom hook uses `useEffect` to call `https://dummyjson.com/products` on mount. Returns `{ products, loading, error }`.
- `ProductDetail` uses `useEffect` to call `https://dummyjson.com/products/:id` whenever the route param changes.
- Both implement graceful **error handling** with retry-friendly UI.

---

## ⚡ Performance

- Each route component is loaded via `React.lazy()` and rendered inside `<Suspense />` — only the code needed for the current page is shipped.
- All product images use `loading="lazy"` for on-demand decoding.

---

## 🎨 Styling

- Tailwind CSS utility-first styling
- Gradient brand accent (indigo → fuchsia → rose)
- Glass-blur sticky header
- Subtle fade / scale animations on entry & hover
- Responsive grid (`2 → 3 → 4` columns)

---

## 📤 Submission Checklist

- ✅ Built with **Vite**
- ✅ All required components present
- ✅ Redux with actions / reducers / selectors
- ✅ Dynamic React Router using `createBrowserRouter`
- ✅ `React.lazy` + `Suspense` for all route components
- ✅ Lazy-loaded images
- ✅ Responsive Tailwind styling
- ✅ Code is commented & indented consistently

---

## 📜 License

For educational use as part of the React assignment.
