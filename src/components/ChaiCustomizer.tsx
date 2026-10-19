"use client";

import React, { useState } from "react";
import { Sparkles, Check, Flame, ShoppingBag, RotateCcw } from "lucide-react";
import { useCart } from "@/context/CartContext";

const BASES = [
  { id: "kadak", name: "Kadak Assam CTC", price: 40, desc: "Bold, strong, dark amber liquor." },
  { id: "kesar", name: "Kashmiri Zafran Leaf", price: 65, desc: "Gentle floral notes with rich saffron essence." },
  { id: "noon", name: "Kashmiri Noon Chai", price: 80, desc: "Pink salted traditional winter tea." },
  { id: "sulaimani", name: "Awadhi Sulaimani Spiced", price: 45, desc: "Light citrusy black tea with mint." },
];

const MILKS = [
  { id: "buffalo", name: "Rich Buffalo Milk", extra: 0, tag: "Traditional Choice" },
  { id: "cow", name: "Light Cow Milk", extra: 0, tag: "Balanced" },
  { id: "almond", name: "Artisanal Almond Milk", extra: 25, tag: "Dairy Free" },
  { id: "none", name: "No Milk (Black / Decoction)", extra: 0, tag: "Pure Leaf" },
];

const SWEETENERS = [
  { id: "khand", name: "Desi Khand (Raw Sugar)", extra: 0 },
  { id: "gur", name: "Nawabi Desi Gur (Jaggery)", extra: 10 },
  { id: "honey", name: "Wild Forest Honey", extra: 15 },
  { id: "none", name: "Fika (Zero Sugar)", extra: 0 },
];

const SPICES = [
  { id: "adrak", name: "Fresh Pounded Ginger (अदरक)", price: 5 },
  { id: "elaichi", name: "Choti Elaichi (इलायची)", price: 10 },
  { id: "kesar", name: "Kashmiri Saffron (केसर)", price: 25 },
  { id: "laung-dalchini", name: "Clove & Cinnamon (लौंग-दालचीनी)", price: 10 },
  { id: "tulsi", name: "Holy Basil & Mint (तुलसी-पुदीना)", price: 5 },
];

const VESSELS = [
  { id: "kulhad", name: "Traditional Baked Clay Kulhad (कुल्हड़)", price: 5, desc: "Adds authentic earthy fragrance" },
  { id: "brass", name: "Classic Brass Glass (कांसा ग्लास)", price: 0, desc: "Classic royal Awadh style" },
  { id: "togo", name: "Sealed Clay To-Go Cup", price: 10, desc: "Thermal sealed for take-away" },
];

