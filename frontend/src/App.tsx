import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { Product, CartItem } from "./types";
import { productApi, cartApi } from "./services/api";

// Navigation Component
const Navigation: React.FC<{ cartItemCount: number }> = ({ cartItemCount }) => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-soft border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">TechStore</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/"
                  ? "text-primary-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Products Page Component
const ProductsPage: React.FC<{ onAddToCart: (productId: number) => void }> = ({
  onAddToCart,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi.getAll();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to TechStore</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Discover the latest in technology with our premium selection of
              gadgets and electronics.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Cart Page Component
const CartPage: React.FC<{
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: number, quantity: number) => void;
  onRemoveItem: (cartItemId: number) => void;
}> = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Cart
        cartItems={cartItems}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={onRemoveItem}
      />
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Load cart items on app start
  useEffect(() => {
    const loadCart = async () => {
      try {
        const items = await cartApi.getCart();
        setCartItems(items);
      } catch (err) {
        console.error("Failed to load cart:", err);
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, []);

  const handleAddToCart = async (productId: number) => {
    try {
      await cartApi.addToCart(productId, 1);
      // Reload cart items
      const items = await cartApi.getCart();
      setCartItems(items);
    } catch (err) {
      console.error("Failed to add to cart:", err);
    }
  };

  const handleUpdateQuantity = async (cartItemId: number, quantity: number) => {
    try {
      if (quantity === 0) {
        await cartApi.removeFromCart(cartItemId);
      } else {
        await cartApi.updateCart(cartItemId, quantity);
      }
      // Reload cart items
      const items = await cartApi.getCart();
      setCartItems(items);
    } catch (err) {
      console.error("Failed to update cart:", err);
    }
  };

  const handleRemoveItem = async (cartItemId: number) => {
    try {
      await cartApi.removeFromCart(cartItemId);
      // Reload cart items
      const items = await cartApi.getCart();
      setCartItems(items);
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navigation cartItemCount={cartItems.length} />
        <Routes>
          <Route
            path="/"
            element={<ProductsPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
