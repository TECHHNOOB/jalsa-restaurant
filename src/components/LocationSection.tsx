import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const address = '302, Purohit Ji Ka Khurra, Udaipur, Rajasthan, 313001';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Jalsa Lake View Restaurant Udaipur ' + address
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF6EF] text-[#241C18] border-t border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-[#A44A29] font-medium text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#A44A29]" />
              <span>FIND YOUR WAY</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#241C18] leading-[1.1]">
              Meet us in <span className="italic font-normal text-[#A44A29]">Udaipur.</span>
            </h2>
          </div>

          <p className="font-sans text-[#5E5147] text-sm sm:text-base max-w-md leading-relaxed text-left md:text-right">
            Located just steps away from the peaceful waters of Lake Pichola along the historic stone lanes of Old Udaipur.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Panel (5 cols) with High Rounded Corners */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-[2rem] border border-[#ECE2D5] flex flex-col justify-between shadow-xs text-left">
            <div>
              <h3 className="font-serif text-2xl text-[#241C18] font-medium mb-6">
                Jalsa Lake View Restaurant
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF3E8] text-[#A44A29] flex items-center justify-center shrink-0 mt-0.5 border border-[#ECE2D5]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase font-sans text-[#8A7B70] font-semibold block mb-0.5">
                      LOCATION & ADDRESS
                    </span>
                    <p className="font-sans text-[#241C18] text-sm leading-relaxed">
                      302, Purohit Ji Ka Khurra,
                      <br />
                      Udaipur, Rajasthan 313001, India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF3E8] text-[#A44A29] flex items-center justify-center shrink-0 mt-0.5 border border-[#ECE2D5]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase font-sans text-[#8A7B70] font-semibold block mb-0.5">
                      OPERATING HOURS
                    </span>
                    <p className="font-sans text-[#241C18] text-sm leading-relaxed">
                      Monday to Sunday: 10:00 AM – 11:00 PM
                      <br />
                      <span className="text-xs text-[#7A6C62]">Lunch, Sunset Dining & Starlit Dinner</span>
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF3E8] text-[#A44A29] flex items-center justify-center shrink-0 mt-0.5 border border-[#ECE2D5]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase font-sans text-[#8A7B70] font-semibold block mb-0.5">
                      TELEPHONE & RESERVATIONS
                    </span>
                    <a
                      href="tel:+918619845277"
                      className="font-sans text-[#241C18] hover:text-[#A44A29] text-sm font-medium transition-colors"
                    >
                      +91 8619845277
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF3E8] text-[#A44A29] flex items-center justify-center shrink-0 mt-0.5 border border-[#ECE2D5]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase font-sans text-[#8A7B70] font-semibold block mb-0.5">
                      EMAIL INQUIRIES
                    </span>
                    <a
                      href="mailto:nfo@mewarivilla.com"
                      className="font-sans text-[#241C18] hover:text-[#A44A29] text-sm font-medium transition-colors"
                    >
                      nfo@mewarivilla.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-6 mt-6 border-t border-[#F2ECE3]">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#451A14] hover:bg-[#2F110D] text-white tracking-wider text-xs uppercase font-medium rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                id="get-directions-btn"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D9875F]" />
                <span>Get Directions via Google Maps</span>
                <ExternalLink className="w-3 h-3 text-stone-300" />
              </a>
            </div>
          </div>

          {/* Right Interactive Embedded Google Map (7 cols) with High Rounded Corners */}
          <div className="lg:col-span-7 rounded-[2rem] overflow-hidden border border-[#ECE2D5] shadow-xs relative min-h-[400px] bg-[#EAE0D3]">
            <iframe
              title="Jalsa Udaipur Location Map"
              src="https://maps.google.com/maps?q=302%2C%20Purohit%20Ji%20Ka%20Khurra%2C%20Udaipur%2C%20Rajasthan&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Top-Right Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#241C18] text-[10px] font-sans tracking-wider uppercase font-medium px-3.5 py-1.5 rounded-full border border-[#ECE2D5] shadow-xs pointer-events-none">
              Lake Pichola Heritage Area
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

