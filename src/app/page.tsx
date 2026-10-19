import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ChaiCustomizer from "@/components/ChaiCustomizer";
import HeritageSection from "@/components/HeritageSection";
import LocationFooter from "@/components/LocationFooter";
import { Sparkles, Star, Quote } from "lucide-react";

export default function Home() {
  const testimonials = [
    {
      name: "Nawabzada Kazim Ali",
      location: "Qaiserbagh, Lucknow",
      comment:
        "The Zafrani Kulhad Chai reminds me of old family durbars. The aroma of pure saffron and clay takes you back to 19th-century Awadh.",
      rating: 5,
      favorite: "Nawabi Zafrani Kulhad Chai",
    },
    {
      name: "Dr. Rohini Saxena",
      location: "Hazratganj, Lucknow",
      comment:
        "Evening 'Ganjing' is simply incomplete without a stop here. Makhan Malai Bun Maska paired with steaming Kadak Dum Chai is pure bliss.",
      rating: 5,
      favorite: "Kadak Dum Chai & Bun Maska",
    },
    {
      name: "Aman Siddiqui",
      location: "Gomti Nagar, Lucknow",
      comment:
        "The Kashmiri Noon Chai with roasted almonds took me by surprise. Authentic pink color, delicate sea salt flavor, exactly like old Chowk.",
      rating: 5,
      favorite: "Kashmiri Noon Chai",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Lucknow Cultural Marquee / Ticker */}
      <div className="bg-kulhad-900 text-parchment-100 py-3 overflow-hidden border-y border-kulhad-800">
        <div className="flex items-center space-x-8 animate-pulse text-xs tracking-wider uppercase font-semibold justify-center flex-wrap gap-y-2 px-4">
          <span className="flex items-center gap-1.5 text-zafran-400">
            <Sparkles className="w-3.5 h-3.5" /> Slow-Simmered in Brass Samovars
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 text-parchment-200">
            Earthy Chinhat Clay Mitti Kulhads
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 text-zafran-400">
            Finest Kashmiri Zafran & Desi Khand
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 text-parchment-200">
            Open Till 11:45 PM for Late-Night Ganjing
          </span>
        </div>
      </div>

      {/* Main Menu Section */}
      <MenuSection />

      {/* Interactive Chai Customizer */}
      <ChaiCustomizer />

      {/* Heritage & Lucknow Tea Story */}
      <HeritageSection />

      {/* Customer Testimonials: Awadh Ki Zubani */}
      <section className="py-20 bg-parchment-200/60 border-b border-kulhad-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-kulhad-100 text-kulhad-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Quote className="w-3.5 h-3.5 text-zafran-600" />
              <span>Awadh Ki Zubani • चाय की मोहब्बत</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-kulhad-950 mb-3">
              Words From Lucknow&apos;s Chai Lovers
            </h2>
            <p className="text-xs sm:text-sm text-nawabi-800/70">
              Generations of Lucknowites have made our chai khana their second home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-kulhad-200/80 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-4 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="font-serif italic text-sm text-kulhad-900 leading-relaxed mb-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-kulhad-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-kulhad-950">{t.name}</h5>
                    <span className="text-[10px] text-gray-500">{t.location}</span>
                  </div>
                  <span className="text-[10px] bg-zafran-50 text-zafran-800 px-2 py-1 rounded-full font-semibold border border-zafran-200">
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
