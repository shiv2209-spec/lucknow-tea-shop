import React from "react";
import { BookOpen, MapPin, Feather, Sparkles, Orbit, Rocket } from "lucide-react";

export default function HeritageSection() {
  return (
    <section id="heritage" className="py-24 bg-parchment-100 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-mars-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-mars-100 text-mars-950 text-xs font-semibold tracking-wider uppercase mb-3">
            <Feather className="w-3.5 h-3.5 text-mars-600" />
            <span>Daastan-e-Mars • धरती से मंगल तक की दास्तान</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-mars-950 mb-4">
            How Lucknow&apos;s Royal Chai Reached the Red Planet
          </h2>
          <p className="text-sm sm:text-base text-nawabi-800/80 leading-relaxed">
            In 2054, when the first colony domes rose upon the red dunes of Mars, one sacred treasure traveled aboard the colony starship: a 300-year-old Lucknowi brass samovar and the timeless recipes of Awadhi tea.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 border border-mars-200/80 shadow-md hover:shadow-xl transition group">
            <div className="h-44 w-full rounded-2xl overflow-hidden mb-5">
              <img
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800"
                alt="Olympus Mons Evening Chai"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-mars-700 uppercase tracking-wider mb-1">
              <Rocket className="w-3.5 h-3.5" />
              <span>Interplanetary Heritage</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-mars-950 mb-2">
              The Starship Samovars
            </h3>
            <p className="text-xs text-nawabi-800/70 leading-relaxed">
              When pioneers set foot in the red dust, they discovered that high-tech food synthesizers could never replicate the soul of an Awadhi baithak. The founders unpacked heirloom hammered-copper samovars, recreating slow-simmered dum chai in pressurized 1.0 ATM dome environments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 border border-mars-200/80 shadow-md hover:shadow-xl transition group">
            <div className="h-44 w-full rounded-2xl overflow-hidden mb-5">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800"
                alt="Martian Regolith Pottery"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-mars-700 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Red Regolith Pottery</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-mars-950 mb-2">
              The Martian Mitti Kulhad
            </h3>
            <p className="text-xs text-nawabi-800/70 leading-relaxed">
              Rather than ceramic mugs or plastic cups, our potters fired the mineral-rich iron clay of Jezero Crater in concentrated solar kilns. The result is an authentic terracotta kulhad that imparts the intoxicating fragrance of rain on soil across a dry Martian world.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 border border-mars-200/80 shadow-md hover:shadow-xl transition group">
            <div className="h-44 w-full rounded-2xl overflow-hidden mb-5">
              <img
                src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800"
                alt="Sub-zero Kashmiri Noon Chai"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-mars-700 uppercase tracking-wider mb-1">
              <Orbit className="w-3.5 h-3.5" />
              <span>Freezing Nights</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-mars-950 mb-2">
              Pink Chai in Freezing Sols
            </h3>
            <p className="text-xs text-nawabi-800/70 leading-relaxed">
              During bone-chilling Martian winters where temperatures plunge to -60°C, the pink salted Kashmiri Noon Chai with roasted pistachio flakes became an interplanetary sensation. Colonists gather in the dome lounge to share warmth, stories, and laughter.
            </p>
          </div>

        </div>

        {/* Poetic Quote Banner */}
        <div className="mt-14 bg-gradient-to-r from-mars-950 via-kulhad-950 to-nawabi-950 text-parchment-100 rounded-3xl p-8 sm:p-10 border border-mars-800 shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="relative z-10">
            <p className="font-serif text-xl sm:text-2xl italic font-light text-zafran-200 mb-3">
              &ldquo;धरती से मंगल तक, गर्म चाय का दौर कभी थमता नहीं, <br className="hidden sm:inline" />
              तहज़ीब से पियो तो लाल ग्रह पर भी नवाबी रंग उतरता है।&rdquo;
            </p>
            <span className="text-xs font-semibold uppercase tracking-widest text-parchment-300">
              — An Ode to the Red Planet&apos;s Chai Pioneers
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
