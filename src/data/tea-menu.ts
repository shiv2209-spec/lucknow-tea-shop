export interface MenuItem {
  id: string;
  name: string;
  hindiName: string;
  category: "specialty-tea" | "classic-tea" | "awadhi-snacks" | "dessert";
  price: number;
  description: string;
  ingredients: string[];
  vessel: "Mitti Kulhad" | "Copper Glass" | "Porcelain Cup" | "Ceramic Plate";
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
    hindiName: "नवाबी ज़ाफ़रानी कुल्हड़ चाय",
    category: "specialty-tea",
    price: 65,
    description: "Slow-simmered rich milk tea infused with authentic Kashmiri saffron, crushed green cardamom, and served steaming in a roasted clay kulhad.",
    ingredients: ["Kashmiri Kesar", "Cardamom", "Full Cream Milk", "Mitti Kulhad"],
    vessel: "Mitti Kulhad",
    tag: "Nawabi Special",
    badgeColor: "bg-amber-500",
    prepTime: "5 mins",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hazratganj-dum-chai",
    name: "Hazratganj Kadak Dum Chai",
    hindiName: "हज़रतगंज कड़क दम चाय",
    category: "classic-tea",
    price: 40,
    description: "The soul of Lucknow's evening 'Ganjing'. Bold Assam leaf brewed with fresh crushed ginger and aromatic cloves in a sealed vessel for deep smoky notes.",
    ingredients: ["Fresh Ginger", "Laung (Cloves)", "Assam CTC", "Smoky Kulhad"],
    vessel: "Mitti Kulhad",
    tag: "Bestseller",
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
    description: "An Awadhi winter legend famous in Old Chowk. Silky pink salted tea whisked with rich milk, topped with crushed pistachio kernels and slivered almonds.",
    ingredients: ["Special Green Tea", "Sea Salt", "Pistachio", "Almonds", "Cream"],
    vessel: "Porcelain Cup",
    tag: "Winter Classic",
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
    description: "Fragrant clear green infusion steeped with sun-dried Lucknowi organic damask rose petals, cinnamon quills, and wild forest honey.",
    ingredients: ["Lucknowi Desi Rose", "Cinnamon", "Green Tea Leaves", "Wild Honey"],
    vessel: "Porcelain Cup",
    tag: "Herbal Elegance",
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
    description: "Everyday Lucknow morning favorite. Pounded spicy ginger and green cardamom simmered to perfection with balanced sweetness.",
    ingredients: ["Farm Ginger", "Green Cardamom", "Cow Milk", "Brown Sugar"],
    vessel: "Mitti Kulhad",
    tag: "Morning Pick",
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
    description: "Pillow-soft warm bakery bun generously spread with fresh white churned butter and a thick spread of fresh malai, sprinkled with sugar crystal crunch.",
    ingredients: ["Artisan Pav Bun", "Fresh White Butter (Makhan)", "Clotted Malai", "Sugar Dust"],
    vessel: "Ceramic Plate",
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
    description: "Crispy, flaky urad-dal stuffed kachoris topped with Lucknow's signature peppery hing aloo sabzi and sweet date-tamarind chutney.",
    ingredients: ["Flaky Pastry", "Spiced Lentil", "Hing Aloo", "Imli Chutney"],
    vessel: "Ceramic Plate",
    tag: "Street Classic",
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
    description: "Thick charcoal-grilled artisan bread slice smothered with chilled rich buffalo malai, dusted with aromatic elaichi powder and roasted pistachios.",
    ingredients: ["Charcoal Toast", "Chilled Malai", "Pistachio Dust", "Elaichi"],
    vessel: "Ceramic Plate",
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
    description: "Crisp ghee-fried bread triangles soaked in fragrant saffron sugar syrup, drenched in thick slow-cooked kesar rabri and adorned with edible silver vark.",
    ingredients: ["Desi Ghee", "Kesar Rabri", "Pistachios", "Silver Vark"],
    vessel: "Ceramic Plate",
    tag: "Royal Dessert",
    badgeColor: "bg-purple-600",
    prepTime: "5 mins",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800",
  },
];

export const CATEGORIES = [
  { id: "all", label: "All Offerings", count: 9 },
  { id: "specialty-tea", label: "Nawabi Specialties", count: 3 },
  { id: "classic-tea", label: "Classic Kulhad Teas", count: 2 },
  { id: "awadhi-snacks", label: "Awadhi Snacks", count: 3 },
  { id: "dessert", label: "Mithai & Desserts", count: 1 },
] as const;

export const LUCKNOW_OUTLETS = [
  {
    name: "Hazratganj Flagship Chai Khana",
    address: "Mayfair Building, Mahatma Gandhi Marg, Hazratganj, Lucknow - 226001",
    landmark: "Opposite British Library, Walking distance from Janpath Market",
    phone: "+91 522 408 9200",
    timings: "6:00 AM – 11:45 PM (Open 7 Days)",
    popularFor: "Evening 'Ganjing' crowd, Live Ghazal & Sitar on Weekends, Mitti Kulhad Chai",
  },
  {
    name: "Old Chowk Heritage Kiosk",
    address: "Near Phool Wali Gali, Chowk Bazaar, Old Lucknow - 226003",
    landmark: "2 mins from Gol Darwaza",
    phone: "+91 522 225 7810",
    timings: "5:30 AM – 10:30 PM",
    popularFor: "Morning Kashmiri Noon Chai, Fresh Makhan Malai & Khasta Kachori",
  },
  {
    name: "Gomti Nagar Riverfront Lounge",
    address: "Vipin Khand, Near Marine Drive Promenade, Gomti Nagar, Lucknow - 226010",
    landmark: "Riverside Garden Gate 3",
    phone: "+91 522 619 4430",
    timings: "7:00 AM – Midnight",
    popularFor: "Open-air sunset seating, artisanal tea flights, youth & family hangout",
  },
];
