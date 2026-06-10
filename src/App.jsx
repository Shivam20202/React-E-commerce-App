// App: the root of the ShoppyGlobe SPA.
// Wraps the app in the Redux Provider and a React Router instance.
// All non-Header components are lazy-loaded via React.lazy + Suspense.
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { store } from "./redux/store";
import { NotificationProvider } from "./context/NotificationContext";
import Toast from "./components/Toast";
import Header from "./components/Header";

// Lazy-loaded route components for code-splitting
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ShoppyGlobe — built with React, Redux & Vite.
      </footer>
    </div>
  );
}

// Dynamic, data-router setup with createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProductList /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <NotificationProvider>
        <Toast />
        <RouterProvider router={router} />
      </NotificationProvider>
    </Provider>
  );
}
