"use client";

import React, { useState, useMemo } from "react";
import { TEA_MENU, CATEGORIES, MenuItem } from "@/data/tea-menu";
import { useCart } from "@/context/CartContext";
import { Clock, Plus, Check, Search, Flame, Sparkles, Orbit } from "lucide-react";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});
  const { addToCart } = useCart();

  const filteredItems = useMemo(() => {
    return TEA_MENU.filter((item) => {
      const matchesCategory =
        activeCategory === "all" ? true : item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.hindiName.includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some((ing) =>
          ing.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAdd = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      vessel: item.vessel,
      image: item.image,
      customizations: [item.vessel],
    });

    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 bg-parchment-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-mars-100 text-mars-950 text-xs font-semibold tracking-wider uppercase mb-3">
            <Orbit className="w-3.5 h-3.5 text-mars-600 animate-spin" />
            <span>Khas Dawat-e-Chai on Mars • ख़ास मेन्यू</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-mars-950 mb-4">
            Curated For The Interplanetary Connoisseur
          </h2>
          <p className="text-base text-nawabi-800/70">
            Exact same revered Awadhi recipes brought from Earth. Brewed inside pressurized 1.0 ATM chambers with whole-leaf tea, rich dairy, hand-ground spices, and served in solar-fired Martian regolith clay kulhads.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-mars-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chai, snacks, ingredients (kesar, elaichi, bun maska, noon chai)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-mars-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-mars-500 focus:border-transparent text-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-mars-600 text-white shadow-md shadow-mars-600/30 scale-105"
                    : "bg-white text-mars-900 border border-mars-200 hover:bg-mars-100"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-mars-300">
            <p className="text-mars-700 font-medium">No rations match your search query.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-mars-600 font-semibold underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const isAdded = addedIds[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-mars-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-mars-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    
                    {/* Tag badge */}
                    {item.tag && (
                      <span
                        className={`absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm ${
                          item.badgeColor || "bg-mars-600"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}

                    {/* Spicy Badge */}
                    {item.isSpicy && (
                      <span className="absolute top-3 right-3 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}

                    {/* Vessel Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-parchment-100 text-[10px] font-medium px-2 py-1 rounded-md">
                      {item.vessel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Hindi & English Name */}
                      <div className="text-xs font-semibold text-mars-700 tracking-wide mb-0.5">
                        {item.hindiName}
                      </div>
                      <h3 className="font-serif text-lg font-bold text-mars-950 group-hover:text-mars-600 transition-colors">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-nawabi-800/70 mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Ingredients chips */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.ingredients.map((ing, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-parchment-200 text-mars-900 px-2 py-0.5 rounded-md font-medium"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom row: Price, Prep time, Add button */}
                    <div className="mt-5 pt-3 border-t border-mars-100 flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-mars-950">
                          ₹{item.price}
                        </div>
                        <div className="flex items-center text-[10px] text-gray-500 gap-1">
                          <Clock className="w-3 h-3 text-mars-600" />
                          <span>{item.prepTime}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : "bg-mars-600 hover:bg-mars-700 text-white shadow-sm hover:scale-105 active:scale-95"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Order</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
