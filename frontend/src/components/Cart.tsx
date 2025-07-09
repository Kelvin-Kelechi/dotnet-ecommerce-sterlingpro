import React from "react";
import type { CartItem } from "../types";
import { FaBagShopping } from "react-icons/fa6";

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: number, quantity: number) => void;
  onRemoveItem: (cartItemId: number) => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <FaBagShopping className="w-6 h-6" />
            Shopping Cart
          </h2>
        </div>

        <div className="p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <FaBagShopping className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg font-medium">
                Your cart is empty
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Add some products to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.product?.imageUrl}
                      alt={item.product?.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {item.product?.name}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      ${item.product?.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-white border border-gray-200 rounded-lg">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.id,
                            Math.max(0, item.quantity - 1)
                          )
                        }
                        className="p-2 hover:bg-gray-50 transition-colors rounded-l-lg"
                        disabled={item.quantity <= 1}
                      >
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="px-4 py-2 text-center font-semibold text-gray-900 min-w-[3rem]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 hover:bg-gray-50 transition-colors rounded-r-lg"
                      >
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="btn-danger p-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Total</h3>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-600">
                  ${total.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            <button className="w-full mt-4 btn-primary py-3 text-lg font-semibold">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
