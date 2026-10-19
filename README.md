# अवध Chai Khana (Awadh Chai Khana) - Lucknow Tea Shop Website

An authentic, culturally rich web experience for a heritage tea shop in Lucknow, India. Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ☕ Key Features

1. **Lucknow-Themed Cultural Design**:
   - Palette inspired by baked Chinhat terracotta *kulhads*, Kashmiri *zafran* (saffron), and Awadhi architectural arches.
   - Poetic Awadhi *tehzeeb*, cultural stories of Hazratganj *Ganjing*, and Old Chowk winter rituals.

2. **Khas Menu (Specialties & Snacks)**:
   - *Nawabi Zafrani Kulhad Chai* (Saffron & Elaichi in roasted clay)
   - *Hazratganj Kadak Dum Chai* (Robust ginger-clove slow-simmered tea)
   - *Kashmiri Noon Chai / Gulabi Chai* (Pink salted tea with pistachios & almonds)
   - *Makhan Malai Bun Maska*, *Hazratganj Khasta Kachori*, and *Shahi Tukda Rabri Bites*.
   - Filter by categories and instant live search.

3. **Interactive Chai Customizer (अपनी चाय)**:
   - Step 1: Base tea leaves (Kadak Assam, Zafran Leaf, Noon Chai, Sulaimani)
   - Step 2: Milk blend (Buffalo milk, Cow milk, Almond milk, Black)
   - Step 3: Desi Sweetener (Khand, Gur/Jaggery, Wild Honey, Fika)
   - Step 4: Hand-pounded spices (Adrak, Elaichi, Kesar, Laung, Tulsi)
   - Step 5: Vessel (Chinhat baked clay kulhad, brass tumbler, to-go cup)
   - Real-time live price calculation & dynamic cup summary.

4. **Cart Drawer & Order Token Simulator**:
   - Slide-in cart with quantity adjustments and pickup outlet selection.
   - Instant token generator with preparation time estimate.

5. **Book a Baithak (Table Reservation)**:
   - Reserve tables across 3 Lucknow outlets (*Hazratganj*, *Chowk*, and *Gomti Nagar Riverfront*).

---

## 🚀 Running Locally

```bash
# 1. Navigate to the project directory
cd /Users/shivshankarsingh/.gemini/antigravity/scratch/lucknow-tea-shop

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

---

## 📁 Project Structure

```
lucknow-tea-shop/
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom Lucknow color tokens & animations
│   │   ├── layout.tsx          # Root layout with CartProvider & SEO metadata
│   │   └── page.tsx            # Main landing page assembling sections
│   ├── components/
│   │   ├── Navbar.tsx          # Brand header, cart badge, and baithak CTA
│   │   ├── Hero.tsx            # Royal Lucknow hero with quick ordering
│   │   ├── MenuSection.tsx     # Filterable menu cards with INR pricing
│   │   ├── ChaiCustomizer.tsx  # Multi-step interactive chai builder
│   │   ├── HeritageSection.tsx # Hazratganj Ganjing & Chowk cultural stories
│   │   ├── CartDrawer.tsx      # Slide-in cart & simulated token checkout
│   │   ├── ReservationModal.tsx# Baithak booking modal
│   │   └── LocationFooter.tsx  # 3 Lucknow outlets, maps, & catering info
│   ├── context/
│   │   └── CartContext.tsx     # React context managing cart & modals
│   └── data/
│       └── tea-menu.ts         # Menu items, prices, ingredients, & outlets
├── tailwind.config.ts          # Custom kulhad, zafran, and nawabi color palette
├── tsconfig.json               # TypeScript configuration with @/* path aliases
├── package.json
└── README.md
```
