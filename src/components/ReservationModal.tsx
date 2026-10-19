"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2 } from "lucide-react";

export default function ReservationModal() {
  const { isReservationOpen, setIsReservationOpen } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    outlet: "Hazratganj Flagship Chai Khana",
    guests: "2",
    date: "",
    slot: "Evening Ganjing (6:00 PM – 7:30 PM)",
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
        <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all border border-kulhad-200 z-10">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-kulhad-900 via-zafran-950 to-kulhad-900 p-6 text-parchment-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-zafran-500/20 text-zafran-400 border border-zafran-500/30">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zafran-400">
                  Nawabi Mehfil & Chai
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Book a Baithak (बैठक)
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
                <h4 className="font-serif text-2xl font-bold text-kulhad-950">
                  Baithak Confirmed!
                </h4>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  Aapki baithak <strong>{formData.outlet}</strong> mein <strong>{formData.guests} logon</strong> ke liye darj ho gayi hai. We have sent SMS confirmation to <strong>{formData.phone || "+91 98390 XXXXX"}</strong>.
                </p>
                <div className="p-3 bg-parchment-100 rounded-xl text-xs text-kulhad-800 border border-kulhad-200">
                  <span className="font-bold">Slot:</span> {formData.slot}
                </div>
                <button
                  onClick={handleClose}
                  className="mt-4 px-6 py-2.5 rounded-full bg-kulhad-600 hover:bg-kulhad-700 text-white font-semibold text-xs shadow-md"
                >
                  Shukriya, Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-kulhad-900 block mb-1">
                    Your Full Name (नाम)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mirza Zafar / Ananya Mishra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-kulhad-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-kulhad-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-kulhad-900 block mb-1">
                      Phone Number (फ़ोन नंबर)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98390 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-kulhad-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-kulhad-500"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-kulhad-900 block mb-1">
                      Number of Guests (लोग)
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-kulhad-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-kulhad-500"
                    >
                      <option value="1">1 Person (Solo Chai & Book)</option>
                      <option value="2">2 Persons (Chai & Guftagu)</option>
                      <option value="4">4 Persons (Family / Friends)</option>
                      <option value="6">6 Persons (Awadhi Dawat)</option>
                      <option value="8+">8+ Persons (Grand Baithak)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-kulhad-900 block mb-1">
                    Select Lucknow Outlet (ठिकाना)
                  </label>
                  <select
                    value={formData.outlet}
                    onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-kulhad-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-kulhad-500"
                  >
                    <option value="Hazratganj Flagship Chai Khana">Hazratganj Flagship (Mayfair, MG Marg)</option>
                    <option value="Old Chowk Heritage Kiosk">Old Chowk Heritage Kiosk (Near Gol Darwaza)</option>
                    <option value="Gomti Nagar Riverfront Lounge">Gomti Nagar Riverfront Lounge (Marine Drive)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-kulhad-900 block mb-1">
                      Date (तारीख)
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-kulhad-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-kulhad-500"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-kulhad-900 block mb-1">
                      Time Slot (समय)
                    </label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-kulhad-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-kulhad-500"
                    >
                      <option value="Morning Subah Chai (7:00 AM – 9:00 AM)">Morning Subah Chai (7:00 AM – 9:00 AM)</option>
                      <option value="Afternoon Dopehar (1:00 PM – 3:30 PM)">Afternoon Dopehar (1:00 PM – 3:30 PM)</option>
                      <option value="Evening Ganjing (6:00 PM – 7:30 PM)">Evening Ganjing (6:00 PM – 7:30 PM)</option>
                      <option value="Late Night Mehfil (9:30 PM – 11:30 PM)">Late Night Mehfil (9:30 PM – 11:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-kulhad-900 block mb-1">
                    Special Notes / Preferences
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Floor gaddi seating preference, live ghazal front table, jaggery tea only..."
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-kulhad-200 bg-parchment-50 focus:outline-none focus:ring-2 focus:ring-kulhad-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-kulhad-600 hover:bg-kulhad-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-kulhad-600/30 transition hover:scale-[1.01]"
                  >
                    Confirm Baithak Reservation
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
