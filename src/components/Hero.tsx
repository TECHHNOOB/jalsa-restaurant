import React, { useState } from 'react';
import { ArrowRight, Clock, MapPin, Utensils, Star, Sparkles, ChefHat } from 'lucide-react';
import { ASSETS } from '../data/assets.ts';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToMenu: () => void;
}

const FALLBACK_HERO_IMAGE = 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2000&q=85';

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToMenu }) => {
  const [imgSrc, setImgSrc] = useState(ASSETS.hero.url);

  return (
    <section
      id="home"
      className="relative w-full bg-[#FAF6EF] text-[#241C18] pt-10 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main 2-Column Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small uppercase eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 text-[#A44A29] font-medium text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#A44A29]" />
              <span>JALSA UDAIPUR • LAKE VIEW PURE VEG</span>
            </div>

            {/* Massive Display Title with italic terracotta accent */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-tight leading-[1.05] text-[#241C18] mb-6">
              Exceptional dining, <br />
              <span className="italic font-normal text-[#A44A29]">beautifully</span> served.
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#5E5147] font-normal max-w-xl mb-8 leading-relaxed">
              A pure vegetarian dining house in the heart of Udaipur where seasonal flavors,
              warm hospitality and timeless lake atmosphere come together for evenings worth remembering.
            </p>

            {/* Action Buttons: Pill buttons matching reference */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#451A14] hover:bg-[#2F110D] text-white text-xs sm:text-sm font-sans tracking-wider uppercase font-medium shadow-[0_4px_16px_rgba(69,26,20,0.2)] hover:shadow-lg transition-all duration-300 group cursor-pointer active:scale-98"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToMenu}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white border border-[#DCD0C0] hover:border-[#A44A29] text-[#241C18] hover:text-[#A44A29] text-xs sm:text-sm font-sans tracking-wider uppercase font-medium shadow-xs transition-all duration-300 cursor-pointer active:scale-98"
              >
                View Full Menu
              </button>
            </div>

            {/* Rating Stars and Social Proof */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#72645A]">
              <div className="flex text-[#D9875F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-medium text-[#241C18]">4.9</span>
              <span>from 180+ guests</span>
              <span className="text-stone-300">•</span>
              <span className="text-[#A44A29] font-medium">Overlooking Lake Pichola</span>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Rounded Image Frame */}
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_16px_40px_-10px_rgba(40,25,18,0.18)] border-4 border-white aspect-[4/5] bg-[#2E241F]">
                <img
                  src={imgSrc}
                  alt={ASSETS.hero.alt}
                  referrerPolicy="no-referrer"
                  onError={() => setImgSrc(FALLBACK_HERO_IMAGE)}
                  className="w-full h-full object-cover object-center transform scale-102 hover:scale-106 transition-transform duration-1000 ease-out"
                  loading="eager"
                />
                {/* Subtle dark bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 pointer-events-none" />
              </div>

              {/* Floating Top Badge: "Sunset seating available" */}
              <div className="absolute -top-3 sm:-top-4 right-4 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-[#ECE2D5] flex items-center gap-2 text-xs font-sans text-[#241C18]">
                <Sparkles className="w-3.5 h-3.5 text-[#D9875F]" />
                <span className="font-medium">Sunset seating available</span>
              </div>

              {/* Floating Bottom Left Badge */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-4 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-[#ECE2D5] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#A44A29]/10 text-[#A44A29] flex items-center justify-center">
                  <ChefHat className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-[#241C18]">Mewari Heritage Kitchen</span>
                  <span className="text-[10px] text-[#7A6C62]">100% Pure Vegetarian</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Info Cards Grid matching reference UI */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Open Today */}
          <div className="bg-[#FAF3E8] border border-[#E9DFD0] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs hover:border-[#A44A29]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#A44A29]/10 text-[#A44A29] flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-[#241C18]">Open Today</div>
              <div className="text-xs text-[#7A6C62]">10:00 – 23:00</div>
            </div>
          </div>

          {/* Card 2: Location */}
          <div className="bg-[#FAF3E8] border border-[#E9DFD0] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs hover:border-[#A44A29]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#A44A29]/10 text-[#A44A29] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-[#241C18]">Purohit Ji Ka Khurra</div>
              <div className="text-xs text-[#7A6C62]">Chandpole, Udaipur</div>
            </div>
          </div>

          {/* Card 3: Cuisine */}
          <div className="bg-[#FAF3E8] border border-[#E9DFD0] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs hover:border-[#A44A29]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#A44A29]/10 text-[#A44A29] flex items-center justify-center flex-shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-[#241C18]">Pure Vegetarian</div>
              <div className="text-xs text-[#7A6C62]">Rajasthani & North Indian</div>
            </div>
          </div>

          {/* Card 4: Rating */}
          <div className="bg-[#FAF3E8] border border-[#E9DFD0] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs hover:border-[#A44A29]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#A44A29]/10 text-[#A44A29] flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-[#241C18]">4.9 Rating</div>
              <div className="text-xs text-[#7A6C62]">180+ Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

