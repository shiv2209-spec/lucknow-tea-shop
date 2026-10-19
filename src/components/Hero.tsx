"use client";

import React from "react";
import { Sparkles, Flame, Heart, ArrowRight, ShieldCheck, Orbit, Globe2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Hero() {
  const { addToCart } = useCart();

  const handleOrderHeroSpecial = () => {
    addToCart({
      id: "zafrani-dum-chai",
      name: "Nawabi Zafrani Kulhad Chai (Mars Edition)",
      price: 65,
      vessel: "Martian Regolith Kulhad",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
      customizations: ["Kashmiri Saffron", "Crushed Elaichi", "Martian Red Clay Kulhad"],
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-parchment-100 via-mars-50 to-parchment-100 py-16 md:py-24 border-b border-mars-200/50">
      {/* Background Martian Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-mars-400/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-zafran-400/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mars-100 border border-mars-300 text-mars-950 text-xs font-semibold tracking-wide">
              <Orbit className="w-3.5 h-3.5 text-mars-600 animate-spin" />
              <span>THE FIRST AWADHI TEA HOUSE ON MARS • ESTD. SOL 2054</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-mars-950 font-bold leading-tight">
              नवाबी तहज़ीब, मंगल की मिट्टी,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mars-600 via-zafran-600 to-mars-800">
                और एक प्याली चाय
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-nawabi-800/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Muskuraiye, aap Mars par hain! Bringing the royal soul of Awadh across 225 million kilometers. Exact same secret family recipes, slow-simmered in 1.0 ATM pressurized brass samovars and poured into solar-baked Martian regolith clay kulhads under the glow of Phobos and Deimos.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 text-xs font-medium text-mars-950">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-mars-200">
                <Flame className="w-4 h-4 text-mars-600 shrink-0" />
                <span>0.38g Low-Gravity Dum</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-mars-200">
                <Sparkles className="w-4 h-4 text-zafran-600 shrink-0" />
                <span>Kashmiri Saffron</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-mars-200">
                <Heart className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Colony Makhan Malai</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-mars-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Martian Red Regolith</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-mars-600 hover:bg-mars-700 text-white font-semibold text-sm shadow-lg shadow-mars-600/30 transition hover:-translate-y-0.5"
              >
                <span>Explore Martian Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#customizer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white hover:bg-mars-50 border-2 border-mars-300 text-mars-950 font-semibold text-sm transition hover:-translate-y-0.5"
              >
                <span>Build Custom Brew</span>
              </a>
            </div>

            {/* Social Proof Pill */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-xs text-nawabi-800/70 pt-2">
              <div className="flex -space-x-1">
                {["🚀", "🪐", "☕", "👨‍🚀"].map((icon, idx) => (
                  <div
                    key={idx}
                    className="w-6 h-6 rounded-full bg-mars-700 text-white flex items-center justify-center text-[10px] border border-white"
                  >
                    {icon}
                  </div>
                ))}
              </div>
              <div>
                <span className="font-bold text-mars-950">4.98 / 5.0 Rating</span> from 1,200+ Martian Colonists & Scientists
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-mars-500 to-zafran-500 rounded-3xl transform rotate-3 scale-105 opacity-25 blur-xl" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-mars-200/80 overflow-hidden">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800"
                    alt="Authentic Zafrani Kulhad Chai on Mars"
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Steaming Floating Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-mars-950">Piping Hot at Olympus Mons Dome</span>
                  </div>

                  {/* Bottom Image Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase font-bold tracking-wider text-zafran-300">
                          Signature Mars Colony Brew
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
                <div className="mt-4 p-2 bg-mars-50 rounded-xl flex items-center justify-between border border-mars-100">
                  <div className="text-xs text-mars-900">
                    <span className="font-bold">Infused with:</span> Pampore Saffron & Crushed Cardamom
                  </div>
                  <button
                    onClick={handleOrderHeroSpecial}
                    className="px-4 py-2 bg-mars-600 hover:bg-mars-700 text-white rounded-lg text-xs font-semibold shadow-sm transition hover:scale-105 active:scale-95"
                  >
                    Quick Order +
                  </button>
                </div>
              </div>

              {/* Floating Testimonial Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white border border-mars-200 shadow-xl rounded-2xl p-3 items-center space-x-3 max-w-xs animate-in fade-in duration-500">
                <div className="w-10 h-10 rounded-full bg-mars-100 flex items-center justify-center text-mars-700 font-bold shrink-0">
                  🪐
                </div>
                <div className="text-xs">
                  <p className="font-medium text-mars-950">
                    &ldquo;Watching the blue Martian sunset with a warm mitti kulhad feels like home.&rdquo;
                  </p>
                  <p className="text-[10px] text-nawabi-800/60 font-semibold">— Commander Arya, Olympus Base</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
