import React from 'react';
import { ASSETS } from '../data/assets.ts';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1310] text-[#A8988C] font-sans border-t border-[#2E221D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2E221D]">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 p-0.5 border border-white/20 flex items-center justify-center">
                <img
                  src={ASSETS.logo.favicon}
                  alt="Jalsa Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-xl font-medium uppercase text-white block leading-tight">
                  JALSA UDAIPUR
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#D9875F] uppercase font-light">
                  LAKE VIEW PURE VEG RESTAURANT
                </span>
              </div>
            </div>

            <p className="text-xs text-[#B3A295] leading-relaxed max-w-sm mb-6">
              A serene rooftop dining destination overlooking Lake Pichola in the heart of Udaipur.
              Dedicated to pure vegetarian culinary traditions and warm Rajasthani hospitality.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/jalsa_udaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#261C18] border border-[#3D2E27] hover:bg-[#A44A29] flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/jalsaudaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#261C18] border border-[#3D2E27] hover:bg-[#A44A29] flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B3A295]">
              <li>
                <a href="#home" className="hover:text-[#D9875F] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-[#D9875F] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#the-view" className="hover:text-[#D9875F] transition-colors">
                  The Panorama
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D9875F] transition-colors">
                  Pure Veg Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#D9875F] transition-colors">
                  Hospitality
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D9875F] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#D9875F] transition-colors">
                  Celebrations
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact Info (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-4">
              Visit & Connect
            </h4>
            <div className="space-y-3.5 text-xs text-[#B3A295]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9875F] shrink-0 mt-0.5" />
                <span>302, Purohit Ji Ka Khurra, Udaipur, Rajasthan 313001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9875F] shrink-0" />
                <a href="tel:+918619845277" className="hover:text-[#D9875F] transition-colors">
                  +91 8619845277
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D9875F] shrink-0" />
                <a href="mailto:info@jalsaudaipur.com" className="hover:text-[#D9875F] transition-colors">
                  info@jalsaudaipur.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Timings & Pure Veg Heritage (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-4">
              Dining Hours
            </h4>
            <div className="space-y-2 text-xs text-[#B3A295] mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D9875F]" />
                <span>Daily: 10:00 AM – 11:00 PM</span>
              </div>
              <p className="text-[11px] text-[#8C7B70]">
                Lunch • Sunset Drinks & Appetizers • Starlit Dinner
              </p>
            </div>

            <div className="p-4 bg-[#241A16] rounded-2xl border border-[#3D2E27]">
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#D9875F] block mb-0.5">
                100% PURE VEGETARIAN
              </span>
              <p className="text-[11px] text-[#A8988C]">
                Fresh Jain preparations available upon prior request.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7B70]">
          <p>
            © {new Date().getFullYear()} Jalsa Lake View Pure Veg Restaurant Udaipur. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#A8988C] hover:text-[#D9875F] transition-colors cursor-pointer px-4 py-1.5 rounded-full border border-[#3D2E27] hover:border-[#D9875F]/50"
            aria-label="Back to top"
          >
            <span className="text-[11px] tracking-wider uppercase">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

