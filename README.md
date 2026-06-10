# ShoppyGlobe — Premium React E-commerce

A polished e-commerce application built with **React + Vite + Tailwind CSS**, using **Redux Toolkit** for state and **React Router (createBrowserRouter)** for dynamic routing. Lazy-loaded routes, lazy-loaded images, and a curated motion/animation pass give the app a premium feel.

> 🔗 **GitHub Repository:** (https://github.com/Shivam20202/React-E-commerce-App)


  🔗 **Deployed Link:**  (https://react-e-commerce-app-ruby-ten.vercel.app/)

---

## ✨ Features

- 🛍️ Product catalog fetched from `https://dummyjson.com/products`
- 🔎 Live search (powered by Redux state) to filter products
- 📦 Product detail page with dynamic route params (`/product/:id`)
- 🛒 Cart with add / remove / quantity controls (min quantity = 1)
- 💳 Checkout dummy form → "Order placed" → cart cleared → redirect home
- 🚫 Custom 404 NotFound page for unknown routes
- 💾 **LocalStorage persistence** — cart items saved & restored on page refresh
- 🔔 **Toast notifications** — success popup when items are added to cart
- ⚡ Code-splitting & lazy loading for every route via `React.lazy` + `Suspense`
- 🖼️ Lazy-loaded product images (`loading="lazy"`)
- 🎨 Tailwind CSS styling with gradients, glass header, and smooth animations
- 📱 Fully responsive across mobile / tablet / desktop

---

## 🧱 Component Structure

```
src/
├── App.jsx              # Root: Redux Provider + NotificationProvider + createBrowserRouter
├── index.css            # Tailwind CSS with CSS variables
├── main.jsx             # React entry point
├── context/
│   └── NotificationContext.jsx  # Toast notification context & hook
├── hooks/
│   └── useProducts.js   # Custom hook: fetch products with useEffect
├── redux/
│   ├── store.js         # Configured Redux store with localStorage persistence
│   ├── cartSlice.js     # Cart actions, reducer, selectors with localStorage hydration
│   └── searchSlice.js   # Global search query state
└── components/
    ├── Header.jsx       # Nav + animated cart icon with badge + search
    ├── Toast.jsx        # Toast notification display component with animations
    ├── ProductList.jsx  # Grid of products, filtered by Redux search
    ├── ProductItem.jsx  # Single product card + "Add to Cart" with notification
    ├── ProductDetail.jsx# Product details fetched by route param + Add to Cart notification
    ├── Cart.jsx         # Cart page with totals
    ├── CartItem.jsx     # Single cart line item + qty controls + remove
    ├── Checkout.jsx     # Dummy form + summary + Place Order flow
    └── NotFound.jsx     # 404 page

├── index.html        
├── tailwind.config.js   # Tailwind theme with CSS variable color mappings
├── postcss.config.js    # PostCSS with Tailwind + Autoprefixer
├── vite.config.js       # Vite config with React plugin
├── README.md            # This file
└── package.json         # Dependencies & scripts

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

- **`cartSlice`** — `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `clearCart` + selectors (`selectCartItems`, `selectCartCount`, `selectCartTotal`). **Persists to localStorage** automatically on every action and hydrates from localStorage on app start.
- **`searchSlice`** — `setSearchQuery` + `selectSearchQuery`. The `ProductList` filters its rendered products from this Redux state.
- **`NotificationContext`** — Global notification system for displaying success/error toasts. Used by `ProductItem` and `ProductDetail` when adding items to cart.

Quantity controls guard against going below `1` (per assignment spec).
Cart state is automatically saved to and restored from localStorage.

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

## 💾 Cart Persistence & Notifications

### LocalStorage Persistence
- Cart data is automatically saved to browser's `localStorage` after every Redux action
- On app initialization, the cart is restored from `localStorage` — cart items survive page refreshes
- Implementation in `store.js` using `store.subscribe()` and in `cartSlice.js` with `loadCartFromStorage()`

### Toast Notifications
- Global notification system via `NotificationContext` 
- `useNotification()` hook provides `addNotification()` function for any component
- Green success toast displays product name when items are added to cart
- Auto-dismisses after 2.5 seconds with smooth animations
- Used in `ProductItem` and `ProductDetail` components

---

## 🎨 Styling

- Tailwind CSS utility-first styling with extended theme colors
- CSS variables for themeable colors (defined in `:root` in `index.css`)
- Tailwind config maps CSS variables to utility classes (`border-border`, `bg-primary`, etc.)
- Gradient brand accent (indigo → fuchsia → rose)
- Glass-blur sticky header
- Subtle fade / scale animations on entry & hover
- Toast notifications with smooth slide-in animation
- Responsive grid (`2 → 3 → 4` columns)

---

## 📤 Submission Checklist

- ✅ Built with **Vite**
- ✅ All required components present
- ✅ Redux with actions / reducers / selectors
- ✅ **LocalStorage persistence** for cart data
- ✅ **Notification system** with toast popups
- ✅ Dynamic React Router using `createBrowserRouter`
- ✅ `React.lazy` + `Suspense` for all route components
- ✅ Lazy-loaded images
- ✅ Responsive Tailwind styling
- ✅ Code is commented & indented consistently

---

## 📜 License

For educational use as part of the React assignment.
