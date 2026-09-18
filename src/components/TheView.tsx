import React from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../data/assets.ts';

interface TheViewProps {
  onExperienceClick: () => void;
}

export const TheView: React.FC<TheViewProps> = ({ onExperienceClick }) => {
  return (
    <section id="the-view" className="relative py-20 sm:py-28 bg-[#241A16] text-[#FAF6EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Top Spacing */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-[#3D2E27] pb-8">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-[#D9875F] font-medium text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#D9875F]" />
              <span>THE PANORAMA</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
              Udaipur, from a <br />
              <span className="italic font-normal text-[#D9875F]">different table.</span>
            </h2>
          </div>

          <div className="max-w-md text-left">
            <p className="font-sans text-[#B3A295] text-sm sm:text-base leading-relaxed mb-6">
              An open rooftop setting, starlit skies, and the golden hues of Lake Pichola throughout the day.
            </p>
            <button
              id="the-view-experience-btn"
              onClick={onExperienceClick}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#A44A29] hover:bg-[#8F3E20] text-white tracking-wider text-xs uppercase font-medium transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-98"
            >
              <span>Experience Jalsa</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cinematic Photographic Canvas with High Rounded Corners */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-[#3D2E27] group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#16100D]">
            <img
              src={ASSETS.theView.url}
              alt={ASSETS.theView.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-104 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            {/* Subtle warm vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="text-left">
                <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#D9875F] uppercase font-medium block mb-1">
                  SUNSET OVER LAKE PICHOLA & MONSOON PALACE
                </span>
                <p className="font-serif text-lg sm:text-2xl text-stone-100 font-light italic">
                  Evenings unfold in shades of saffron, amber, and deep royal blue.
                </p>
              </div>
              <div className="text-right hidden md:block">
                <span className="text-xs font-sans text-stone-300 font-light tracking-widest block">
                  302, PUROHIT JI KA KHURRA
                </span>
                <span className="text-xs font-sans text-stone-400 font-light">
                  Old Udaipur, Rajasthan
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

