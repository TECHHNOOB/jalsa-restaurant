import React from 'react';
import { ASSETS } from '../data/assets.ts';
import { Compass, MapPin, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF6EF] text-[#241C18] border-t border-[#EFE7DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Real Jalsa Image on Left (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative z-10 overflow-hidden shadow-[0_16px_40px_-10px_rgba(40,25,18,0.14)] rounded-[2rem] border-4 border-white bg-[#2E241F] aspect-[3/4]">
                <img
                  src={ASSETS.about.url}
                  alt={ASSETS.about.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Verified Location Badge */}
              <div className="absolute -bottom-4 sm:-bottom-5 right-4 sm:right-6 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#ECE2D5] shadow-[0_8px_24px_rgba(0,0,0,0.1)] text-left">
                <div className="flex items-center gap-1.5 text-[#A44A29] text-[10px] tracking-wider uppercase font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>PUROHIT JI KA KHURRA</span>
                </div>
                <div className="font-serif text-sm text-[#241C18] font-medium mt-0.5">
                  Old Udaipur Heritage
                </div>
              </div>
            </div>
          </div>

          {/* Text Content on Right (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left lg:pl-4">
            <div className="inline-flex items-center gap-2 mb-3 text-[#A44A29] font-medium text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#A44A29]" />
              <span>LAKEFRONT SANCTUARY</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#241C18] leading-[1.1] mb-6">
              A table with a <span className="italic font-normal text-[#A44A29]">view.</span>
            </h2>

            <div className="space-y-4 font-sans text-[#5E5147] text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                Nestled along the quiet heritage lanes of Purohit Ji Ka Khurra in Udaipur, Jalsa
                was founded on a straightforward promise: honest, delicious pure vegetarian cooking
                served with a tranquil view of Lake Pichola.
              </p>
              <p>
                From our rooftop terrace, the afternoon sun warms the stone arches while the evenings
                bring cooler breezes off the water. The surrounding Aravali hills and Sajjangarh
                Monsoon Palace shape our horizon, providing an unhurried sanctuary away from the
                bustling crowds.
              </p>
            </div>

            {/* Core Values / Human Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 mt-8 border-t border-[#EAE0D3]">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#A44A29]/10 text-[#A44A29] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-[#241C18] font-medium">
                    Uninterrupted Panorama
                  </h3>
                  <p className="text-xs text-[#706257] font-sans mt-0.5 leading-normal">
                    Open terrace views of Lake Pichola and the Monsoon Palace silhouette.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#A44A29]/10 text-[#A44A29] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-[#241C18] font-medium">
                    Pure Vegetarian Integrity
                  </h3>
                  <p className="text-xs text-[#706257] font-sans mt-0.5 leading-normal">
                    Strictly 100% vegetarian kitchen with dedicated Jain meal preparations.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

