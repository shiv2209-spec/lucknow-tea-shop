"use client";

import React from "react";
import { Sparkles, Flame, Heart, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Hero() {
  const { addToCart } = useCart();

  const handleOrderHeroSpecial = () => {
    addToCart({
      id: "zafrani-dum-chai",
      name: "Nawabi Zafrani Kulhad Chai",
      price: 65,
      vessel: "Mitti Kulhad",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
      customizations: ["Kashmiri Saffron", "Crushed Elaichi", "Smoky Clay Kulhad"],
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-parchment-100 via-parchment-200 to-parchment-100 py-16 md:py-24 border-b border-kulhad-200/50">
      {/* Background Subtle Watermark */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-zafran-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-kulhad-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-kulhad-100 border border-kulhad-300 text-kulhad-900 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-zafran-600" />
              <span>THE ROYAL AWADHI TEA HOUSE • ESTD. 1954</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-kulhad-950 font-bold leading-tight">
              नवाबी तहज़ीब, मिट्टी की खुशबू,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kulhad-600 via-zafran-600 to-kulhad-800">
                और एक प्याली चाय
              </span>
            </h1>

            {/* Subheading in English with Awadhi flavor */}
            <p className="text-base sm:text-lg text-nawabi-800/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From slow-simmered Kashmiri Noon Chai at dawn in Old Chowk to royal Zafrani Dum Chai during evening <em>Ganjing</em> at Hazratganj. Freshly brewed in brass samovars and served piping hot in unglazed terracotta kulhads.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 text-xs font-medium text-kulhad-900">
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-kulhad-200">
                <Flame className="w-4 h-4 text-kulhad-600 shrink-0" />
                <span>Smoky Dum Brewed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-kulhad-200">
                <Award className="w-4 h-4 text-zafran-600 shrink-0" />
                <span>Kashmiri Saffron</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-kulhad-200">
                <Heart className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Makkhan Malai</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-kulhad-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Desi Clay</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-kulhad-600 hover:bg-kulhad-700 text-white font-semibold text-sm shadow-lg shadow-kulhad-600/30 transition hover:-translate-y-0.5"
              >
                <span>Explore Lucknow Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#customizer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white hover:bg-parchment-50 border-2 border-kulhad-300 text-kulhad-900 font-semibold text-sm transition hover:-translate-y-0.5"
              >
                <span>Customize Your Chai</span>
              </a>
            </div>

            {/* Social Proof Pill */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-xs text-nawabi-800/70 pt-2">
              <div className="flex -space-x-1">
                {["L", "A", "K", "N"].map((char, idx) => (
                  <div
                    key={idx}
                    className="w-6 h-6 rounded-full bg-kulhad-700 text-white flex items-center justify-center text-[10px] font-bold border border-white"
                  >
                    {char}
                  </div>
                ))}
              </div>
              <div>
                <span className="font-bold text-kulhad-900">4.9 / 5.0 Rating</span> from 15,000+ Lucknow chai lovers
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-kulhad-500 to-zafran-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-kulhad-200/80 overflow-hidden">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800"
                    alt="Authentic Lucknow Zafrani Kulhad Chai"
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                  />
                  
                  {/* Saffron Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Steaming Floating Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-kulhad-900">Piping Hot in Hazratganj</span>
                  </div>

                  {/* Bottom Image Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase font-bold tracking-wider text-zafran-300">
                          Signature Awadhi Brew
                        </span>
                        <h3 className="font-serif text-xl font-bold">Nawabi Zafrani Kulhad Chai</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-parchment-200">Only</span>
                        <div className="text-2xl font-bold text-zafran-400">₹65</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Sub-actions */}
                <div className="mt-4 p-2 bg-parchment-100 rounded-xl flex items-center justify-between">
                  <div className="text-xs text-kulhad-800">
                    <span className="font-bold">Infused with:</span> Pampore Saffron & Elaichi
                  </div>
                  <button
                    onClick={handleOrderHeroSpecial}
                    className="px-4 py-2 bg-zafran-600 hover:bg-zafran-700 text-white rounded-lg text-xs font-semibold shadow-sm transition hover:scale-105 active:scale-95"
                  >
                    Quick Order +
                  </button>
                </div>
              </div>

              {/* Floating Testimonial Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white border border-kulhad-200 shadow-xl rounded-2xl p-3 items-center space-x-3 max-w-xs animate-in fade-in duration-500">
                <div className="w-10 h-10 rounded-full bg-kulhad-100 flex items-center justify-center text-kulhad-700 font-bold shrink-0">
                  ☕
                </div>
                <div className="text-xs">
                  <p className="font-medium text-kulhad-900">
                    &ldquo;The best kulhad chai after an evening stroll in Hazratganj!&rdquo;
                  </p>
                  <p className="text-[10px] text-nawabi-800/60 font-semibold">— Dr. Tariq, Hazratganj</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
