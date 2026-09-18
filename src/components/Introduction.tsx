import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets.ts';

interface IntroductionProps {
  onDiscoverStory: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onDiscoverStory }) => {
  return (
    <section id="our-story" className="py-20 sm:py-28 bg-[#FAF6EF] text-[#241C18] overflow-hidden border-t border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with high rounded corners & Floating Badge matching reference */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_16px_40px_-10px_rgba(40,25,18,0.14)] border-4 border-white aspect-[4/5] bg-[#2E241F]">
              <img
                src={ASSETS.intro.url}
                alt={ASSETS.intro.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-102 hover:scale-106 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Bottom Left Badge: "10+ years crafting unforgettable evenings" */}
            <div className="absolute -bottom-4 sm:-bottom-5 left-4 sm:left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-[#ECE2D5] flex items-center gap-3">
              <span className="font-serif text-2xl font-bold text-[#A44A29] leading-none">10+</span>
              <span className="text-[11px] text-[#63554B] leading-tight max-w-[130px]">
                years crafting unforgettable evenings in Udaipur
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Typography matching reference */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left lg:pl-4">
            {/* Small uppercase eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 text-[#A44A29] font-medium text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#A44A29]" />
              <span>OUR STORY</span>
            </div>

            {/* Headline with italic accent */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#241C18] mb-6">
              A place where flavor meets <br />
              <span className="italic font-normal text-[#A44A29]">atmosphere.</span>
            </h2>

            {/* Body Text */}
            <p className="font-sans text-base sm:text-lg text-[#5E5147] font-normal leading-relaxed mb-8 max-w-xl">
              Jalsa Udaipur is a tribute to local Rajasthani ingredients, slow craftsmanship
              and warm Mewari hospitality. Every dish is composed by hand, every table set with
              intention, and every guest welcomed like family.
            </p>

            {/* 4 Feature Bullets with Circle Checkmarks (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl">
              <div className="flex items-center gap-2.5 text-sm text-[#3E322A]">
                <CheckCircle2 className="w-4 h-4 text-[#A44A29] flex-shrink-0" />
                <span>Seasonal market produce</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#3E322A]">
                <CheckCircle2 className="w-4 h-4 text-[#A44A29] flex-shrink-0" />
                <span>Hand-crafted, daily preparations</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#3E322A]">
                <CheckCircle2 className="w-4 h-4 text-[#A44A29] flex-shrink-0" />
                <span>100% Pure veg & Jain options</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#3E322A]">
                <CheckCircle2 className="w-4 h-4 text-[#A44A29] flex-shrink-0" />
                <span>Intimate, lakefront starlit dining</span>
              </div>
            </div>

            {/* Pill Button: Read Our Story */}
            <div>
              <button
                id="intro-discover-story-btn"
                onClick={onDiscoverStory}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#451A14] hover:bg-[#2F110D] text-white text-xs sm:text-sm font-sans tracking-wider uppercase font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer active:scale-98"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

