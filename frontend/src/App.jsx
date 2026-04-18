import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Pages
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AccountPage from './pages/AccountPage';
import AboutUsPage from './pages/AboutUsPage';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageSpinner from './components/PageSpinner';

// Context
import { CartProvider } from './context/CartContext';

// Auth pages — no navbar/footer
const AUTH_PATHS = ['/', '/login', '/register'];

// Spinner hook
function usePageTransition() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading;
}

// Layout wrapper
function LayoutWrapper({ children }) {
  const location = useLocation();
  const loading = usePageTransition();
  const isAuth = AUTH_PATHS.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">

      {loading && <PageSpinner />}

      {!isAuth && <Navbar />}

      <main className="flex-grow w-full overflow-x-hidden">
        {children}
      </main>

      {!isAuth && <Footer />}
    </div>
  );
}

// App
function App() {
  return (
    <CartProvider>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </LayoutWrapper>
    </CartProvider>
  );
}

export default App;