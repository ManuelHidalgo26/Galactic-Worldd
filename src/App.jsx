
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const HomePage = lazy(() => import("@/pages/ecommerce/HomePage"));
const ShopPage = lazy(() => import("@/pages/ecommerce/ShopPage"));
const ProductPage = lazy(() => import("@/pages/ecommerce/ProductPage"));
const CartPage = lazy(() => import("@/pages/ecommerce/CartPage"));
const CheckoutPage = lazy(() => import("@/pages/ecommerce/CheckoutPage"));
const AboutPage = lazy(() => import("@/pages/ecommerce/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ecommerce/ContactPage"));
const OrderSuccessPage = lazy(() => import("@/pages/ecommerce/OrderSuccessPage"));
const BlogPage = lazy(() => import("@/pages/ecommerce/BlogPage"));
const WishlistPage = lazy(() => import("@/pages/ecommerce/WishlistPage"));


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex justify-center items-center h-[calc(100vh-8rem)]"><LoadingSpinner size="lg"/></div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tienda" element={<ShopPage />} />
              <Route path="/tienda/:productId" element={<ProductPage />} />
              <Route path="/carrito" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/sobre-nosotros" element={<AboutPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/pedido-exitoso" element={<OrderSuccessPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/lista-deseos" element={<WishlistPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
