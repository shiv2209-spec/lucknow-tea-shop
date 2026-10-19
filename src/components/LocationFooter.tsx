import React from "react";
import { LUCKNOW_OUTLETS } from "@/data/tea-menu";
import { MapPin, Phone, Clock, Sparkles, Coffee, Heart, ArrowUpRight } from "lucide-react";

export default function LocationFooter() {
  return (
    <footer id="outlets" className="bg-nawabi-950 text-parchment-200 border-t border-kulhad-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outlets Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-kulhad-900 text-zafran-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-kulhad-700">
            <MapPin className="w-3.5 h-3.5 text-zafran-400" />
            <span>Hamare Thikane • हमारे ठिकाने</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            Visit Our Chai Khanas Across Lucknow
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            From the bustling colonial arcades of Hazratganj to the historic alleys of Chowk and open breezy decks of Gomti Nagar Riverfront.
          </p>
        </div>

        {/* 3 Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {LUCKNOW_OUTLETS.map((outlet, idx) => (
            <div
              key={idx}
              className="bg-nawabi-900/90 rounded-2xl p-6 border border-kulhad-800 hover:border-zafran-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zafran-400">
                    Location 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-zafran-300 transition-colors">
                  {outlet.name}
                </h3>
                
                <div className="mt-4 space-y-2.5 text-xs text-gray-300">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-zafran-500 shrink-0 mt-0.5" />
                    <span>{outlet.address}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-gray-400">
                    <span className="font-semibold text-gray-300">Landmark:</span>
                    <span>{outlet.landmark}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-zafran-500 shrink-0" />
                    <span>{outlet.timings}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-zafran-500 shrink-0" />
                    <span>{outlet.phone}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-kulhad-900/80 text-[11px] text-zafran-200/90 italic">
                  &ldquo;{outlet.popularFor}&rdquo;
                </div>
              </div>

              <div className="mt-6 pt-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(outlet.name + ", " + outlet.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-zafran-400 hover:text-zafran-300"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Catering & Shahi Events Banner */}
        <div className="bg-gradient-to-r from-kulhad-900 via-zafran-950 to-kulhad-900 rounded-3xl p-8 border border-kulhad-700/60 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-zafran-400" />
              <span>Nawabi Chai Catering for Weddings & Mehfils</span>
            </h4>
            <p className="text-xs text-parchment-200 max-w-xl">
              Bring live brass samovars, steaming terracotta kulhads, and expert chai ustads to your Lucknow weddings, corporate gatherings, and private baithaks.
            </p>
          </div>
          <a
            href="tel:+915224089200"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-zafran-500 hover:bg-zafran-600 text-kulhad-950 font-bold text-xs shadow-md transition"
          >
            Inquire for Catering: +91 522 408 9200
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-kulhad-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex items-center space-x-2">
            <Coffee className="w-4 h-4 text-zafran-500" />
            <span className="font-serif font-bold text-white">अवध Chai Khana</span>
            <span>• Hazratganj, Lucknow (UP), India</span>
          </div>

          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Lucknow&apos;s Chai Lovers • Next.js & TypeScript</span>
          </div>

          <div className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} Awadh Chai Khana. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
