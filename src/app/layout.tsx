import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import ReservationModal from "@/components/ReservationModal";

export const metadata: Metadata = {
  title: "Awadh Chai Khana | Authentic Lucknow Kulhad Chai & Nawabi Heritage",
  description:
    "Experience the royal heritage of Awadhi tea culture in Lucknow. From Hazratganj Kadak Kulhad Chai and Kashmiri Noon Chai to Makhan Malai Bun Maska. Established 1954.",
  keywords: [
    "Lucknow chai",
    "Kulhad tea Lucknow",
    "Hazratganj chai",
    "Kashmiri noon chai Lucknow",
    "Zafrani chai",
    "Awadh Chai Khana",
    "Makhan Malai bun maska",
    "Lucknow tea shop",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-parchment-100 text-nawabi-900 antialiased selection:bg-zafran-200 selection:text-kulhad-900">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <CartDrawer />
          <ReservationModal />
        </CartProvider>
      </body>
    </html>
  );
}
