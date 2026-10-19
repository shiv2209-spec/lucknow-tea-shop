export interface MenuItem {
  id: string;
  name: string;
  hindiName: string;
  category: "specialty-tea" | "classic-tea" | "awadhi-snacks" | "dessert";
  price: number;
  description: string;
  ingredients: string[];
  vessel: "Martian Regolith Kulhad" | "Zero-G Vacuum Tumbler" | "Pressurized Ceramic Glass" | "Colony Ceramic Plate";
  isSpicy?: boolean;
  tag?: string;
  badgeColor?: string;
  prepTime: string;
  image: string;
}

export const TEA_MENU: MenuItem[] = [
  {
    id: "zafrani-dum-chai",
    name: "Nawabi Zafrani Kulhad Chai",
    hindiName: "नवाबी ज़ाफ़रानी कुल्हड़ चाय (मंगल संस्करण)",
    category: "specialty-tea",
    price: 65,
    description: "Slow-simmered in pressurized brass samovars at 1.0 ATM. Pure Kashmiri saffron and crushed green cardamom poured into solar-fired Martian red clay kulhads for an authentic sondhi khushboo in 0.38g gravity.",
    ingredients: ["Kashmiri Kesar", "Cardamom", "Hydro-Biosphere Milk", "Martian Clay Kulhad"],
    vessel: "Martian Regolith Kulhad",
    tag: "Colony Bestseller",
    badgeColor: "bg-mars-600",
    prepTime: "5 mins",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hazratganj-dum-chai",
    name: "Hazratganj Kadak Dum Chai",
    hindiName: "हज़रतगंज कड़क दम चाय",
    category: "classic-tea",
    price: 40,
    description: "The timeless soul of evening Ganjing, now served at Olympus Mons Base. Bold Assam tea leaf brewed with crushed ginger and cloves in an airtight pressure pot for maximum aroma extraction.",
    ingredients: ["Fresh Ginger", "Laung (Cloves)", "Assam CTC", "Smoky Regolith Kulhad"],
    vessel: "Martian Regolith Kulhad",
    tag: "Pioneers Choice",
    badgeColor: "bg-orange-600",
    prepTime: "4 mins",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "kashmiri-noon-chai",
    name: "Kashmiri Noon Chai (Gulabi Chai)",
    hindiName: "गुलाबी नून चाय",
    category: "specialty-tea",
    price: 85,
    description: "Traditional Awadhi winter legend, perfect for freezing Martian nights (-60°C). Silky pink salted tea whisked with rich cream, topped with crushed green pistachios and roasted almond flakes.",
    ingredients: ["Special Green Tea", "Sea Salt", "Pistachio", "Almonds", "Rich Cream"],
    vessel: "Pressurized Ceramic Glass",
    tag: "Sub-Zero Favorite",
    badgeColor: "bg-pink-600",
    prepTime: "6 mins",
    image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "awadhi-rose-kahwa",
    name: "Shahi Desi Gulab Kahwa",
    hindiName: "शाही देसी गुलाब कहवा",
    category: "specialty-tea",
    price: 75,
    description: "Golden clear tea steeped with sun-dried Lucknowi desi damask roses cultivated inside Jezero crater greenhouse domes, cinnamon quills, and wild honey.",
    ingredients: ["Lucknowi Desi Rose", "Cinnamon", "Green Tea Leaves", "Wild Honey"],
    vessel: "Pressurized Ceramic Glass",
    tag: "Botanical Elixir",
    badgeColor: "bg-rose-500",
    prepTime: "4 mins",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "chowk-adrak-elaichi",
    name: "Chowk Wali Adrak-Elaichi Chai",
    hindiName: "चौक वाली अदरक-इलायची चाय",
    category: "classic-tea",
    price: 35,
    description: "Colony morning shift essential. Pounded spicy ginger and green cardamom simmered to perfection with balanced sweetness to awaken interplanetary explorers.",
    ingredients: ["Hydro Ginger", "Green Cardamom", "Whole Milk", "Desi Khand"],
    vessel: "Martian Regolith Kulhad",
    tag: "Morning Shift",
    badgeColor: "bg-emerald-600",
    prepTime: "3 mins",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "makkhan-bun-maska",
    name: "Makhan Malai Bun Maska",
    hindiName: "मक्खन मलाई बन मस्का",
    category: "awadhi-snacks",
    price: 55,
    description: "Pillow-soft bakery bun baked in the colony ovens, generously spread with churned white butter and thick clotted malai, finished with crunch sugar dust.",
    ingredients: ["Artisan Pav Bun", "Fresh White Butter (Makhan)", "Clotted Malai", "Sugar Dust"],
    vessel: "Colony Ceramic Plate",
    tag: "Must Try",
    badgeColor: "bg-yellow-600",
    prepTime: "3 mins",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hazratganj-khasta-kachori",
    name: "Hazratganj Khasta Kachori (2 Pcs)",
    hindiName: "हज़रतगंज खस्ता कचौरी",
    category: "awadhi-snacks",
    price: 70,
    description: "Flaky spiced urad-dal stuffed pastries delivered hot from the kitchen, served with piping hot peppery hing aloo gravy and tangy date-tamarind chutney.",
    ingredients: ["Flaky Pastry", "Spiced Lentil", "Hing Aloo", "Imli Chutney"],
    vessel: "Colony Ceramic Plate",
    tag: "Spicy Classic",
    isSpicy: true,
    badgeColor: "bg-red-600",
    prepTime: "5 mins",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "lucknowi-malai-toast",
    name: "Lucknowi Malai Toast",
    hindiName: "लखनऊवी मलाई टोस्ट",
    category: "awadhi-snacks",
    price: 60,
    description: "Thick golden toast smothered with chilled rich malai, dusted with aromatic green elaichi powder and roasted pistachios.",
    ingredients: ["Toasted Brioche", "Chilled Malai", "Pistachio Dust", "Elaichi"],
    vessel: "Colony Ceramic Plate",
    tag: "Café Favorite",
    badgeColor: "bg-amber-600",
    prepTime: "4 mins",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "shahi-tukda-bites",
    name: "Shahi Tukda Rabri Bites",
    hindiName: "शाही टुकड़ा रबड़ी बाइट्स",
    category: "dessert",
    price: 90,
    description: "Crisp ghee-fried bread triangles soaked in fragrant saffron sugar syrup, drenched in thick slow-cooked kesar rabri and adorned with silver vark.",
    ingredients: ["Pure Desi Ghee", "Kesar Rabri", "Pistachios", "Silver Vark"],
    vessel: "Colony Ceramic Plate",
    tag: "Royal Treat",
    badgeColor: "bg-purple-600",
    prepTime: "5 mins",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800",
  },
];

