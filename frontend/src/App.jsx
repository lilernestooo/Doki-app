import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AccountPage from './pages/AccountPage';
import AboutUsPage from './pages/AboutUsPage';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Context
import { CartProvider } from './context/CartContext';

function LayoutWrapper({ children }) {
  const location = useLocation();
  const isAuthPage = ["/", "/login", "/register"].includes(location.pathname);

  return (
    // We use bg-white on the root to ensure no gray bars appear on ultra-wide screens
    <div className="min-h-screen flex flex-col font-sans bg-white">
      
      {/* Global Navbar renders once here for all non-auth pages */}
      {!isAuthPage && <Navbar />}

      {/* Removed 'max-w-7xl' and 'mx-auto'. 
          The main content now takes 100% of the screen width.
      */}
      <main className="flex-grow w-full overflow-x-hidden">
        {children}
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </CartProvider>
  );
}

export default App;