"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, Orbit } from "lucide-react";

export default function ReservationModal() {
  const { isReservationOpen, setIsReservationOpen } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    outlet: "Olympus Mons Summit Dome (HQ)",
    guests: "2",
    date: "",
    slot: "Phobos & Deimos Twin-Moonrise Baithak (18:00 – 20:30 Sol Time)",
    specialRequest: "",
  });

  if (!isReservationOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsReservationOpen(false);
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all border border-mars-200 z-10">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-mars-950 via-kulhad-950 to-mars-950 p-6 text-parchment-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-mars-500/20 text-mars-400 border border-mars-500/30">
                <Orbit className="w-5 h-5 animate-spin" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-mars-400">
                  Mars Colony Dome Experience
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Book a Dome Baithak (बैठक)
                </h3>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-mars-950">
                  Dome Baithak Confirmed!
                </h4>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  Aapki baithak <strong>{formData.outlet}</strong> mein <strong>{formData.guests} logon</strong> ke liye confirm ho gayi hai. We have transmitted access credentials to Mars-Net terminal <strong>{formData.phone || "MC-PIONEER-99"}</strong>.
                </p>
                <div className="p-3 bg-mars-50 rounded-xl text-xs text-mars-800 border border-mars-200">
                  <span className="font-bold">Sol Slot:</span> {formData.slot}
                </div>
                <button
                  onClick={handleClose}
                  className="mt-4 px-6 py-2.5 rounded-full bg-mars-600 hover:bg-mars-700 text-white font-semibold text-xs shadow-md"
                >
                  Shukriya, Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-mars-950 block mb-1">
                    Colonist Name / Call-Sign (नाम)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Commander Vikram / Dr. Tanya"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-mars-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-mars-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-mars-950 block mb-1">
                      Mars-Net Comms ID (फ़ोन / ID)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+Mars-Net 01-9839-CHAI"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-mars-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-mars-500"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-mars-950 block mb-1">
                      Number of Explorers (लोग)
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-mars-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-mars-500"
                    >
                      <option value="1">1 Person (Solo Chai & Sol Log)</option>
                      <option value="2">2 Persons (Chai & Guftagu)</option>
                      <option value="4">4 Persons (Research Crew)</option>
                      <option value="6">6 Persons (Colony Expedition)</option>
                      <option value="8+">8+ Persons (Grand Mars Baithak)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-mars-950 block mb-1">
                    Select Martian Dome (ठिकाना)
                  </label>
                  <select
                    value={formData.outlet}
                    onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-mars-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-mars-500"
                  >
                    <option value="Olympus Mons Summit Dome (HQ)">Olympus Mons Summit Dome (Highest stall in Solar System)</option>
                    <option value="Valles Marineris Canyon Kiosk">Valles Marineris Canyon Kiosk (Melas Chasma)</option>
                    <option value="Jezero Crater Biosphere Lounge">Jezero Crater Biosphere Lounge (Botanical Dome)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-mars-950 block mb-1">
                      Sol Date (तारीख)
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-mars-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-mars-500"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-mars-950 block mb-1">
                      Sol Time Slot (समय)
                    </label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-mars-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-mars-500"
                    >
                      <option value="Sol Dawn Morning Chai (06:00 – 08:30 Sol)">Sol Dawn Morning Chai (06:00 – 08:30 Sol)</option>
                      <option value="Mid-Sol Solar Zenith (12:00 – 14:30 Sol)">Mid-Sol Solar Zenith (12:00 – 14:30 Sol)</option>
                      <option value="Phobos & Deimos Twin-Moonrise Baithak (18:00 – 20:30 Sol)">Phobos & Deimos Twin-Moonrise Baithak (18:00 – 20:30 Sol)</option>
                      <option value="Late Sol Night Research Mehfil (21:30 – 23:30 Sol)">Late Sol Night Research Mehfil (21:30 – 23:30 Sol)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-mars-950 block mb-1">
                    Special Mission Requests
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Rover docking bay reservation, low-gravity cushion seating, zero-sugar chai..."
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-mars-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-mars-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-mars-600 hover:bg-mars-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-mars-600/30 transition hover:scale-[1.01]"
                  >
                    Confirm Martian Baithak Reservation
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