export const CATEGORIES = [
  { id: "all", label: "All Martian Rations", count: 9 },
  { id: "specialty-tea", label: "Nawabi Specialties", count: 3 },
  { id: "classic-tea", label: "Martian Kulhad Teas", count: 2 },
  { id: "awadhi-snacks", label: "Colony Snacks", count: 3 },
  { id: "dessert", label: "Mithai & Desserts", count: 1 },
] as const;

export const MARS_OUTLETS = [
  {
    name: "Olympus Mons Summit Dome (HQ)",
    address: "Dome 01, Caldera Ridge, Olympus Mons, Mars - Quadrant MC-09",
    landmark: "Highest tea stall in the Solar System (21.9 km altitude)",
    phone: "+Mars-Net 01-522-CHAI",
    timings: "Sol 05:00 – Sol 23:30 (Continuous Airlock Access)",
    popularFor: "Sunset views over Martian horizon, Live Sitar in 0.38g, Red Regolith Kulhads",
  },
  {
    name: "Valles Marineris Canyon Kiosk",
    address: "Melas Chasma Promenade, Deep Canyon Sector 4, Mars",
    landmark: "Docking Bay 3, Near pressurized canyon cable car terminal",
    phone: "+Mars-Net 04-225-CHAI",
    timings: "Sol 06:00 – Sol 22:00",
    popularFor: "Sub-zero Kashmiri Noon Chai, Fresh Makhan Malai, Geological Explorer Baithaks",
  },
  {
    name: "Jezero Crater Biosphere Lounge",
    address: "Delta Habitat Ring, Jezero Botanical Complex, Mars",
    landmark: "Opposite Perseverance Rover Memorial Plaza",
    phone: "+Mars-Net 07-619-CHAI",
    timings: "Sol 07:00 – Late Midnight",
    popularFor: "Hydroponic garden seating, fresh mint herbal tea flights, Rover drive-thru window",
  },
];
