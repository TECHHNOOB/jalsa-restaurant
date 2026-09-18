import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOccasion?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  defaultOccasion = 'Casual Dining',
}) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('18:00');
  const [guests, setGuests] = useState('2');
  const [seating, setSeating] = useState('Lake-View Rooftop Terrace');
  const [occasion, setOccasion] = useState(defaultOccasion);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultOccasion) {
      setOccasion(defaultOccasion);
    }
  }, [defaultOccasion]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const msg = `Hello Jalsa Udaipur, I would like to reserve a table:
• Name: ${name || 'Guest'}
• Phone: ${phone || 'Not provided'}
• Date: ${date}
• Time: ${time}
• Guests: ${guests} Person(s)
• Seating: ${seating}
• Occasion: ${occasion}
${notes ? `• Special Notes: ${notes}` : ''}

Please confirm availability. Thank you!`;
    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/918619845277?text=${generateWhatsAppMessage()}`;

  return (
    <div
      id="reservation-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="reservation-modal-content"
        className="bg-[#FAF6EF] text-[#241C18] w-full max-w-xl rounded-[2rem] shadow-2xl border border-[#ECE2D5] overflow-hidden relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#241A16] text-[#FAF6EF] p-6 sm:p-8 flex items-start justify-between">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-[#D9875F] text-xs font-sans tracking-[0.25em] uppercase font-medium mb-1.5">
              <span className="w-4 h-[1.5px] bg-[#D9875F]" />
              <span>TABLE RESERVATIONS</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              Book Your Table at Jalsa
            </h3>
            <p className="text-xs text-[#B3A295] font-sans mt-1">
              Rooftop Lake Pichola View • Pure Vegetarian • 10:00 AM – 11:00 PM
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close reservation modal"
            id="close-reservation-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 text-left">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#5E5147] mb-1.5">
                    Reservation Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#ECE2D5] rounded-xl text-sm font-sans text-[#241C18] focus:outline-none focus:border-[#A44A29]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#5E5147] mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#ECE2D5] rounded-xl text-sm font-sans text-[#241C18] focus:outline-none focus:border-[#A44A29]"
                  >
                    <optgroup label="Lunch (11:00 AM – 3:30 PM)">
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="14:00">02:00 PM</option>
                    </optgroup>
                    <optgroup label="Golden Hour Sunset (5:00 PM – 6:30 PM)">
                      <option value="17:00">05:00 PM (Sunset Chai)</option>
                      <option value="17:30">05:30 PM (Sunset Prime)</option>
                      <option value="18:00">06:00 PM (Dusk / Twilight)</option>
                    </optgroup>
                    <optgroup label="Dinner (7:00 PM – 10:30 PM)">
                      <option value="19:00">07:00 PM</option>
                      <option value="19:30">07:30 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="20:30">08:30 PM</option>
                      <option value="21:00">09:00 PM</option>
                      <option value="21:30">09:30 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Guests & Seating Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#5E5147] mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#ECE2D5] rounded-xl text-sm font-sans text-[#241C18] focus:outline-none focus:border-[#A44A29]"
                  >
                    <option value="1">1 Person (Solo)</option>
                    <option value="2">2 Guests (Couple)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="10">10+ Guests (Group)</option>
                    <option value="15">15+ Guests (Celebration)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#5E5147] mb-1.5">
                    Seating Area
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#ECE2D5] rounded-xl text-sm font-sans text-[#241C18] focus:outline-none focus:border-[#A44A29]"
                  >
                    <option value="Lake-View Rooftop Terrace">Lake-View Rooftop Terrace (Prime)</option>
                    <option value="Sunset Railing Table">Sunset Railing Table</option>
                    <option value="Indoor Heritage Dining Hall">Indoor Heritage Dining Hall</option>
                    <option value="Upper Open Sky Deck">Upper Open Sky Deck</option>
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#5E5147] mb-1.5">
                  Dining Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#ECE2D5] rounded-xl text-sm font-sans text-[#241C18] focus:outline-none focus:border-[#A44A29]"
                >
                  <option value="Casual Dining">Casual Dining / Leisure Lunch</option>
                  <option value="Sunset Watching & Chai">Sunset Watching & Starters</option>
                  <option value="Birthday">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary Dinner</option>
                  <option value="Family Gathering">Family Gathering / Reunion</option>
                  <option value="Romantic Dinner">Romantic Dinner</option>
                  <option value="Special Celebration">Special Celebration</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#5E5147] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#ECE2D5] rounded-xl text-sm font-sans text-[#241C18] focus:outline-none focus:border-[#A44A29]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#5E5147] mb-1.5">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#ECE2D5] rounded-xl text-sm font-sans text-[#241C18] focus:outline-none focus:border-[#A44A29]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#5E5147] mb-1.5">
                  Special Dietary or Seating Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Jain food preparation, anniversary table, high chair for child..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#ECE2D5] rounded-xl text-sm font-sans text-[#241C18] focus:outline-none focus:border-[#A44A29]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-[#A44A29] hover:bg-[#8F3E20] text-white tracking-wider text-xs uppercase font-medium rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                  id="confirm-reservation-btn"
                >
                  Request Reservation
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white tracking-wider text-xs uppercase font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                  id="whatsapp-booking-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-[#7A6C62] text-center font-light">
                No booking fee required. Our manager will confirm availability within minutes.
              </p>
            </form>
          ) : (
            /* Confirmation Step */
            <div className="text-center py-6 space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#FAF3E8] text-[#A44A29] border border-[#ECE2D5] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-serif text-2xl text-[#241C18] font-medium">
                  Reservation Request Received!
                </h4>
                <p className="text-sm font-sans text-[#5E5147] mt-1">
                  Thank you, <span className="font-semibold text-[#241C18]">{name}</span>. We have
                  logged your table preference for{' '}
                  <span className="font-semibold text-[#241C18]">{date}</span> at{' '}
                  <span className="font-semibold text-[#241C18]">{time}</span> ({guests} Guests).
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl text-left text-xs font-sans text-[#5E5147] space-y-1.5 border border-[#ECE2D5]">
                <div className="font-semibold text-[#241C18] mb-1">Booking Summary:</div>
                <div>• Seating: {seating}</div>
                <div>• Occasion: {occasion}</div>
                {notes && <div>• Notes: {notes}</div>}
                <div>• Contact: {phone}</div>
              </div>

              {/* Instant WhatsApp Verification Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white tracking-wider text-xs uppercase font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm via WhatsApp</span>
                </a>

                <a
                  href="tel:+918619845277"
                  className="px-6 py-3.5 bg-[#241A16] hover:bg-[#16100D] text-white tracking-wider text-xs uppercase font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us Now</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="text-xs font-sans text-[#8A7B70] hover:text-[#241C18] tracking-wider uppercase underline cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
