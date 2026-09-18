import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { ASSETS } from '../data/assets.ts';

interface SignatureDishesProps {
  onOpenBooking: () => void;
  onScrollToMenu?: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onOpenBooking, onScrollToMenu }) => {
  const dishes = ASSETS.signatureFood;

  return (
    <section id="signature" className="py-20 sm:py-28 bg-[#FAF6EF] text-[#241C18] border-t border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-[#A44A29] font-medium text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#A44A29]" />
              <span>SIGNATURE CREATIONS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#241C18] leading-[1.1] mb-4">
              Dishes you'll come <br />
              <span className="italic font-normal text-[#A44A29]">back for.</span>
            </h2>
            <p className="font-sans text-[#5E5147] text-sm sm:text-base leading-relaxed">
              Each plate is crafted to highlight the purity of authentic Mewari ingredients,
              anchored by traditional slow cooking and pure vegetarian integrity.
            </p>
          </div>

          <div>
            <a
              href="#menu"
              onClick={(e) => {
                if (onScrollToMenu) {
                  e.preventDefault();
                  onScrollToMenu();
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#DCD0C0] hover:border-[#A44A29] text-[#241C18] hover:text-[#A44A29] text-xs font-sans tracking-wider uppercase font-medium shadow-xs transition-all duration-300 cursor-pointer"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Card Dish Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white border border-[#ECE2D5] rounded-[1.75rem] p-3.5 sm:p-4 shadow-xs hover:shadow-md hover:border-[#A44A29]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Dish Photo */}
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF3E8] mb-4">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Category / Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm text-[#A44A29] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full shadow-xs border border-[#ECE2D5]">
                    {dish.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="text-left px-1">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#241C18] mb-1 group-hover:text-[#A44A29] transition-colors leading-snug">
                    {dish.title}
                  </h3>
                  <div className="text-[11px] text-[#A44A29] font-medium tracking-wide mb-2 uppercase">
                    {dish.subtitle}
                  </div>
                  <p className="font-sans text-xs text-[#706257] leading-relaxed mb-4 line-clamp-3">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Price and Reserve pill */}
              <div className="pt-3 border-t border-[#F2ECE3] flex items-center justify-between px-1 mt-auto">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8A7B70] block">Price</span>
                  <span className="font-serif text-lg font-bold text-[#241C18]">₹{dish.price}</span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-8 h-8 rounded-full bg-[#FAF3E8] group-hover:bg-[#451A14] text-[#241C18] group-hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Reserve a table for this dish"
                  aria-label={`Reserve table for ${dish.title}`}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

