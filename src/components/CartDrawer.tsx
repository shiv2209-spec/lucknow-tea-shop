"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle2, Clock, Sparkles } from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [tokenNumber, setTokenNumber] = useState<number | null>(null);
  const [pickupOutlet, setPickupOutlet] = useState("Hazratganj Flagship");

  if (!isCartOpen) return null;

  const taxes = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + taxes;

  const handlePlaceOrder = () => {
    const randomToken = Math.floor(100 + Math.random() * 900);
    setTokenNumber(randomToken);
    setOrderPlaced(true);
  };

  const handleCloseAndReset = () => {
    if (orderPlaced) {
      clearCart();
      setOrderPlaced(false);
      setTokenNumber(null);
    }
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleCloseAndReset}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Slide-in panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-kulhad-200 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-kulhad-200 bg-parchment-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-kulhad-600 text-white rounded-lg">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-kulhad-950">
                  Aapki Chai Tokri (टोकरी)
                </h3>
                <span className="text-[11px] text-kulhad-700 font-medium">
                  Freshly brewed to order • Awadh Chai Khana
                </span>
              </div>
            </div>

            <button
              onClick={handleCloseAndReset}
              className="p-2 rounded-full hover:bg-kulhad-200/60 text-gray-600 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {orderPlaced ? (
              /* Success / Order confirmed state */
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-in zoom-in">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                    Chai Is On The Chulha!
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-kulhad-950">
                    Order Received!
                  </h4>
                  <p className="text-xs text-gray-600">
                    Shukriya! Your kulhads are being simmered at <strong>{pickupOutlet}</strong>.
                  </p>
                </div>

                {/* Token Badge */}
                <div className="bg-parchment-200 border-2 border-dashed border-kulhad-400 rounded-2xl p-4 my-4 max-w-xs mx-auto">
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider block">
                    Your Lucknow Chai Token
                  </span>
                  <span className="text-4xl font-extrabold text-kulhad-900 tracking-wider">
                    #{tokenNumber}
                  </span>
                  <div className="flex items-center justify-center space-x-1.5 text-xs text-zafran-800 font-semibold mt-2">
                    <Clock className="w-3.5 h-3.5 text-zafran-600" />
                    <span>Estimated time: 7-10 minutes</span>
                  </div>
                </div>

                <div className="bg-kulhad-50 p-3 rounded-xl text-xs text-kulhad-800 text-left">
                  <p className="font-bold flex items-center gap-1 text-kulhad-900">
                    <Sparkles className="w-3.5 h-3.5 text-zafran-600" />
                    Pickup Instructions:
                  </p>
                  <p className="mt-1 text-gray-600">
                    Show token #{tokenNumber} at the counter counter or your table. Your piping hot clay kulhad will be ready for you!
                  </p>
                </div>

                <button
                  onClick={handleCloseAndReset}
                  className="w-full mt-4 py-3 rounded-xl bg-kulhad-600 hover:bg-kulhad-700 text-white font-semibold text-xs shadow-md"
                >
                  Back to Menu
                </button>
              </div>
            ) : cart.length === 0 ? (
              /* Empty Cart State */
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-kulhad-100 text-kulhad-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                  🫖
                </div>
                <h4 className="font-serif text-lg font-bold text-kulhad-950">
                  Your Chai Tokri is Empty
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Pick from our signature Nawabi Zafrani Kulhad Chai, Kashmiri Noon Chai, or create your customized brew.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-kulhad-600 text-white text-xs font-semibold hover:bg-kulhad-700"
                >
                  Explore Specialties
                </button>
              </div>
            ) : (
              /* Item List */
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-3 p-3.5 bg-parchment-50 rounded-2xl border border-kulhad-200/80"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                    )}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-serif font-bold text-sm text-kulhad-950">
                            {item.name}
                          </h5>
                          {item.customizations && (
                            <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">
                              {item.customizations.join(" • ")}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        <span className="font-bold text-xs text-kulhad-900">
                          ₹{item.price * item.quantity}
                        </span>

                        <div className="flex items-center space-x-2 bg-white rounded-lg border border-kulhad-300 px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-600 hover:text-kulhad-700"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-600 hover:text-kulhad-700"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Outlet Selection for Pickup */}
                <div className="mt-6 p-3 bg-white rounded-xl border border-kulhad-200">
                  <label className="text-xs font-bold text-kulhad-900 block mb-1.5">
                    Select Pickup Outlet:
                  </label>
                  <select
                    value={pickupOutlet}
                    onChange={(e) => setPickupOutlet(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-kulhad-300 bg-parchment-50 focus:outline-none"
                  >
                    <option value="Hazratganj Flagship">Hazratganj Flagship (Mayfair)</option>
                    <option value="Old Chowk Heritage Kiosk">Old Chowk Heritage Kiosk</option>
                    <option value="Gomti Nagar Riverfront">Gomti Nagar Riverfront Lounge</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bill & Checkout */}
          {!orderPlaced && cart.length > 0 && (
            <div className="p-5 border-t border-kulhad-200 bg-parchment-100 space-y-3">
              <div className="space-y-1.5 text-xs text-nawabi-800">
                <div className="flex justify-between">
                  <span>Item Subtotal</span>
                  <span className="font-semibold">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Chinhat Baked Clay Kulhad</span>
                  <span className="text-emerald-700 font-semibold">FREE (On Us)</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>GST & Municipal Cess (5%)</span>
                  <span>₹{taxes}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-kulhad-950 pt-2 border-t border-kulhad-200">
                  <span>Grand Total</span>
                  <span className="text-zafran-700">₹{grandTotal}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full py-3.5 rounded-xl bg-kulhad-600 hover:bg-kulhad-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-kulhad-600/30 transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Simulate Order & Get Token (₹{grandTotal})
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
