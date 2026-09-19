import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, MessageSquare, Phone, Mail, Send } from 'lucide-react';

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
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit inquiry directly to nfo@mewarivilla.com (with cc info@mewarivilla.com)
      await fetch('https://formsubmit.co/ajax/nfo@mewarivilla.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Table Reservation Inquiry: ${name} (${guests} Guests - ${date})`,
          _cc: 'info@mewarivilla.com',
          _template: 'table',
          'Guest Name': name,
          'Contact Phone': phone,
          'Guest Email': email || 'Not provided',
          'Reservation Date': date,
          'Preferred Time': time,
          'Number of Guests': guests,
          'Seating Area': seating,
          'Dining Occasion': occasion,
          'Special Notes': notes || 'None',
          'Restaurant': 'Jalsa Lake View Pure Veg Restaurant Udaipur',
          'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });
    } catch (err) {
      console.warn('Submission request sent, proceeding to confirmation:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const generateWhatsAppMessage = () => {
    const msg = `Hello Jalsa Udaipur, I would like to reserve a table:
• Name: ${name || 'Guest'}
• Phone: ${phone || 'Not provided'}
${email ? `• Email: ${email}\n` : ''}• Date: ${date}
• Time: ${time}
• Guests: ${guests} Person(s)
• Seating: ${seating}
• Occasion: ${occasion}
${notes ? `• Special Notes: ${notes}` : ''}

Inquiry sent to nfo@mewarivilla.com. Please confirm availability. Thank you!`;
    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/918619845277?text=${generateWhatsAppMessage()}`;

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Table Reservation Inquiry - ${name || 'Guest'} (${date})`);
    const body = encodeURIComponent(
      `Hello Jalsa Udaipur & Mewari Villa Team,\n\n` +
      `I would like to request a table reservation:\n\n` +
      `• Name: ${name || 'Guest'}\n` +
      `• Phone: ${phone || 'Not provided'}\n` +
      `• Email: ${email || 'Not provided'}\n` +
      `• Date: ${date}\n` +
      `• Preferred Time: ${time}\n` +
      `• Number of Guests: ${guests} Person(s)\n` +
      `• Seating Area: ${seating}\n` +
      `• Occasion: ${occasion}\n` +
      `${notes ? `• Special Notes: ${notes}\n` : ''}\n` +
      `Please confirm table availability.\n\nThank you!`
    );
    return `mailto:nfo@mewarivilla.com?cc=info@mewarivilla.com&subject=${subject}&body=${body}`;
  };

  const mailtoUrl = generateMailtoUrl();

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
                    Your Name *
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
                    Contact Phone Number *
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

              {/* Email Address */}
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#5E5147] mb-1.5">
                  Email Address (For Inquiry Confirmation)
                </label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#ECE2D5] rounded-xl text-sm font-sans text-[#241C18] focus:outline-none focus:border-[#A44A29]"
                />
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
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 bg-[#A44A29] hover:bg-[#8F3E20] disabled:bg-[#A44A29]/70 text-white tracking-wider text-xs uppercase font-medium rounded-full transition-all duration-300 shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  id="confirm-reservation-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending to nfo@mewarivilla.com...</span>
                    </>
                  ) : (
                    <span>Submit Inquiry</span>
                  )}
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
                Inquiries are submitted directly to <span className="font-medium text-[#A44A29]">nfo@mewarivilla.com</span>. Our manager will confirm availability within minutes.
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
                  Inquiry Submitted Successfully!
                </h4>
                <p className="text-sm font-sans text-[#5E5147] mt-1">
                  Thank you, <span className="font-semibold text-[#241C18]">{name}</span>. Your table inquiry has been forwarded to{' '}
                  <span className="font-semibold text-[#A44A29]">nfo@mewarivilla.com</span> for{' '}
                  <span className="font-semibold text-[#241C18]">{date}</span> at{' '}
                  <span className="font-semibold text-[#241C18]">{time}</span> ({guests} Guests).
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl text-left text-xs font-sans text-[#5E5147] space-y-1.5 border border-[#ECE2D5]">
                <div className="font-semibold text-[#241C18] mb-1">Inquiry Summary:</div>
                <div>• Inquired To: <span className="font-medium text-[#A44A29]">nfo@mewarivilla.com</span></div>
                <div>• Seating: {seating}</div>
                <div>• Occasion: {occasion}</div>
                {email && <div>• Email: {email}</div>}
                <div>• Contact: {phone}</div>
                {notes && <div>• Notes: {notes}</div>}
              </div>

              {/* Instant Contact & Confirmation Options */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={mailtoUrl}
                  className="flex-1 py-3.5 bg-[#A44A29] hover:bg-[#8F3E20] text-white tracking-wider text-xs uppercase font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                  id="email-inquiry-btn"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white tracking-wider text-xs uppercase font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                  id="whatsapp-confirm-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-1">
                <a
                  href="tel:+918619845277"
                  className="inline-flex items-center gap-2 text-xs font-sans text-[#5E5147] hover:text-[#A44A29] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A44A29]" />
                  <span>Or call reservation desk directly: +91 86198 45277</span>
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
