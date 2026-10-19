"use client";

import React, { useState, useMemo } from "react";
import { TEA_MENU, CATEGORIES, MenuItem } from "@/data/tea-menu";
import { useCart } from "@/context/CartContext";
import { Clock, Plus, Check, Search, Flame, Sparkles } from "lucide-react";

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
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zafran-100 text-zafran-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zafran-600" />
            <span>Khas Dawat-e-Chai • ख़ास मेन्यू</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-kulhad-950 mb-4">
            Curated For The True Tea Connoisseur
          </h2>
          <p className="text-base text-nawabi-800/70">
            Every cup is brewed with whole whole-leaf Assam and Darjeeling estates, pure cow and buffalo milk, and grounded spices. Paired with timeless Lucknow bakery creations.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-kulhad-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chai, snacks, ingredients (kesar, elaichi, bun maska)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-kulhad-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-zafran-500 focus:border-transparent text-sm placeholder:text-gray-400"
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
                    ? "bg-kulhad-600 text-white shadow-md shadow-kulhad-600/30 scale-105"
                    : "bg-white text-kulhad-800 border border-kulhad-200 hover:bg-kulhad-100"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-kulhad-300">
            <p className="text-kulhad-700 font-medium">No delicacies match your search.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-zafran-600 font-semibold underline"
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
                  className="bg-white rounded-2xl border border-kulhad-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-kulhad-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    
                    {/* Tag badge */}
                    {item.tag && (
                      <span
                        className={`absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm ${
                          item.badgeColor || "bg-kulhad-600"
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
                      <div className="text-xs font-semibold text-zafran-700 tracking-wide mb-0.5">
                        {item.hindiName}
                      </div>
                      <h3 className="font-serif text-lg font-bold text-kulhad-950 group-hover:text-kulhad-600 transition-colors">
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
                            className="text-[10px] bg-parchment-200 text-kulhad-800 px-2 py-0.5 rounded-md font-medium"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom row: Price, Prep time, Add button */}
                    <div className="mt-5 pt-3 border-t border-kulhad-100 flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-kulhad-900">
                          ₹{item.price}
                        </div>
                        <div className="flex items-center text-[10px] text-gray-500 gap-1">
                          <Clock className="w-3 h-3 text-zafran-600" />
                          <span>{item.prepTime}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : "bg-kulhad-600 hover:bg-kulhad-700 text-white shadow-sm hover:scale-105 active:scale-95"
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
