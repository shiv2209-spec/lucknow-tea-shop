import React from "react";
import { BookOpen, MapPin, Feather, Sparkles } from "lucide-react";

export default function HeritageSection() {
  return (
    <section id="heritage" className="py-24 bg-parchment-100 relative overflow-hidden">
      
      {/* Decorative Jali / Arch Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-zafran-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zafran-100 text-zafran-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Feather className="w-3.5 h-3.5 text-zafran-600" />
            <span>Daastan-e-Awadh • लखनऊ की चाय परंपरा</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-kulhad-950 mb-4">
            Where Every Sip Whispers Royal Lucknow Heritage
          </h2>
          <p className="text-sm sm:text-base text-nawabi-800/80 leading-relaxed">
            In Lucknow, tea is never rushed. It is an invitation to pause, exchange <em>adaab</em>, and immerse oneself in the poetic rhythm of Awadh.
          </p>
        </div>

        {/* 3 Pillars of Awadhi Tea Culture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Ganjing */}
          <div className="bg-white rounded-3xl p-6 border border-kulhad-200/80 shadow-md hover:shadow-xl transition group">
            <div className="h-44 w-full rounded-2xl overflow-hidden mb-5">
              <img
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800"
                alt="Hazratganj Evening Ganjing"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-zafran-700 uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hazratganj Culture</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-kulhad-950 mb-2">
              The Legend of “Ganjing”
            </h3>
            <p className="text-xs text-nawabi-800/70 leading-relaxed">
              In Lucknow, an evening promenade down the colonial corridors of Hazratganj is affectionately termed <em>Ganjing</em>. No evening is complete without leaning by our stall, holding a piping kulhad, and debating poetry and politics with friends.
            </p>
          </div>

          {/* Card 2: Clay Kulhads of Chinhat */}
          <div className="bg-white rounded-3xl p-6 border border-kulhad-200/80 shadow-md hover:shadow-xl transition group">
            <div className="h-44 w-full rounded-2xl overflow-hidden mb-5">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800"
                alt="Chinhat Terracotta Pottery"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-zafran-700 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chinhat Terracotta</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-kulhad-950 mb-2">
              Earth Born: The Mitti Kulhad
            </h3>
            <p className="text-xs text-nawabi-800/70 leading-relaxed">
              Our earthen cups are handmade by third-generation potters in Chinhat, using natural clay from the banks of the Gomti. Unvarnished and single-use, they lend an unmistakable petrichor aroma (*sondhi khushboo*) that machine cups can never match.
            </p>
          </div>

          {/* Card 3: The Kashmiri Noon Chai in Chowk */}
          <div className="bg-white rounded-3xl p-6 border border-kulhad-200/80 shadow-md hover:shadow-xl transition group">
            <div className="h-44 w-full rounded-2xl overflow-hidden mb-5">
              <img
                src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800"
                alt="Chowk Kashmiri Noon Chai"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-zafran-700 uppercase tracking-wider mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Chowk Heritage</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-kulhad-950 mb-2">
              Pink Dawn in Old Chowk
            </h3>
            <p className="text-xs text-nawabi-800/70 leading-relaxed">
              Centuries ago, Kashmiri artisans settling in Old Lucknow brought along their pink salted tea (*Noon Chai*). Brewed through the night and whisked vigorously with sea salt and almonds, it remains Lucknow's beloved winter morning ritual.
            </p>
          </div>

        </div>

        {/* Poetic Quote Banner */}
        <div className="mt-14 bg-gradient-to-r from-kulhad-900 via-kulhad-950 to-nawabi-950 text-parchment-100 rounded-3xl p-8 sm:p-10 border border-kulhad-800 shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="relative z-10">
            <p className="font-serif text-xl sm:text-2xl italic font-light text-zafran-200 mb-3">
              &ldquo;गर्म चाय की चुस्कियों में बसती है लखनऊ की रूह, <br className="hidden sm:inline" />
              तहज़ीब से पियो तो हर घूंट में नवाबी रंग उतरता है।&rdquo;
            </p>
            <span className="text-xs font-semibold uppercase tracking-widest text-parchment-300">
              — An Ode to Lucknow’s Chai Lovers
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
