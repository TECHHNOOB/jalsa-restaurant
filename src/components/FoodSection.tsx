import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menu.ts';
import { ASSETS } from '../data/assets.ts';

interface FoodSectionProps {
  onOpenBooking: () => void;
}

export const FoodSection: React.FC<FoodSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('starters');

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);
  const currentCategoryMeta = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FAF6EF] text-[#241C18] border-t border-[#EFE7DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-[#A44A29] font-medium text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[1.5px] bg-[#A44A29]" />
            <span>AUTHENTIC CUISINE</span>
            <span className="w-5 h-[1.5px] bg-[#A44A29]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#241C18] leading-[1.1] mb-5">
            Made for the <span className="italic font-normal text-[#A44A29]">table.</span>
          </h2>

          <p className="font-sans text-[#5E5147] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Pure vegetarian recipes prepared for relaxed lunches, sunset gatherings, and memorable starlit dinners overlooking Lake Pichola.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs text-[#7A6C62] font-sans">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A44A29]" />
              100% Pure Vegetarian Kitchen
            </span>
            <span className="w-1 h-1 rounded-full bg-[#DCD0C0]" />
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A44A29]" />
              Jain Food Available
            </span>
            <span className="w-1 h-1 rounded-full bg-[#DCD0C0]" />
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A44A29]" />
              Desi Ghee & Hand-Ground Spices
            </span>
          </div>
        </div>

        {/* Categories Tab Navigation: Pill Style with mobile horizontal scrolling */}
        <div className="w-full overflow-x-auto pb-4 pt-1 mb-10 no-scrollbar flex sm:justify-center">
          <div className="inline-flex items-center gap-1 p-1.5 bg-[#F0E8DC] rounded-full border border-[#E4D9CA] w-max shrink-0 mx-auto sm:mx-0 shadow-xs">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-6 py-2 text-xs font-sans tracking-wider uppercase font-medium transition-all duration-200 whitespace-nowrap cursor-pointer rounded-full ${
                    isActive
                      ? 'bg-[#451A14] text-white shadow-sm'
                      : 'text-[#5E5147] hover:text-[#241C18] hover:bg-white/60'
                  }`}
                  id={`menu-tab-${cat.id}`}
                >
                  {cat.name.split('&')[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description */}
        {currentCategoryMeta && (
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-[0.25em] text-[#A44A29] uppercase font-sans font-semibold">
              {currentCategoryMeta.eyebrow}
            </span>
            <p className="font-serif italic text-lg text-[#5E5147] mt-1">
              {currentCategoryMeta.description}
            </p>
          </div>
        )}

        {/* Editorial Restaurant Menu Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 border-t border-b border-[#EAE0D3] py-10">
          {filteredItems.map((dish: MenuItem) => (
            <div key={dish.id} className="group flex flex-col justify-between py-1">
              <div>
                {/* Dish Name and Dots and Price */}
                <div className="flex items-baseline justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg sm:text-xl text-[#241C18] group-hover:text-[#A44A29] transition-colors font-medium">
                      {dish.name}
                    </span>
                    {dish.isSignature && (
                      <span className="text-[9px] font-sans tracking-wider uppercase px-2 py-0.5 bg-[#A44A29]/10 text-[#A44A29] font-semibold rounded-full border border-[#A44A29]/20">
                        Signature
                      </span>
                    )}
                    {dish.isHeritage && (
                      <span className="text-[9px] font-sans tracking-wider uppercase px-2 py-0.5 bg-[#EAE0D3] text-[#5E5147] font-semibold rounded-full">
                        Mewari
                      </span>
                    )}
                  </div>

                  {/* Dotted fill line */}
                  <span className="flex-1 mx-2 border-b border-dotted border-[#DCD0C0] hidden sm:block opacity-80" />

                  {/* Price in INR */}
                  <span className="font-serif text-lg sm:text-xl text-[#241C18] font-semibold tabular-nums shrink-0">
                    ₹{dish.price}
                  </span>
                </div>

                {/* Short Dish Description */}
                <p className="font-sans text-xs sm:text-sm text-[#706257] font-light mt-1.5 leading-relaxed pr-6">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Footer: PDF Download & Reservation CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-center sm:text-left">
          <div className="flex items-center gap-3 text-[#706257] text-xs font-sans">
            <FileText className="w-4 h-4 text-[#A44A29]" />
            <span>Complete printed menu available tableside on our rooftop terrace</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <a
              href={ASSETS.menuPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#DCD0C0] hover:border-[#A44A29] text-[#241C18] hover:text-[#A44A29] tracking-wider text-xs uppercase font-medium transition-colors shadow-xs"
              id="download-official-pdf-menu-btn"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Official PDF Menu</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#451A14] hover:bg-[#2F110D] text-white tracking-wider text-xs uppercase font-medium transition-colors shadow-sm hover:shadow-md cursor-pointer active:scale-98"
              id="menu-reserve-table-btn"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

