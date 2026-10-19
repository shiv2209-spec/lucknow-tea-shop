import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ChaiCustomizer from "@/components/ChaiCustomizer";
import HeritageSection from "@/components/HeritageSection";
import LocationFooter from "@/components/LocationFooter";
import { Sparkles, Star, Quote, Orbit } from "lucide-react";

export default function Home() {
  const testimonials = [
    {
      name: "Commander Arya Sen",
      location: "Olympus Mons Base (Caldera Ridge)",
      comment:
        "After a grueling 6-hour EVA survey in the red dust, stepping into the pressurized dome and sipping hot Zafrani Kulhad Chai is heaven. The mitti smell grounds you when you are 200 million km away from Earth.",
      rating: 5,
      favorite: "Nawabi Zafrani Kulhad Chai",
    },
    {
      name: "Dr. Vikram Malhotra",
      location: "Valles Marineris Deep Canyon",
      comment:
        "The Kashmiri Noon Chai during our -60°C winter dust storms is essential fuel. Whisked with rich cream and roasted almonds, it brings pure warmth to our entire research unit.",
      rating: 5,
      favorite: "Kashmiri Noon Chai",
    },
    {
      name: "Lt. Zara Al-Mansoor",
      location: "Jezero Crater Botanical Complex",
      comment:
        "The Makhan Malai Bun Maska tastes identical to the heritage bakeries of Lucknow. Paired with Kadak Dum Chai, it has become our crew's favorite Sol evening ritual.",
      rating: 5,
      favorite: "Kadak Dum Chai & Bun Maska",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Mars Cultural Ticker */}
      <div className="bg-mars-950 text-parchment-100 py-3 overflow-hidden border-y border-mars-800">
        <div className="flex items-center space-x-8 animate-pulse text-xs tracking-wider uppercase font-semibold justify-center flex-wrap gap-y-2 px-4">
          <span className="flex items-center gap-1.5 text-mars-400">
            <Orbit className="w-3.5 h-3.5" /> 1.0 ATM Pressurized Brass Samovars
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 text-parchment-200">
            Solar-Fired Martian Red Regolith Kulhads
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 text-zafran-400">
            Authentic Earth-Bred Saffron & Spices
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 text-parchment-200">
            Open Sol 05:00 – Sol 23:30 at Olympus Mons
          </span>
        </div>
      </div>

      {/* Main Menu Section */}
      <MenuSection />

      {/* Interactive Chai Customizer */}
      <ChaiCustomizer />

      {/* Heritage & Earth-to-Mars Story */}
      <HeritageSection />

      {/* Colonist Testimonials */}
      <section className="py-20 bg-parchment-200/60 border-b border-mars-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-mars-100 text-mars-950 text-xs font-semibold uppercase tracking-wider mb-3">
              <Quote className="w-3.5 h-3.5 text-mars-600" />
              <span>Mars Colonist Reviews • मंगल वासियों की जुबानी</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-mars-950 mb-3">
              Words From The Red Planet&apos;s Pioneers
            </h2>
            <p className="text-xs sm:text-sm text-nawabi-800/70">
              Scientists, explorers, and colonists sharing their love for Awadhi tea on Mars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-mars-200/80 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-4 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="font-serif italic text-sm text-mars-950 leading-relaxed mb-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-mars-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-mars-950">{t.name}</h5>
                    <span className="text-[10px] text-gray-500">{t.location}</span>
                  </div>
                  <span className="text-[10px] bg-mars-50 text-mars-800 px-2 py-1 rounded-full font-semibold border border-mars-200">
                    {t.favorite}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outlets & Footer */}
      <LocationFooter />
    </div>
  );
}
