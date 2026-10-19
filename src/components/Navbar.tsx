"use client";

import React, { useState } from "react";
import { Coffee, ShoppingBag, Calendar, Menu, X, Clock, MapPin, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen, setIsReservationOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-parchment-100/95 backdrop-blur-md border-b border-kulhad-200/60 shadow-sm transition-all">
      {/* Top Heritage Notice Bar */}
      <div className="bg-gradient-to-r from-kulhad-900 via-zafran-900 to-kulhad-900 text-parchment-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-zafran-400 animate-pulse" />
            <span className="font-medium tracking-wide">
              मुस्कुराइए, आप लखनऊ में हैं — Serving authentic Awadhi Kulhad Chai since 1954
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-parchment-200">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-zafran-400" /> 6:00 AM – 11:45 PM
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-zafran-400" /> Mayfair, Hazratganj
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kulhad-600 to-zafran-600 flex items-center justify-center text-white shadow-md shadow-kulhad-600/30 group-hover:scale-105 transition-transform">
              <Coffee className="w-6 h-6 text-zafran-100" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-serif font-bold text-2xl tracking-tight text-kulhad-900">
                  अवध Chai Khana
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-zafran-100 text-zafran-800 border border-zafran-300">
                  LKO
                </span>
              </div>
              <span className="text-xs text-kulhad-600 tracking-wider font-medium">
                HAZRATGANJ • CHOWK • GOMTI NAGAR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-nawabi-800">
            <a
              href="#menu"
              className="hover:text-kulhad-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-kulhad-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Khas Menu (मेन्यू)
            </a>
            <a
              href="#customizer"
              className="hover:text-kulhad-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-kulhad-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Chai Builder (अपनी चाय)
            </a>
            <a
              href="#heritage"
              className="hover:text-kulhad-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-kulhad-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Tehzeeb & Story (दास्तान)
            </a>
            <a
              href="#outlets"
              className="hover:text-kulhad-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-kulhad-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Outlets (ठिकाने)
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Table Reservation Button */}
            <button
              onClick={() => setIsReservationOpen(true)}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full border border-kulhad-400 text-kulhad-800 text-xs font-semibold hover:bg-kulhad-50 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-kulhad-600" />
              <span>Book a Baithak</span>
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Cart"
              className="relative p-2.5 rounded-full bg-kulhad-600 text-white hover:bg-kulhad-700 transition shadow-sm hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zafran-500 text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-kulhad-800 hover:bg-kulhad-100 transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-parchment-100 border-b border-kulhad-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-kulhad-900 hover:bg-kulhad-50"
          >
            Khas Menu (मेन्यू)
          </a>
          <a
            href="#customizer"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-kulhad-900 hover:bg-kulhad-50"
          >
            Chai Builder (अपनी चाय)
          </a>
          <a
            href="#heritage"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-kulhad-900 hover:bg-kulhad-50"
          >
            Tehzeeb & Story (दास्तान)
          </a>
          <a
            href="#outlets"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-kulhad-900 hover:bg-kulhad-50"
          >
            Outlets (ठिकाने)
          </a>
          <div className="pt-2 border-t border-kulhad-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsReservationOpen(true);
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-kulhad-700 text-white font-medium text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Baithak (Table)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
