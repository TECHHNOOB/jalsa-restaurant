import React, { useState } from 'react';
import { Calendar, Utensils, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets.ts';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onScrollToMenu: () => void;
}

const FALLBACK_CTA_IMAGE = 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2000&q=85';

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking, onScrollToMenu }) => {
  const [imgSrc, setImgSrc] = useState(ASSETS.finalCta.url);

  return (
    <section className="relative isolate py-28 md:py-36 flex items-center justify-center text-center text-white overflow-hidden bg-[#1E1714]">
      {/* Real Cinematic Sunset Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={imgSrc}
          alt={ASSETS.finalCta.alt}
          referrerPolicy="no-referrer"
          onError={() => setImgSrc(FALLBACK_CTA_IMAGE)}
          className="w-full h-full object-cover object-center scale-105"
          loading="lazy"
        />
        {/* Subtle Dark Vignette / Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/75" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-[#D9875F] font-medium text-xs tracking-[0.25em] uppercase">
          <span className="w-5 h-[1.5px] bg-[#D9875F]" />
          <span>ROOFTOP RESERVATIONS</span>
          <span className="w-5 h-[1.5px] bg-[#D9875F]" />
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-white mb-4 leading-tight">
          Your table is <span className="italic font-normal text-[#D9875F]">waiting.</span>
        </h2>

        <p className="font-serif text-xl sm:text-2xl italic font-normal text-stone-200 mb-10 max-w-xl mx-auto">
          Come for the view. Stay for the food.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-book-table-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#BA704F] hover:bg-[#A45E40] text-white tracking-wider text-xs uppercase font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Table</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            id="final-cta-view-menu-btn"
            onClick={onScrollToMenu}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 tracking-wider text-xs uppercase font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Utensils className="w-4 h-4" />
            <span>View Full Menu</span>
          </button>
        </div>
      </div>
    </section>
  );
};

