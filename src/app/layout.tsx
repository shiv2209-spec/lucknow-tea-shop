import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import ReservationModal from "@/components/ReservationModal";

export const metadata: Metadata = {
  title: "Awadh Chai Khana | Authentic Kulhad Chai on Mars (Olympus Mons Base)",
  description:
    "Experience authentic Awadhi tea culture on the Red Planet. From Olympus Mons Zafrani Dum Chai and sub-zero Kashmiri Noon Chai to Makhan Malai Bun Maska. Established Sol 2054.",
  keywords: [
    "Mars chai",
    "Kulhad tea Mars",
    "Olympus Mons chai",
    "Kashmiri noon chai Mars",
    "Zafrani chai Mars",
    "Awadh Chai Khana Mars",
    "Makhan Malai bun maska Mars",
    "Red Planet tea house",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-parchment-100 text-nawabi-900 antialiased selection:bg-mars-200 selection:text-mars-950">
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