export default function ChaiCustomizer() {
  const [selectedBase, setSelectedBase] = useState(BASES[0]);
  const [selectedMilk, setSelectedMilk] = useState(MILKS[0]);
  const [selectedSweetener, setSelectedSweetener] = useState(SWEETENERS[0]);
  const [selectedSpices, setSelectedSpices] = useState<string[]>(["adrak", "elaichi"]);
  const [selectedVessel, setSelectedVessel] = useState(VESSELS[0]);
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  const toggleSpice = (spiceId: string) => {
    setSelectedSpices((prev) =>
      prev.includes(spiceId) ? prev.filter((s) => s !== spiceId) : [...prev, spiceId]
    );
  };

  const spiceTotal = selectedSpices.reduce((sum, sId) => {
    const sp = SPICES.find((item) => item.id === sId);
    return sum + (sp?.price || 0);
  }, 0);

  const totalPrice =
    selectedBase.price +
    selectedMilk.extra +
    selectedSweetener.extra +
    spiceTotal +
    selectedVessel.price;

  const handleReset = () => {
    setSelectedBase(BASES[0]);
    setSelectedMilk(MILKS[0]);
    setSelectedSweetener(SWEETENERS[0]);
    setSelectedSpices(["adrak", "elaichi"]);
    setSelectedVessel(VESSELS[0]);
  };

  const handleAddToCart = () => {
    const spiceNames = selectedSpices
      .map((s) => SPICES.find((item) => item.id === s)?.name.split(" ")[0])
      .filter(Boolean);

    addToCart({
      id: `custom-chai-${Date.now()}`,
      name: `Custom ${selectedBase.name}`,
      price: totalPrice,
      vessel: selectedVessel.name,
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
      customizations: [
        selectedMilk.name,
        selectedSweetener.name,
        spiceNames.length > 0 ? `Spices: ${spiceNames.join(", ")}` : "No extra spices",
        selectedVessel.name,
      ],
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="customizer" className="py-20 bg-parchment-200/50 border-y border-kulhad-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-kulhad-100 text-kulhad-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zafran-600" />
            <span>Apni Pasand Ki Chai • अपनी चाय</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-kulhad-950 mb-3">
            The Interactive Chai Customizer
          </h2>
          <p className="text-sm sm:text-base text-nawabi-800/70">
            Every Lucknawi has their personal philosophy of chai. Tailor your tea leaf base, milk density, desi sweeteners, hand-ground spices, and earthen cup.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-kulhad-200 shadow-sm">
            
            {/* Step 1: Base Tea */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-kulhad-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-kulhad-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                  Select Tea Leaf Base (चाय की पत्ती)
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BASES.map((base) => {
                  const isSelected = selectedBase.id === base.id;
                  return (
                    <button
                      key={base.id}
                      type="button"
                      onClick={() => setSelectedBase(base)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? "border-kulhad-600 bg-kulhad-50/70 ring-2 ring-kulhad-600/20"
                          : "border-gray-200 hover:border-kulhad-300 bg-white"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-kulhad-950">{base.name}</span>
                        <span className="text-xs font-bold text-kulhad-600">₹{base.price}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1">{base.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Milk Selection */}
            <div>
              <label className="text-sm font-bold text-kulhad-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-kulhad-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                Choose Your Milk Blend (दूध का चुनाव)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {MILKS.map((milk) => {
                  const isSelected = selectedMilk.id === milk.id;
                  return (
                    <button
                      key={milk.id}
                      type="button"
                      onClick={() => setSelectedMilk(milk)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all ${
                        isSelected
                          ? "border-kulhad-600 bg-kulhad-50/70 font-semibold text-kulhad-950 ring-1 ring-kulhad-600"
                          : "border-gray-200 text-gray-700 hover:border-kulhad-300"
                      }`}
                    >
                      <div className="font-bold">{milk.name}</div>
                      <div className="text-[10px] text-kulhad-600 mt-1">
                        {milk.extra > 0 ? `+₹${milk.extra}` : "Included"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Sweetener */}
            <div>
              <label className="text-sm font-bold text-kulhad-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-kulhad-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                Select Sweetener (मिठास)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SWEETENERS.map((sw) => {
                  const isSelected = selectedSweetener.id === sw.id;
                  return (
                    <button
                      key={sw.id}
                      type="button"
                      onClick={() => setSelectedSweetener(sw)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all ${
                        isSelected
                          ? "border-kulhad-600 bg-kulhad-50/70 font-semibold text-kulhad-950 ring-1 ring-kulhad-600"
                          : "border-gray-200 text-gray-700 hover:border-kulhad-300"
                      }`}
                    >
                      <div className="font-bold">{sw.name}</div>
                      <div className="text-[10px] text-kulhad-600 mt-1">
                        {sw.extra > 0 ? `+₹${sw.extra}` : "Included"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Spices (Multi-select) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-kulhad-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-kulhad-600 text-white text-xs flex items-center justify-center font-bold">4</span>
                  Pounded Awadhi Masalas (मसाले - बहुविकल्प)
                </label>
                <span className="text-[11px] text-gray-500">Pick any combination</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {SPICES.map((spice) => {
                  const isChecked = selectedSpices.includes(spice.id);
                  return (
                    <button
                      key={spice.id}
                      type="button"
                      onClick={() => toggleSpice(spice.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                        isChecked
                          ? "border-zafran-600 bg-zafran-50 text-zafran-950 font-bold"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? "bg-zafran-600 border-zafran-600 text-white"
                              : "border-gray-300"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{spice.name}</span>
                      </div>
                      <span className="text-[11px] text-zafran-800 font-semibold">
                        +₹{spice.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Vessel */}
            <div>
              <label className="text-sm font-bold text-kulhad-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-kulhad-600 text-white text-xs flex items-center justify-center font-bold">5</span>
                Drinking Vessel (बर्तन)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VESSELS.map((v) => {
                  const isSelected = selectedVessel.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVessel(v)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? "border-kulhad-600 bg-kulhad-50/70 ring-1 ring-kulhad-600"
                          : "border-gray-200 hover:border-kulhad-300 bg-white"
                      }`}
                    >
                      <div className="text-xs font-bold text-kulhad-950">{v.name}</div>
                      <div className="text-[11px] text-gray-500 mt-1">{v.desc}</div>
                      <div className="text-[10px] text-kulhad-700 font-bold mt-2">
                        {v.price > 0 ? `+₹${v.price}` : "Standard"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-Time Live Preview & Order Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-gradient-to-br from-kulhad-900 via-kulhad-950 to-nawabi-950 text-parchment-100 p-6 rounded-3xl shadow-xl border border-kulhad-700/50">
              
              <div className="flex items-center justify-between pb-4 border-b border-kulhad-800">
                <div className="flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-zafran-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zafran-300">
                    Your Personalized Brew
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  title="Reset customizer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Cup Visual Mock */}
              <div className="my-6 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-kulhad-600 to-zafran-500 flex items-center justify-center text-4xl shadow-lg border-4 border-kulhad-800/80">
                  ☕
                </div>
                <h3 className="font-serif text-xl font-bold mt-3 text-parchment-50">
                  {selectedBase.name}
                </h3>
                <p className="text-xs text-zafran-300 mt-0.5">
                  Served in {selectedVessel.name.split(" ")[0]}
                </p>
              </div>

              {/* Summary Items */}
              <div className="space-y-2 text-xs py-3 border-y border-kulhad-800 text-parchment-200">
                <div className="flex justify-between">
                  <span className="text-gray-400">Base Leaf:</span>
                  <span className="font-medium text-white">{selectedBase.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Milk:</span>
                  <span className="font-medium text-white">{selectedMilk.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sweetness:</span>
                  <span className="font-medium text-white">{selectedSweetener.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Spices:</span>
                  <span className="font-medium text-white text-right max-w-[160px] truncate">
                    {selectedSpices.length > 0
                      ? selectedSpices.map((s) => SPICES.find((i) => i.id === s)?.name.split(" ")[0]).join(", ")
                      : "None"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Vessel:</span>
                  <span className="font-medium text-white">{selectedVessel.name.split("(")[0]}</span>
                </div>
              </div>

              {/* Pricing breakdown */}
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">Total Cup Price</span>
                  <span className="text-3xl font-extrabold text-zafran-400">₹{totalPrice}</span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`px-6 py-3.5 rounded-full font-bold text-xs flex items-center space-x-2 transition-all ${
                    added
                      ? "bg-emerald-600 text-white"
                      : "bg-zafran-500 hover:bg-zafran-600 text-kulhad-950 shadow-lg shadow-zafran-500/20 hover:scale-105 active:scale-95"
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Brew Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Order This Cup</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Note box */}
            <div className="bg-white p-4 rounded-2xl border border-kulhad-200 text-xs text-nawabi-800/80">
              <span className="font-bold text-kulhad-800">Fresh Clay Guarantee:</span> Each clay kulhad is baked in terracotta kilns of Chinhat, Lucknow, completely biodegradable and unglazed for pure mineral aroma.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
